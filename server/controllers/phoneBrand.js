const models = require('../../server/db/models');

module.exports = {
	getData : (req, res) => {
		models.PhoneBrand.findAll()
			.then(phoneBrand => res.json(phoneBrand));
    },   
}