const models = require('../db/models');

module.exports = {
	getData : (req, res) => {
		models.PhoneBrands.findAll()
			.then(phoneBrand => res.json(phoneBrand));
    },   
}