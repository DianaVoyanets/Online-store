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

const phoneBrand = sequelize.define('phoneBrand',{
    phone_brand: Sequelize.STRING
});

const categoryOfProducts = sequelize.define('categoryOfProduct',{
    categoryName: Sequelize.STRING
});

    /*PHONE BRAND CREATE*/

    phoneBrand.findAll({ where: phoneBrand })
        .then((phoneBrands) => {
            if (phoneBrands.length > 0) {
                return;
            } else {
                phoneBrand.create({ phone_brand: 'Samsung'});
                phoneBrand.create({ phone_brand: 'Xiaomi'});
                phoneBrand.create({ phone_brand: 'Apple'});
                phoneBrand.create({ phone_brand: 'Huawei'});
                phoneBrand.create({ phone_brand: 'Honor'});
                phoneBrand.create({ phone_brand: 'Nokia'});
                phoneBrand.create({ phone_brand: 'MEIZU'});
                phoneBrand.create({ phone_brand: 'OnePlus'});
                phoneBrand.create({ phone_brand: 'ASUS'});
            }
    });

    /*CATEGORY CREATE*/

    categoryOfProducts
        .findAll({ where: categoryOfProducts })
        .then((category) => {
            if ( category.length > 0) {
                return;
            } else {
                categoryOfProducts.create({ categoryName: 'Phones'});
            }
    });

    Role
        .findAll({ where: Role })
        .then((roles) => {
            if (roles.length > 0) {
                return;
            } else {
                Role.create({ roleName: 'user'});
                Role.create({ roleName: 'admin'})
            }
    });

    /*Products CREATE*/

    Products.findAll({ where: Products })
        .then((product) => {
            if (product.length > 0) {
                return;
            } else {
                Products.create({ 
                    image: 'Very beatiful picture',
                    productName: 'Samsung galaxy S6 Edge+12',
                    price: 400,
                    rating: 0
                });
            }
    });


    User.belongsTo(Role, {as: 'role'});
    phoneBrand.belongsTo(categoryOfProducts,{as: 'category'});


module.exports = {
    sequelize,User, Role, Products, phoneBrand,categoryOfProducts
}