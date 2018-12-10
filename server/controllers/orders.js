const models = require('../db/models');

module.exports = {
	
	getData : (req, res) => {
		models.orders.findAll()
			.then(order => res.json(order));
	},

	removeData: (req, res) => {
		models.orders.findById(req.params.orderId)
			.then((order) => 
                order.destroy()
					.then(()=>
						res.json({})));
	},
    
	addData: (req, res) => {
		models.orders.create(req.body).then((order) => 
			res.json({ id: order.id }));
	},
    
	updateData: (req, res) => {
		models.orders.findById(req.params.orderId)
			.then((order) => 
               order.update(req.body))
			.then(() => 
				res.json({}));
	}
    
};