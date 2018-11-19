const db = require("../db");

module.exports = {
    login: (req,res) => {
        const user = {login: req.body.login, password: req.body.password}
        db.User.findOne({where: user})
        .then( (user) => {
            if(user) {
                req.session.user = user;
                res.send(user);
            } else {
                res.send(null)
            }
        })
    },

    getUser: (req,res) => {
        db.User
            .findAll()
            .then((user) => res.json(user));
    },
    
    loginStatus: (req,res) => {
        res.send(req.session.user || null)
    },

    logout: (req,res) => {
        delete req.session.user;
        res.send({});
    },
    
    registration: (req,res) => {
        const user = { login: req.body.user, password: req.body.password, email: req.body.email};
        if (user.login === 'admin') {
            db.Role.findOne({where: {roleName: 'admin'}}).then((role) => user.roleId = role.id);
        } else {
            db.Role.findOne({where: {roleName: 'user'}}).then((role) => user.roleId = role.id);
        }
		db.User
			.findAll({ where: user })
			.then((u) => {
				if (u.length !== 0) {
					res.json({ message: "The user with this login is already registered" });
				} else {
					db.User
						.create(user)
						.then(() => res.json({ message: "You are successfully registered!"}));
				    }
			    });
	},

    updateUser: (req,res) => {
        db.User.findById(req.params.userId)
            .then((user) => 
                user.update(req.body))
            .then(() => 
                res.json({}));
    }
};