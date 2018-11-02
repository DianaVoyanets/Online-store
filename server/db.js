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
})

module.exports = {
    sequelize,User
}