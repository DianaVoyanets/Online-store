const db = require("../db");

module.exports = {
	getData : (req, res) => {
		db.categoryOfProducts.findAll()
			.then(category => res.json(category));
	},  
};