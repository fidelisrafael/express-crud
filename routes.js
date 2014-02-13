module.exports = {
	users: {
  	new: function(req, res, next) {
			res.send(200, 'new user');
		},
		create: function(req,res,next) {
			res.send({code: 201,  status: 'created', user: {name:'Rafael Fidelis', auth_token: '"7-6nyGfedzNTvwatEiXB'}})
		},
		destroy: function(req,res,next) {
			res.send({code: 200, status: 'ok', message: 'user deleted'})
		},
		update: function(req,res,next) {
			res.send({code: 2001 , status: 'ok', message: 'user updated'})
		}
  }
}