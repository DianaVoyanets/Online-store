function createTree(obj) {
    for (var key in obj) {
        if (key === 'id') {
            obj['_' + key] = obj[key];
            delete obj[key];
        }
        else if (key === 'productCategory' || key === 'brandName' || key === 'productName') {
            obj['value'] = obj[key];
            delete obj[key];
        } 
        else if (typeof obj[key] === 'object') {
            createTree(obj[key]);
        }
    }
}

export const treeData = new webix.DataCollection({
    url: "/server/tree",
    scheme: {
        $init: (obj) => {
            createTree(obj);
        }
    }
});