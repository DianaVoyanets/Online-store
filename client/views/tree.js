import {JetView} from "webix-jet";
webix.DataDriver.plainjs = webix.extend({
    arr2hash: function (data) {
        var hash = {};
        for (var i = 0; i < data.length; i++) {
            var parentId = data[i].parent_id;
            if(!parentId) {
                parentId = 0;
            }
            if (!hash[parentId]) {
                if(!parentId) {
                    hash[0] = [];
                    hash[0].push(data[i]); 
                } else {
                    hash[parentId] = [];
                    hash[parentId].push(data[i]);
                }
            }
        }
        return hash;
    },
    hash2tree: function (hash, level) {
        var top = hash[level];
        for (var i = 0; i < top.length; i++) {
            var branch = top[i].id;
            if (hash[branch])
                top[i].data = this.hash2tree(hash, branch);
        }
        return top;
    },
    getRecords: function (data, id) {
        var hash = this.arr2hash(data);
        return this.hash2tree(hash, 0);
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
                    data: [
                        {id: 1,value: 'Phone'},
                        {id: 2,parent_id: 1,value: 'test'}
                    ]
                }
                ]
            }
        }

    init() {
    }


}