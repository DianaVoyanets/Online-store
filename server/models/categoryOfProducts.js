module.exports = (sequelize, type) => {
    return sequelize.define('categoryOfProduct',{
        categoryName: type.STRING
    });
};


