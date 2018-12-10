import { JetView } from "webix-jet";
import { treeData } from "models/treeCollection";



export default class Tree extends JetView {
    config() {
        this.fakeTreeData = [];
        return {
            rows:[
                { 
                    view: "tree", 
                    width: 300,
                    select: true,
                    open: true,
                    on: {
                        "onAfterSelect": (id) => {
                            let selectedId = this.getRoot().queryView({view: 'tree'}).getItem(id)._id;
                            this.show(`productsDatatable?id=${selectedId}`);
                        }
                    }
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