// import {JetView} from "webix-jet";
// import changeStatusPopup from "views/changeStatusPopup";

// export default class Orders extends JetView {
//     config() {
//         return {
//             view: "datatable",
//             select: "column",
//             columns:[
//                 {id: "id",header: "#",width: 135},
//                 {id: "product", header: ["Product", {content: "textFilter"}]},
//                 {id: "amount",header: "Amount"},
//                 {id: "buyerName",header: ["Buyer name",{content: "textFilter"}]},
//                 {id: "bayerEmail",header: "Bayer email"},
//                 {id: "phone",header: "Phone"},
//                 {id: "address", header: "Address"},
//                 {id: "delivery", header: "Delivery"},
//                 {id: "payment",header: "Payment"},
//                 {id: "orderDate",header: "Order date"},
//                 {id: "status",header: "Status"}
//             ],
//             on: {
//                 "onAfterSelect": (selectedItem) => {
//                     if (selectedItem.column === 'status') {
//                         this.changeStatusPopup.show();
//                     }
//                 }
//             },
//             data:[
//                 {id:1, product: "Samsung Galaxy S6 Edge", amount: 2, buyerName:"Dede", bayerEmail: "dede@gmail.com", phone: 12213, address: "asdasd", delivery: "Master", payment: "Card", orderDate: "12.10.11", status: "in progress"},
//             ]
//         }
//     }

//     init() {
//         this.changeStatusPopup = this.ui(changeStatusPopup);
//     }
// }