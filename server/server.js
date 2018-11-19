const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const cors = require("cors");

const { sequelize } = require("./db");
sequelize.sync({
	force: false
});

const app = express();

app.use(express.static("public"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
	secret: "k12jh40918e4019u3",
	resave: false,
	saveUninitialized: true,
	cookie: { 
		maxAge: 60*60*1000 
	}
}));

const users = require("../server/controllers/user"); 

app.get("/server/user",users.getUser);
app.post("/server/user/login",users.login);
app.post("/server/login/status",users.loginStatus);
app.get("/server/login/status",users.loginStatus);
app.post("/server/user/register",users.registration);
app.post("/server/user/logout",users.logout);
app.put("/server/user/:userId",users.updateUser)

const products = require("../server/controllers/products");

app.put("/server/product/:productId",products.updateData);
app.delete("/server/product/:productId",products.removeData);
app.post("/server/product",products.addData);
app.get("/server/product",products.getData);

const phoneBrand = require("../server/controllers/phoneBrand");
app.get("/server/phoneBrand",phoneBrand.getData);

app.listen(3000, () => console.log("Example app listening on port 3000"));