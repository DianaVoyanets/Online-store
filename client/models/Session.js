// import User from './User';

export default class Session {
    status() {
        return webix.ajax().post("/server/login/status")
            .then((res)=> res.json())
    }

    logout() {
        return webix.ajax().post("server/user/logout")
            .then((res) => res.json())
    }

    login(login,password,email) {
        return webix.ajax().post("server/user/login",{
            login,password,email
        }).then((res) => res.json())
    }
}