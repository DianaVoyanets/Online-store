import "./styles/myapp.css";
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
		// this.use(plugins.User, { model : session });
		// this.use(plugins.Locale, { lang: "en" });
    }
}

if (!BUILD_AS_MODULE) {
	var app = new MyApp();
	webix.ready(() => {	
		// app.use(plugins.Locale, { lang: "en" });
		app.render();
	});
}