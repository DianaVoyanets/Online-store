const models = require('../db/models');

module.exports = {
	getData : (req, res) => {
		models.productsCategories.findAll()
			.then(cat => {
				res.json(cat);
		});
    },   
}