import {JetView} from "webix-jet";
import "../helpers/activeDatatable";
import productInformationPopup from "views/productInformationPopup";
import {Products} from "../models/ProductsCollection";
import {productsBasket} from "../models/productsBasket";

export default class productsDatatable extends JetView {
    config() {
        return {
            view: "datatableWithCounter",
            select: true,
            columns:[
                { id:"image", header:"Image"},
                { id:"productName", header: ["Name",{content:"textFilter"}]},
                { id:"price", header:"Price"},
                { id:"rating", name: 'rating', header:"Rating"},
                { header:"Amount",width: 210, template: "<div>{common.counterButton()}</div>"},
                { header: "Buy",template: '<span class="mdi mdi-cart basket"></span>'}
            ],
            onClick: {
                'mdi-cart': (e, id) => {
                    let addToBasketProduct = Products.getItem(id.row);
                    this.saveProductInBasket(addToBasketProduct);
                },   
            },
            on: {
                onItemDblClick: (selectedItem) => {
                    const item = this._$getProductsDatatable().getItem(selectedItem.row);
                    this.informationPopup.show({
                        getDatatable: this._$getProductsDatatable(),
                        row: item
                    }) 
                }
            },
            activeContent: {
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
        console.log(productsBasket);
        this.on(this.app,'datatableUpdate', () => this._$getProductsDatatable().refresh());
    }

    _$getProductsDatatable() {
        return this.getRoot();
    }

    saveProductInBasket(addedProduct) {
        let checkExistsProductInBag = productsBasket.find((data) => data.productId === addedProduct.id);
        if(checkExistsProductInBag.length > 0) {
           let productInBagId = checkExistsProductInBag[0].id; 
           let updatedProduct = productsBasket.getItem(productInBagId);
           updatedProduct.amount++;
           updatedProduct.totalPrice += updatedProduct.price;
           productsBasket.updateItem(productInBagId,updatedProduct);
        } else {
            addedProduct.productId = addedProduct.id;
            addedProduct.amount = 1;
            addedProduct.totalPrice = addedProduct.price;
            productsBasket.add(addedProduct);
        }
    }

    urlChange() {
        let selectedId = this.getParam('id', true);
        if(!selectedId) return;
        Products.waitData.then(() => {
            this._$getProductsDatatable().clearAll();
            this._$getProductsDatatable().parse(Products.getItem(selectedId));
        });
    }
}