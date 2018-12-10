import { JetView } from "webix-jet";
import {orders} from "../models/ordersHistoryCollection";
import {productsBasket} from "../models/productsBasket";


export default class CheckoutFrom extends JetView {
    config() {
        return {
            rows: [
                {view: "spacer"},
                {
                    cols: [
                        {view: "spacer"},
                        {
                            view: "form",
                            localId: "checkout:form",
                            margin: 20,
                            elements: [
                                {view: "text",label: "Your name:",name: "bayerName",invalidMessage: "Your name can not be empty", required: true, labelWidth: 140,width: 700}, 
                                {view: "text",label: "Email:",name: "bayerEmail",invalidMessage: "Email can not be empty", labelWidth: 140,required: true},
                                {view: "text",label: "Phone:",name: "phone", invalidMessage: "Phone can not be empty",labelWidth: 140, required: true},
                                {view: "combo",label: "Delivery type:",invalidMessage: "Phone can not be empty",name: "delivery",labelWidth: 140, required: true,options: ["pickup","by courier"]},
                                {view: "text",label: "Delivary address:",invalidMessage: 'Address can not be empty',name: 'address',labelWidth:140,required: true},
                                {view: "combo",label: "Payment type:",invalidMessage: "Payment type can not be empty",name: "payment",labelWidth: 140, required: true, options: ["Card","Cash"]},
                                {
                                    view: "button",
                                    value: "Checkout",
                                    click: () => {
                                        console.log(this.$$("checkout:form").getValues());
                                        if(this.$$("checkout:form").validate()) {
                                            let productsInBag = productsBasket.serialize();
                                            let ordersData = this.$$("checkout:form").getValues();
                                            for(let i = 0; i < productsInBag.length;i++) {
                                                ordersData.productName = productsInBag[i].productName;
                                                ordersData.amount = productsInBag[i].amount;
                                                ordersData.status = 'In progress';
                                                ordersData.id = webix.uid();
                                                orders.add(ordersData);
                                                productsBasket.remove(productsInBag[i].id);
                                            }
                                            this.show('historyOrdersDatatable');
                                        }
                                    }
                                },
                            ],
                            // rules: {
                            //     name: webix.rules.isNotEmpty,
                            //     email: webix.rules.isNotEmpty,
                            //     phone: webix.rules.isNotEmpty,
                            //     delivery_type: webix.rules.isNotEmpty, 
                            //     payment_type: webix.rules.isNotEmpty
                            // }
                        },
                        {view: "spacer"}
                    ]
                },
                {
                    view: "spacer"
                }
            ]
        }
    }
}