import {JetView} from "webix-jet";

export default class productInfprmationPopup extends JetView {
    config() {
        return {
            view: "popup",
            width: 500,
            height: 400,
            modal: true,
            position: "center", 
            body:{
                rows: [
                    {
                        view: "toolbar",
                        css: "window_toolbar",
                        cols: [
                            {view:"label", localId: "product:name:label",label: "#name#", width: 450,align: "center"},
                            {template: "<span class='close_window'>×</span>", 
                                onClick: {
                                    "close_window": () => this.hide()
                                }
                            },
                        ]
                    },
                    {
                        localId: "product:information:template", 
                        template: (obj) => {
                            return (
                                `<span>Name: ${obj.name}</span><br>
                                <span>Price: ${obj.price}</span><br>
                                <span>Rating: ${obj.rating}</span>` 
                            )
                        }
                    }
                ]
            }
        }
    }

    show(options) {
        this.$$("product:name:label").setValue(options.row.name);
        this.$$("product:information:template").setValues(options.row);
        this.getRoot().show();
    }

    hide() {
        this.getRoot().hide();
    }
}