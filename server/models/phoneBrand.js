module.exports = (sequelize, type) => {
    return sequelize.define('phoneBrand',{
        phone_brand: type.STRING,
    });
}
    