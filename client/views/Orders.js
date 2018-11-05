import {JetView} from "webix-jet";
import changeStatusPopup from "views/changeStatusPopup";

export default class Orders extends JetView {
    config() {
        return {
            view: "datatable",
            select: "column",
            columns:[
                {id: "id",header: ["#",{content: "textFilter"}],width: 150},
                {id: "product", header: ["Product", {content: "textFilter"}],width: 150},
                {id: "amount",header: "Amount",width: 150},
                {id: "buyerName",header: ["Buyer name",{content: "textFilter"}],width: 150},
                {id: "bayerEmail",header: "Bayer email",width: 150},
                {id: "phone",header: "Phone",width: 150},
                {id: "address", header: "Address",width: 150},
                {id: "delivery", header: "Delivery",width: 150},
                {id: "payment",header: "Payment",width: 150},
                {id: "orderDate",header: "Order date",width: 150},
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