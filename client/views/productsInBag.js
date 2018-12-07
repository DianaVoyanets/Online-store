import { JetView } from "webix-jet";
import { productsBasket } from "../models/productsBasket";

export default class ProductsInBag extends JetView {
    config() {
        return {
            rows: [
                {
                    view: "datatable",
                    localId: 'products:basket',
                    columns: [
                        {id: "image",header: "Image",width: 250},
                        {id: "productName",header: "Name",fillspace: true,},
                        {id: "amount",header: "Amount",width: 250},
                        {id: "price",header: "Price",width: 250},
                        {id: "totalPrice", header: "Sum",width: 250},
                        {id:"trash-icon", header: "",template: "{common.trashIcon()}",width:50},
                    ],
                    onClick: {
                        'wxi-trash': (event, id) => {
                            webix.confirm({
								text:"Do you still want to remove field?",
								callback: (confirmed) =>  {
									if (confirmed) {
										productsBasket.remove(id);
										return false;
									}
								}
							});
                        }
                    },  
                },
                {
                    view: "label", 
                    label: "Total:",
                    localId: 'total:label',
                    height: 60
                },
                {
                    cols: [
                        {view: "spacer"},
                        {view: "spacer"},
                        {
                            view: "button",
                            value: "Make order",
                            width: 350,
                            click: () => this.show('checkoutForm')
                        },
                    ]
                }
            ]
         
        }
    }
    init() {
        productsBasket.waitData.then(() => {
            // const reducer = (accumulator, currentValue) => accumulator + currentValue.totalPrice;

            // console.log(productsBasket.data.pull.reduce(reducer));
            this.$$('total:label').setValue(`Total:${123}`);
            this.$$('products:basket').sync(productsBasket);
        });
    }
}