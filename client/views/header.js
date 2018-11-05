import {JetView} from "webix-jet";

export default  class Header extends JetView {
    config() {
        return {
            view: "toolbar",
            elements: [
                {view: "label",label: "Shop"},
                {view: "label", label: "Hi,varyas!"},
                {view: "button",value: "History",width: 200},
                {view: "button",value: "Bag",width: 200},
                {view: "button",value: "Logout",width: 200,
                    click: () => this.show('/logout')
                },
            ]
        }
    }
}