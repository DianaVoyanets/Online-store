import {JetView, plugins} from "webix-jet";

export default class MenuView extends JetView {
	config() {
		return {
				view:"sidebar",
				width: 350,
				data:[
					{ id:"ClientsInfo",value: "Clients Info"},
					{ id:"historyOrdersDatatable", value:"Orders"},
					{ id:"AddNewProduct", value:"Add new product"},
				],
				ready: function() {
					if(!this.getSelectedItem()) {
						this.select("ClientsInfo");
					}
				}
			};
		}

	init(sidebar) {
		this.use(plugins.Menu,{
			id: sidebar
		});
	}

}