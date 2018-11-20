import {JetView} from "webix-jet";
import {PhoneBrand} from "../models/phoneBrand";

export default class Tree extends JetView {
    config() {
        return {
            rows:[
                { 
                    view:"tree", 
                    width: 300,
                    template:"{common.icon()}{common.folder()}#categoryName#",
                    url: "/server/category"
                }
                ]
            }
        }

    init() {
        
    }


}