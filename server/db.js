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
    price: Sequelize.INTEGER,
});

const phoneBrand = sequelize.define('phoneBrand',{
    phone_brand: Sequelize.STRING
});

/*Products CREATE*/

Products.create({
    image: 'Very beatiful picture',
    productName: 'Samsung galaxy S6 Edge+12',
    price: 400
});


/*PHONE BRAND CREATE*/

phoneBrand.findAll({ where: phoneBrand })
    .then((phoneBrands) => {
        if (phoneBrands.length > 1) {
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

/*ROLE CREATE*/

Role
    .findAll({ where: Role })
    .then((roles) => {
        if (roles.length > 1) {
            return;
        } else {
            Role.create({ roleName: 'user'});
            Role.create({ roleName: 'admin'})
        }
});

User.belongsTo(Role, {as: 'role'});


module.exports = {
    sequelize,User, Role, Products, phoneBrand
}