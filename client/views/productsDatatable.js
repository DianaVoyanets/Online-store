import {JetView} from "webix-jet";
import "../helpers/activeDatatable";
import productInformationPopup from "views/productInformationPopup";
import {Products} from "../models/ProductsCollection";
import { productsBasket } from "../models/productsBasket";

export default class productsDatatable extends JetView {
    config() {
        return {
            view: "datatableWithCounter",
            select: true,
            columns:[
                { id:"image", header:"Image",  width: 260},
                { id:"productName", header: ["Name",{content:"textFilter"}], width: 260},
                { id:"price", header:"Price", width: 270},
                { id:"rating", name: 'rating', header:"Rating", width: 270},
                { header:"Amount",width: 210, template: "<div>{common.counterButton()}</div>"},
                { header: "Buy",template: '<span class="mdi mdi-cart basket"></span>',fillspace:true}
            ],
            onClick: {
                'mdi-cart': (e, id) => {
                    let objToBasket = Products.getItem(id.row);
                    let testObj = {image: objToBasket.image, productName: objToBasket.productName, price: objToBasket.price, amount: 1,totalPrice: 1 * objToBasket.price }
                    productsBasket.add(testObj);
                },   
            },
            on: {
                onItemDblClick: (selectedItem) => {
                    const item = this._getProductsDatatable().getItem(selectedItem.row);
                    this.informationPopup.show({
                        getDatatable: this._getProductsDatatable(),
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
        this.on(this.app,'onAfterTreeItemSelect', (selectedId) => {
            this.getRoot().clearAll();
            this.getRoot().parse(Products.getItem(selectedId));
        });
        this.on(this.app,'datatableUpdate', () => this.getRoot().refresh());
    }

    _getProductsDatatable() {
        return this.getRoot();
    }
}