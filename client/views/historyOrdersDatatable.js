import {JetView} from "webix-jet";
import changeStatusPopup from "views/changeStatusPopup";
import {orders} from "models/ordersHistoryCollection";

export default class historyOrdersDatatable extends JetView {
    config() {
        return {
            view: "datatable",
            scroll: true,
            select: true,
            columns: [
                {id: 'productName', header:[ "Product name",{content:"textFilter"}]},
                {id: 'amount', header: "Amount"},
                {id: 'bayerName',header: 'Bayer name'},
                {id: 'bayerEmail',header: 'Bayer email'},
                {id: 'address', header: "Address"},
                {id: 'delivery', header: "Delivery"},
                {id: 'payment', header: "Card"},
                {id: 'createdAt', header: "Order date"},
                {id: 'status', header: "Status"},
            ],
            on: {
                "onAfterSelect": (selectedItem) => {
                    if (selectedItem.column === 'status') {
                        this.changeStatusPopup.show();
                    }
                }
            },
        }
    }
    init() {
        this.getRoot().sync(orders);
        this.changeStatusPopup = this.ui(changeStatusPopup);
    }
}