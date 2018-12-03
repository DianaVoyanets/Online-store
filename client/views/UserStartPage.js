import {JetView} from "webix-jet";
import Header from "views/header";
import Tree from "views/Tree";

export default class TopView extends JetView {
	config(){
		return {
			rows:[
				Header,
				{cols:[
					Tree,
					{$subview: true}
				],
			}
			]
		};
	}
}