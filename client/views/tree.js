import { JetView } from "webix-jet";
import { treeData } from "models/treeCollection";

export default class Tree extends JetView {
    config() {
        return {
            rows:[
                { 
                    view:"tree", 
                    localId: 'tree',
                    width: 300
                }
            ]
        }
    }

    init() {
        treeData.waitData.then(() => {
            let treeDataArray = [];
            treeDataArray.push(treeData.getItem(treeData.getFirstId()));
            this.getRoot().queryView({view: 'tree'}).parse(treeDataArray);
        });
    }
}