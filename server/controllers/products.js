const models = require('../../server/db/models');

module.exports = {
	
	getData : (req, res) => {
		models.Products.findAll()
			.then(product => res.json(product));
	},

	removeData: (req, res) => {
		models.Products.findById(req.params.productId)
			.then((product) => 
                product.destroy()
					.then(()=>
						res.json({})));
	},
    
	addData: (req, res) => {
		models.Products.create(req.body).then((product) => 
			res.json({ id: product.id }));
	},
    
	updateData: (req, res) => {
		models.Products.findById(req.params.productId)
			.then((product) => 
                product.update(req.body))
			.then(() => 
				res.json({}));
	}
    
};