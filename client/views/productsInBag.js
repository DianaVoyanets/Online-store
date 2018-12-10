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
                        {id: "image",header: "Image"},
                        {id: "productName",header: "Name"},
                        {id: "amount",header: "Amount"},
                        {id: "price",header: "Price"},
                        {id: "totalPrice", header: "Sum"},
                        {id:"trash-icon", header: "",template: "{common.trashIcon()}"},
                    ],
                    onClick: {
                        'wxi-trash': (event, id) => {
                            webix.confirm({
								text:"Do you still want to remove this product from bag?",
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
        this.refreshTotalProductsPriceLabel();
        productsBasket.waitData.then(() => {
            this.$$('products:basket').sync(productsBasket);
        });
        productsBasket.attachEvent('onAfterAdd',() => this.refreshTotalProductsPriceLabel());
        productsBasket.attachEvent('onDataUpdate',() => this.refreshTotalProductsPriceLabel());
    }

    refreshTotalProductsPriceLabel() {
        productsBasket.waitData.then(() => {
        let totalProductsPrice = productsBasket.serialize().reduce((total,curent) => {
                return total + curent.totalPrice
            },0);
        this.$$('total:label').setValue(`Total: ${totalProductsPrice}`);
        });
    }
}