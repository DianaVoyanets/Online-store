const Sequelize = require("sequelize");

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

const User = sequelize.define("user",{
    login: Sequelize.STRING,
    password: Sequelize.STRING,
    email: Sequelize.STRING
});

const Role = sequelize.define("role",{
    roleName: Sequelize.STRING
});

const Products = sequelize.define('products',{
    image: Sequelize.STRING,
    productName: Sequelize.STRING,
    price: Sequelize.DOUBLE,
    rating: Sequelize.INTEGER
});

const categoryOfProducts = sequelize.define('categoryOfProduct',{
    categoryName: Sequelize.STRING
});

const phoneBrand = sequelize.define('phoneBrand',{
    phone_brand: Sequelize.STRING
});

// phoneBrand.sync({force: true}).then(() => 
    phoneBrand.create({ phone_brand: 'Xiaomi'}),
// );

// categoryOfProducts.sync({force: true}).then(() => {
categoryOfProducts.create({ categoryName: 'Phones'});
// });

Role.sync({force: true}).then(() => 
   Role.create({ roleName: 'admin'}),
   Role.create({ roleName: 'user'})
);

Products.sync({force: true}).then(() => {
    return  Products.create({ 
            image: 'Very beatiful picture',
            productName: 'Samsung galaxy S6 Edge+12',
            price: 400,
            rating: 0
        });
});

User.belongsTo(Role, {as: 'role'});
phoneBrand.belongsTo(categoryOfProducts,{as: 'category'});

module.exports = {
    sequelize,User, Role, Products, phoneBrand,categoryOfProducts
}