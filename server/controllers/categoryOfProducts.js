const models = require('../../server/db/models');

module.exports = {
	getData : (req, res) => {
		models.categoryOfProducts.findAll({include: [{model: models.Products}]})
			.then(cat => {
				console.log(res.json(cat));
				res.json(cat);
			});
    },   
}