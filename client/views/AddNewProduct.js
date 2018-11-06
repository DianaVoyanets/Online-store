import {JetView} from "webix-jet";

export default class AddNewProduct extends JetView {
    config() {
        return {
            view: "form",
            elements: [
                {view: "spacer",height: 100},
                {
                    cols: [
                        {view: "spacer",width: 350},
                        {view: "text",label: "Name:",required:true},
                        {view: "spacer",width: 350}
                    ]
                },
                {
                    cols: [
                        {view: "spacer",width: 350},
                        {view: "text",label: "Price:",required:true},
                        {view: "spacer",width: 350}
                    ]
                },
                {
                    cols: [
                        {view: "spacer",width: 350},
                        {view:"uploader",value:"Add picture"},
                        {view: "spacer",width: 350}
                    ]
                },
                {
                    cols: [
                        {view: "spacer",width: 350},
                        {view: "textarea"},
                        {view: "spacer",width: 350}
                    ]
                },
                {
                    cols: [
                        {view: "spacer",width: 850},
                        {view: "button",value: "Add new product",width: 300},
                        {view: "spacer"},
                    ]
                },
                {view: "spacer"}
            ]
        }
    }
}