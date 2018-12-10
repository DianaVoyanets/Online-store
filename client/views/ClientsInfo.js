import {JetView} from "webix-jet";
import {UsersInformation} from "models/UsersInformation";

export default class ClientsInfo extends JetView {
    config() {
        return {
            view: "datatable",
            editable:true,
            // TODO editor validation
            columns: [
                {id: "id", header: "#"},
                {id: "login",header: ["Name",{content: "textFilter"}],editor:"text"},
                {id: "email", header: ["Email",{content: "textFilter"}],editor:"text",fillspace: true},
                {id: "createdAt", header: "Created at",fillspace: true}
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