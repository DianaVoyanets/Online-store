const models = require('../db/models');

module.exports = {
	
	getData : (req, res) => {
		models.productBasket.findAll()
			.then(product => res.json(product));
	},

	removeData: (req, res) => {
		models.productBasket.findById(req.params.productId)
			.then((product) => 
                product.destroy()
					.then(()=>
						res.json({})));
	},
    
	addData: (req, res) => {
		models.productBasket.create(req.body).then((product) => 
			res.json({ id: product.id }));
	},
    
	updateData: (req, res) => {
		models.productBasket.findById(req.params.productId)
			.then((product) => 
                product.update(req.body))
			.then(() => 
				res.json({}));
	}
    
};