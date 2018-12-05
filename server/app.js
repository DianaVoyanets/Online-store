const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const users = require('../server/controllers/user');
const products = require('../server/controllers/products');
const phoneBrand = require('../server/controllers/phoneBrand');
const categoryOfProducts = require('../server/controllers/categoryOfProducts');

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
app.put("/server/wordsGroup/:productId",products.updateData);
app.delete("/server/wordsGroup/:productId",products.removeData);
app.post("/server/product",products.addData);
app.get("/server/product",products.getData);

//PhoneBrandss
app.get("/server/PhoneBrands",phoneBrand.getData)

//categoryOfProducts
app.get("/server/category",categoryOfProducts.getData);

// app.put("/server/product/:productId",products.updateData);
// app.delete("/server/product/:productId",products.removeData);
// app.post("/server/product",products.addData);
// app.get("/server/product",products.getData);


// app.get("/server/PhoneBrands",PhoneBrands.getData);


// app.get("/server/category",categoryProducts.getData);

app.listen(port, () => console.log(`Example app listening on port ${port}`));