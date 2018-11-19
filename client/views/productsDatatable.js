import {JetView} from "webix-jet";
import "../helpers/activeDatatable";
import productInformationPopup from "views/productInformationPopup";
import {Products} from "../models/ProductsCollection";

export default class productsDatatable extends JetView {
    config() {
        return {
            view: "datatableWithCounter",
            columns:[
                { id:"image", header:"Image",  width: 260},
                { id:"productName", header: ["Name",{content:"textFilter"}],   width: 260},
                { id:"price",  header:"Price",  width: 270},
                { id:"rating", header:"Rating", width: 270},
                { header:"Amount",width: 210, template: "<div>{common.counterButton()}</div>"},
                { header: "Buy", template: '<span class="mdi mdi-cart basket"></span>',fillspace:true}
            ],
            on: {
                onItemDblClick: (selectedItem) => {
                    const item = this._getProductsDatatable().getItem(selectedItem.row);
                    this.informationPopup.show({
                        row: item
                    }) 
                }
            },
            activeContent:{
				counterButton:{
					view:"counter",
					value: 0,
					width: 120
				}
			},
        }
    }

    init() {
        this.informationPopup = this.ui(productInformationPopup);
        this.getRoot().sync(Products);
    }

    _getProductsDatatable() {
        return this.getRoot();
    }
}