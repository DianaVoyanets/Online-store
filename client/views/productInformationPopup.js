import {JetView} from "webix-jet";
import {Products} from "../models/ProductsCollection";

export default class productInfprmationPopup extends JetView {
    config() {
        return {
            view: "popup",
            width: 500,
            height: 350,
            modal: true,
            position: "center", 
            body:{
                rows: [
                    {
                        view: "toolbar",
                        css: "window_toolbar",
                        cols: [
                            {view:"label",localId: "product:name:label",label: "#value#", width: 450,align: "center"},
                            {
                                localId: 'product:information:toolbar',
                                css: 'close_window_icon',
                                template: `<span class='close_window'>×</span>`, 
                                onClick: {
                                    "close_window": () => this.hide()
                                }
                            },
                        ]
                    },
                    {
                        localId: "product:information:layout",
                        template: (obj) => `<div class="phone_information">
                                                <div style="margin-left:0;margin-top: 50px">${obj.image}</div>
                                                <div style="margin-left: 200px;margin-bottom: 30px"><b>Name:</b> ${obj.productName}</div>
                                                <div style="margin-left: 200px;margin-bottom: 30px"><b>Price:</b> ${obj.price}</div>
                                                <div style="margin-left: 200px"><b>Rating:</b> ${obj.rating} <span style="font-size: 19px"><i class="mdi mdi-star-half"></i></span></div>
                                            </div>`,
                        onClick: {
                            'mdi-star-half': () => {
                                let selecteItemId = this.datatable.getSelectedItem().id;
                                let dataFromProductsCollection = Products.getItem(selecteItemId);
                                dataFromProductsCollection.rating++;
                                Products.updateItem(this.datatable.getSelectedItem().id,dataFromProductsCollection);
                                this.app.callEvent('datatableUpdate');
                            }
                        }
                    }
                ]
            }
        }
    }

    init() {
        Products.attachEvent('onDataUpdate', () => this.$$('product:information:layout').refresh());
    }

    show(options) {
        this.datatable = options.getDatatable;
        this.$$("product:name:label").setValue(options.row.productName);
        this.$$("product:information:layout").setValues(options.row);
        this.getRoot().show();
    }

    hide() {
        this.getRoot().hide();
    }
}