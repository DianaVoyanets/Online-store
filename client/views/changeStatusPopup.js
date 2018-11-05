import {JetView} from "webix-jet";

export default class changeStatusPopup extends JetView {
    config() {
        return {
            view: "window",
            width: 490,
			height: 400,
            modal: true,
            position: "center",
            on: {
                "onHide": () => {
                    this.$$("indicate:reason:text:area").hide();
                    this.getRoot().queryView({view: "form"}).clear();
                    this.getRoot().queryView({view: "form"}).clearValidation();
                }
            },
            head: {
                view: "toolbar", elements: [
                    {view: "label",label: "Change status",align: "center"},
                    {view: "template",width: 30, template: '<span class="close_icon">×</span>',
                        onClick: {
                            "close_icon": () => this.getRoot().hide()
                        }
                    }
                ],
            },
            body: {
                rows: [ 
                    {view: "form",elements: [
                        {view: "combo",labelWidth: 120, label: "Choose status:",options: ["In progress","Declined"],
                            on: {
                                "onChange": (selectedOption) => {
                                    if (selectedOption === 'Declined') {
                                        this.$$("indicate:reason:text:area").show()
                                    }
                                }
                            }
                        },
                        {view: "textarea", width: 500, height: 200,labelWidth: 120, localId: "indicate:reason:text:area",label: "Indicate reason:",hidden: true},
                    ]},
                    {view: "button", value: "Save"}
                ]
            }
        }
    }

    show() {
        this.getRoot().show();
    }
}