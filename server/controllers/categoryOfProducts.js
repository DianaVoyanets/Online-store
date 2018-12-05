const models = require('../../server/db/models');

module.exports = {
	getData : (req, res) => {
		models.categoryOfProducts.findAll({include: [{model: models.PhoneBrands}]})
			.then(cat => {
				res.json(cat);
			});
    },   
}