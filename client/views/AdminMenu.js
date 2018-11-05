import {JetView, plugins} from "webix-jet";

export default class MenuView extends JetView {
	config() {
		return {
				view:"sidebar",
				width: 300,
				data:[
					{ id:"ClientsInfo",value: "Clients Info"},
					{ id:"Orders", value:"Orders"},
					{ id:"AddNewProduct", value:"Add new product"},
				]
			};
		}

	init(sidebar) {
		this.use(plugins.Menu,{
			id: sidebar
		});
	}
}