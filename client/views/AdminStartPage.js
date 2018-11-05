import {JetView} from "webix-jet";
import Header from "views/header";
import AdminMenu from "views/AdminMenu";

export default class AdminStartPage extends JetView {
	config() {
		return {
			rows:[
				Header,
				{ cols: [
					AdminMenu,
					{
						type:"space",
						cols:[
							{ $subview:true }
						]
					}
				],
            },
		  ]
		};
	}
}