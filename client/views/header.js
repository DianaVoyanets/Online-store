import {JetView} from "webix-jet";
import {productsBasket} from "../models/productsBasket";

export default  class Header extends JetView {
    config() {
        return {
            view: "toolbar",
            elements: [
                {view: "label",label: "Varin shop"},
                {view: "label", template: `<b>${this.app.getService('user').getUser().login} shop</b>`},
                {view: "button",localId: 'history:button',value: "History",width: 200,click: () => this.show('historyOrdersDatatable')},
                {view: "button",localId: "bag:button",value: "#value#",width: 200,click: () => this.show('productsInBag')},
                {view: "button",value: "Logout",width: 200,
                    click: () => this.show('/logout')
                },
            ]
        }
    }

    init() {
        this.usersButtonShow();
        this.refreshCountProductsInBag();
        productsBasket.attachEvent('onAfterDelete',() => this.refreshCountProductsInBag());
        productsBasket.attachEvent('onAfterAdd',() => this.refreshCountProductsInBag());

        //TODO
        if(this.app.getService('user').getUser().login === 'admin') {
           this.usersButtonHide();
        }
    }

    refreshCountProductsInBag() {
        productsBasket.waitData.then(() => {
            if(productsBasket.count() > 0) {
                this.$$("bag:button").setValue(`Bag(${productsBasket.count()})`)
            } else {
                this.$$("bag:button").setValue('Bag');
            }
        });
    }

    usersButtonShow() {
        this.$$("history:button").show();
        this.$$("bag:button").show();
    }

    usersButtonHide() {
        this.$$("history:button").hide();
        this.$$("bag:button").hide();
    }
}