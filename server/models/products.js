module.exports = (sequelize, type) => {
    return sequelize.define('products',{
        image: type.STRING,
        productName: type.STRING,
        price: type.DOUBLE,
        rating: type.INTEGER
    });
}
    