import {JetView} from "webix-jet";
import {Category} from "models/categoryCollection";

webix.DataDriver.plainjs = webix.extend({
    arrayToHash: function (data) {
        let hash = {};

        for (let i = 0; i < data.length; i++) {
            let parentId = data[i].categoryOfProductId;

            if(!parentId) {
                parentId = 0;
                data[i].categoryOfProductId  = null;
            }

            if (!hash[parentId]) {
                hash[parentId] = [];
            }

            hash[parentId].push(data[i]);
        }

        return hash;
    },
    hashToTree: function (hash, level) {
        let top = hash[level];
        if (!top) return hash;

        for (let i = 0; i < top.length; i++) {
            let branch = top[i].id;
            let phoneBrand = top[i].PhoneBrands;

            if (phoneBrand && phoneBrand.length > 0) {
                    top[i].data = phoneBrand;
            }

            top[i].data = (top[i].data || []).concat(this.hashToTree(hash, branch));
        }

        return top;
    },
    getRecords: function (data, id) {
        var hash = this.arrayToHash(data);
        return this.hashToTree(hash, 0);
    }
}, webix.DataDriver.json);

export default class Tree extends JetView {
    config() {
        return {
            rows:[
                { 
                    view:"tree", 
                    width: 300,
                    datatype: "plainjs",
                    template: (obj,common) => {
                        let name = (obj.categoryOfProductId) ? obj.markName : obj.categoryName
                        return `${common.icon(obj,common)}${common.folder(obj, common)}<span>${name}</span>`
                    },
                    url: "/server/category"
                }
            ]
        }
    }
}