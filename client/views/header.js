import {JetView} from "webix-jet";

export default  class Header extends JetView {
    config() {
        return {
            view: "toolbar",
            elements: [
                {view: "label",label: "Varin shop"},
                {view: "label", template: `<b>${this.app.getService('user').getUser().login} shop</b>`},
                {view: "button",localId: 'history:button',value: "History",width: 200,click: () => this.show('historyDatatable')},
                {view: "button",localId: "bag:button",value: "Bag",width: 200,click: () => this.show('productsInBag')},
                {view: "button",value: "Logout",width: 200,
                    click: () => this.show('/logout')
                },
            ]
        }
    }

    init() {
        this.usersButtonShow();
        if(this.app.getService('user').getUser().login === 'admin') {
           this.usersButtonHide();
        }
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