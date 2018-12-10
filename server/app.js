const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const users = require('../server/controllers/user');
const products = require('../server/controllers/products');
const phoneBrand = require('../server/controllers/phoneBrand');
const productsCategories = require('../server/controllers/productsCategories');
const tree = require("./controllers/treeData");
const productsBasket = require("../server/controllers/productsBasket");
const orders = require("../server/controllers/orders");

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

//User
app.get("/server/user",users.getUser);
app.post("/server/user/login",users.login);
app.post("/server/login/status",users.loginStatus);
app.get("/server/login/status",users.loginStatus);
app.post("/server/user/register",users.registration);
app.post("/server/user/logout",users.logout);

//Products
app.put("/server/product/:productId",products.updateData);
app.delete("/server/product/:productId",products.removeData);
app.post("/server/product",products.addData);
app.get("/server/product",products.getData);

//PhoneBrandss
app.get("/server/PhoneBrands",phoneBrand.getData)

//productsCategories
app.get("/server/category",productsCategories.getData);

//getTree
app.get("/server/tree", tree.getTree);

//productsBasket
app.put("/server/productsBasket/:productId",productsBasket.updateData);
app.delete("/server/productsBasket/:productId",productsBasket.removeData);
app.post("/server/productsBasket",productsBasket.addData);
app.get("/server/productsBasket",productsBasket.getData);

//orders
app.put("/server/orders/:orderId",orders.updateData);
app.delete("/server/orders/:orderId",orders.removeData);
app.post("/server/orders",orders.addData);
app.get("/server/orders",orders.getData);

// app.put("/server/product/:productId",products.updateData);
// app.delete("/server/product/:productId",products.removeData);
// app.post("/server/product",products.addData);
// app.get("/server/product",products.getData);


// app.get("/server/PhoneBrands",PhoneBrands.getData);


// app.get("/server/category",categoryProducts.getData);

app.listen(3000, () => console.log(`Example app listening on port ${3000}`));