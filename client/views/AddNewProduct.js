import {JetView} from "webix-jet";
import {Products} from '../models/ProductsCollection';
import {PhoneBrands} from '../models/PhoneBrandsCollection';
 
export default class AddNewProduct extends JetView {
    config() {
        return {
            view: "form",
            elements: [
                {view: "spacer",height: 100},
                {
                    cols: [
                        {view: "spacer",width: 350},
                        {view: "text",label: "Name:", labelWidth: 100,name: 'value', required:true},
                        {view: "spacer",width: 350}
                    ]
                },
                {
                    cols: [
                        {view: "spacer",width: 350},
                        {view: "text",label: "Price:", labelWidth: 100,name: 'price',required:true},
                        {view: "spacer",width: 350}
                    ]
                },
                {
                    cols: [
                        {view: "spacer",width: 350},
                        // {view:"uploader",value:"Add picture"},
                        {view: "text", label: "Image", labelWidth: 100,name: 'image',required: true},
                        {view: "spacer",width: 350}
                    ]
                },
                {
                    cols: [
                        {view: "spacer",width: 350},
                        // {view:"uploader",value:"Add picture"},
                        {view: "combo", width: 400,labelWidth: 100,label: "Phone brand",options:{body: {template: '#value#',data: PhoneBrands}}},
                        {view: "spacer",width: 350}
                    ]
                },
                {
                    cols: [
                        {view: "spacer",width: 460},
                        {view: "button",value: "Add new product",width: 200, click: () => this.addNewProduct()},
                        {view: "spacer"},
                    ]
                },
                {view: "spacer"}
            ]
        }
    }


    addNewProduct() {
        let itemFromFormInput = this.getRoot().getValues();
        itemFromFormInput.rating = 0;
        Products.add(itemFromFormInput);
        this.getRoot().clear();
    }
}