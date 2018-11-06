import {JetView} from "webix-jet";
import changeStatusPopup from "views/changeStatusPopup";

export default class Orders extends JetView {
    config() {
        return {
            view: "datatable",
            select: "column",
            columns:[
                {id: "id",header: "#",width: 135},
                {id: "product", header: ["Product", {content: "textFilter"}],width: 175},
                {id: "amount",header: "Amount",width: 135},
                {id: "buyerName",header: ["Buyer name",{content: "textFilter"}],width: 135},
                {id: "bayerEmail",header: "Bayer email",width: 135},
                {id: "phone",header: "Phone",width: 135},
                {id: "address", header: "Address",width: 135},
                {id: "delivery", header: "Delivery",width: 135},
                {id: "payment",header: "Payment",width: 135},
                {id: "orderDate",header: "Order date",width: 135},
                {id: "status",header: "Status",fillspace: true,select: true}
            ],
            on: {
                "onAfterSelect": (selectedItem) => {
                    if (selectedItem.column === 'status') {
                        this.changeStatusPopup.show();
                    }
                }
            },
            data:[
                {id:1, product: "Samsung Galaxy S6 Edge", amount: 2, buyerName:"Dede", bayerEmail: "dede@gmail.com", phone: 12213, address: "asdasd", delivery: "Master", payment: "Card", orderDate: "12.10.11", status: "in progress"},
            ]
        }
    }

    init() {
        this.changeStatusPopup = this.ui(changeStatusPopup);
    }
}