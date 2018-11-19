const db = require("../db");

module.exports = {
	
	getData : (req, res) => {
		db.Products.findAll()
			.then(product => res.json(product));
	},

	removeData: (req, res) => {
		db.Products.findById(req.params.productId)
			.then((product) => 
                product.destroy()
					.then(()=>
						res.json({})));
	},
    
	addData: (req, res) => {
		db.Products.create(req.body).then((product) => 
			res.json({ id: product.id }));
	},
    
	updateData: (req, res) => {
		db.Products.findById(req.params.productId)
			.then((company) => 
				company.update(req.body))
			.then(() => 
				res.json({}));
	}
    
};