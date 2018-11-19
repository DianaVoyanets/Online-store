const db = require("../db");

module.exports = {
	getData : (req, res) => {
		db.phoneBrand.findAll()
			.then(brand => res.json(brand));
	},  
};