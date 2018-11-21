import {JetView} from "webix-jet";
import {UsersInformation} from "models/UsersInformation";

export default class ClientsInfo extends JetView {
    config() {
        return {
            view: "datatable",
            editable:true,
            // TODO editor validation
            columns: [
                {id: "id", header: "#", width: 200},
                {id: "login",header: ["Name",{content: "textFilter"}],width: 300, editor:"text"},
                {id: "email", header: ["Email",{content: "textFilter"}],width: 300, editor:"text"},
                {id: "createdAt", header: "Created at",width: 300,fillspace: true}
            ],
        }
    }

    init() {
        const clientsInfoDatatable = this.getRoot();
        clientsInfoDatatable.sync(UsersInformation,() => {
            clientsInfoDatatable.filter((data) => {
                return data.login !== 'admin'
            });
        });
    }   
}