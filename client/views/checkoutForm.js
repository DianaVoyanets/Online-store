import { JetView } from "webix-jet";


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
                                {view: "text",label: "Your name:",name: "name",invalidMessage: "Your name can not be empty", required: true, labelWidth: 140,width: 700}, 
                                {view: "text",label: "Email:",name: "email",invalidMessage: "Email can not be empty", labelWidth: 140,required: true},
                                {view: "text",label: "Phone:",name: "phone", invalidMessage: "Phone can not be empty",labelWidth: 140, required: true},
                                {view: "combo",label: "Delivery type:",invalidMessage: "Phone can not be empty",name: "delivery_type",labelWidth: 140, required: true,options: ["Card","Cash"]},
                                {view: "combo",label: "Payment type:",invalidMessage: "Payment type can not be empty",name: "payment_type",labelWidth: 140, required: true, options: ["Card","Cash"]},
                                {
                                    view: "button",
                                    value: "Checkout",
                                    click: () => {
                                        // const $form = this.$$("checkout:form");
                                        if(this.$$("checkout:form").validate()) {
                                            this.show('historyDatatable');
                                        }
                                    }
                                },
                            ],
                            rules: {
                                name: webix.rules.isNotEmpty,
                                email: webix.rules.isNotEmpty,
                                phone: webix.rules.isNotEmpty,
                                delivery_type: webix.rules.isNotEmpty, 
                                payment_type: webix.rules.isNotEmpty
                            }
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