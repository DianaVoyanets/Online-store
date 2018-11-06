import {JetView} from "webix-jet";

export default class historyDatatable extends JetView {
    config() {
        return {
            view: "datatable",
            columns: [
                {id: 'product_name', header:[ "Product name",{content:"textFilter"}],width: 170},
                {id: 'amount', header: "Amount",width: 170},
                {id: 'address', header: "Address",width: 170},
                {id: 'delivery', header: "Delivery",width: 170},
                {id: 'payment', header: "Card",width: 170},
                {id: 'order_date', header: "Order date",width: 170},
                {id: 'status', header: "Status",fillspace: true},
            ],
            data: [
                
            ]
        }
    }
}