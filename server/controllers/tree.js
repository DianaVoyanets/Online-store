const models = require('../db/models');

module.exports = {
	getTree: async (req, res) => {
		let productCategories = await models.productsCategories.findAll({ 
            include: [{ 
                as: 'data',
                all: true, 
                nested: true 
            }]
        });

        res.json(productCategories);
    },   
}