import {JetView} from "webix-jet";

export default class loginPage extends JetView {
    config() {
        const loginRegisteForm =  {
            view: "tabview",
            cells: [
                {
                    header: "Login",
                    body: {
                        view: "form",
                        localId: "login:form",
                        elements: [
                            {
                                view: "text",
                                name: "login",
                                label: "Login:",
                                labelWidth: 110,
                                width: 350,
                                invalidMessage: "login can not be empty"
                            },
                            {
                                view: "text",
                                name: "password",
                                type:"password",
                                label: "Password:",
                                labelWidth: 110,
                                width: 350,
                                invalidMessage: "password can not be empty"
                            },
                            {
                                rows: [
                                    {
                                        view: "button",
                                        value: "Login",
                                        hotkey: "enter",
                                        width: 100,
                                        align: "right",
                                        click: () => this.doLogin()
                                    }
                                ],
                                rules: {
                                    login: webix.rules.isNotEmpty,
                                    password: webix.rules.isNotEmpty,
                                }
                            },
                        ]
                    },
                },
                {
                    header: "Register",
                    body: {
                        view: "form",
                        localId: "register:form",
                        elements: [
                            { 
								view:"text", 
								name:"login", 
								label: "User Name:",
								labelWidth:100,
								width: 350,
								invalidMessage: "Login can not be empty"
							},
							{ 
								view:"text",
								name:"password", 
								label: "Password:", 
								type:"password",
								labelWidth:100,
								width: 350,
								invalidMessage: "Password can not be empty"
                            },
                            { 
								view:"text",
								name:"email", 
								label: "Email:", 
								labelWidth:100,
								width: 350,
								invalidMessage: "Incorrect email"
							},
							{rows:[
								{ 
									view:"button",
									value: "Register", 
									click:() => this.doRegister(),
									hotkey:"enter",
									width:100,
									align:"right"
								}
							]},
						],
                            rules:{
                                login:webix.rules.isNotEmpty,
                                password:webix.rules.isNotEmpty,
                                email: webix.rules.isEmail
                            }
                        }
                    }
                ]
            };
            return {
                rows: [
                    {view: "spacer"},
                    {
                        cols: [
                            {view: "spacer"},
                            loginRegisteForm,
                            {view: "spacer"}
                        ]
                    },
                    {view: "spacer"}
                ]
            }
        }

    doLogin() {
        const user = this.app.getService("user");
        const form = this.$$("login:form");

        if(form.validate()) {
            const dataFromInputs = form.getValues();
            user.login(dataFromInputs.login,dataFromInputs.password,dataFromInputs.email)
            .catch(() => {
                form.elements.password.focus();
                webix.delay( () => {
                    webix.alert({
                        text: "Incorrect login or password"
                    })
                })
            })
        }
    }

    doRegister() {
        const form = this.$$("register:form");

		if (form.validate()) {
			const dataFromInput = form.getValues();
            
			webix
				.ajax()
				.post("/server/user/register", { 
					user: dataFromInput.login, 
                    password: dataFromInput.password,
                    email: dataFromInput.email
				})
				.then( response => {
					webix.message(response.json().message);
				}).
				fail((err) => {
					this.app.showError({message: JSON.parse(err.response).message});
				});
		}
    }
}