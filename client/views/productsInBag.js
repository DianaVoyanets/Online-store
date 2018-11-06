import { JetView } from "webix-jet";


export default class ProductsInBag extends JetView {
    config() {
        return {
            rows: [
                {
                    view: "datatable",
                    columns: [
                        {id: "image",header: "Image",width: 250},
                        {id: "name",header: "Name",fillspace: true,},
                        {id: "amount",header: "Amount",width: 250},
                        {id: "price",header: "Price",width: 250},
                        {id: "sum", header: "Sum",width: 250},
                        {id:"trash-icon", header: "",template: "{common.trashIcon()}",width:50},
                    ],
                    data: [
                        {id:1, image: "Here will be image", name: "Lenovo K5",amount: 1,price: 380,sum: 380},
                        {id:2, image: "Here will be image", name: "Lenovo S920",amount: 1,price: 370,sum: 370},
                    ]
                },
                {
                    view: "label", 
                    label: "Total: 1234",
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
}