const Sequelize = require('sequelize');
const UserModel = require("./models/user");
const RoleModel = require('./models/role');
const ProductsModel = require("./models/products");
const phoneBrandModel = require("./models/phoneBrand");
const categoryOfProductsModel = require("./models/categoryOfProducts");

const sequelize = new Sequelize(
    "sampledb",
    "root",
    "1",
    {
        host: "localhost",
        dialect: "sqlite",
        storage: "database.sqlite"
    }
);

const User = UserModel(sequelize, Sequelize);
const Role = RoleModel(sequelize,Sequelize);
const Products = ProductsModel(sequelize,Sequelize);
const phoneBrand = phoneBrandModel(sequelize,Sequelize);
const categoryOfProducts = categoryOfProductsModel(sequelize,Sequelize);

// categoryOfProducts.create({ categoryName: 'Phones'});

// Role.create({ roleName: 'admin'});
// Role.create({ roleName: 'user'});

// Products.create({ 
//     image: 'Very beatiful picture',
//     productName: 'Samsung galaxy S6 Edge+12',
//     price: 400,
//     rating: 0
// });

// phoneBrand.create({ phone_brand: 'Xiaomi',categoryId: 0});

User.belongsTo(Role, {as: 'role'});
phoneBrand.belongsTo(categoryOfProducts,{as: 'category'});

sequelize.sync({ force: true})
    .then(() => {
        console.log(`Database & tables created!`);
});


module.exports = {
    sequelize,User, Role, Products, phoneBrand,categoryOfProducts
}