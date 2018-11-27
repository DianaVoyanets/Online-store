const models = require('../../server/db/models');

module.exports = {
    login: (req,res) => {
        const user = {login: req.body.login,password: req.body.password};
        models.Users
            .findOne({where: user})
            .then(user => {
                if(user) {
                    req.session.user = user;
                    res.send(user);
                } else {
                    res.send(null);
                }
            })
    },

    getUser: (req,res) => {
        models.Users
            .findAll()
            .then((user) => res.json(user));
    },

    loginStatus: (req,res) => {
        res.send(req.session.user || null);
    },

    logout: (req, res) => {
		delete req.session.user;
		res.send({});
	},
    
	registration: (req,res) => {
        const user = { login: req.body.user, password: req.body.pass};
        if (user.login === 'admin') {
            user.RoleId = 2;
        } else {
            user.RoleId = 1;
        }
        models.Users
			.findAll({ where: user })
			.then((user) => {
				if (user.length !== 0) {
					res.json({ message: "The user with this login is already registered" });
				} else {
                    models.Users
						.create(user)
						.then(() => res.json({ message: "You are successfully registered!"}));
				}
			});
	}
}