module.exports = (sequelize, type) => {
    return sequelize.define("user", {
        login:  type.STRING,
        password: type.STRING,
        email: type.STRING
    });
}
    