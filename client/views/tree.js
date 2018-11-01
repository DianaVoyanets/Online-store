import {JetView} from "webix-jet";

export default class Tree extends JetView {
    config() {
        return {
            view: "tree",
            scroll: true,
            width: 400,
            select: true,
            data: [
                { id:"1", open:true, value:"Phones", data:[
                  { id:"1.1", value:"Lenovo" },
                  { id:"1.2", value:"Samsung" },
                  { id:"1.3", value:"Nokia" }
                ]}
            ]
        }
    }
}