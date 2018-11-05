import {JetView} from "webix-jet";

export default class AddNewProduct extends JetView {
    config() {
        return {
            view: "template",
            template: "Add new product"
        }
    }
}