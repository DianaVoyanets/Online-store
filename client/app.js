import "./styles/myapp.css";
import Session  from "models/Session";
import { JetApp, plugins } from "webix-jet";

export default class MyApp extends JetApp {
	constructor(config) {
		const defaults = {
			id 		: APPNAME,
			version : VERSION,
			debug 	: !PRODUCTION,
			start 	: "/startPage"
		};

        super({ ...defaults, ...config });
		this.use(plugins.User, { model :  new Session() });
    }
}

if (!BUILD_AS_MODULE) {
	var app = new MyApp();
	webix.ready(() => {	
		app.render();
	});
}