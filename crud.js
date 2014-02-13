var helpers = {
	HTTP_METHODS: { 
		get: 	{ actions: {"new": "/new" , "index": "/" , "edit": "/:id/edit" , "show": "/:id"} }, 
		put: 	{ actions: {"update": "/:id" } },
		post: { actions: {"create": "/" } }, 
		del: 	{	actions: {"destroy": "/:id" } }
	},

	defaultRoutes: {
		new: function(req,res,next){},
		create: function(req,res,next){},
		show: function(req,res,next){},
		index: function(req,res,next){},
		edit: function(req,res,next){},
		update: function(req,res,next){},
		destroy: function(req,res,next) {}
	},

	findMethod: function(action) {
		var method
		, 	httpMethodsKeys = Object.keys(this.HTTP_METHODS);

		httpMethodsKeys.forEach(function(_method) {
			var _routes = helpers.HTTP_METHODS[_method]['actions']
			,		actions = Object.keys(_routes);

			if(!method && actions.indexOf(action) != -1) {
					method = {path: _routes[action], method: _method }
				}
		});
		return method;
	}
}

var extend  = require('extend')

var crud = exports.crud = function(resource, routes) {

	var app = this

	var routes = extend(helpers.defaultRoutes, routes == undefined ? {} : routes)

	Object.keys(routes).forEach(function(action, index) {
		var data = helpers.findMethod(action)
		,	  path = data.path
		,	  method = data.method
		, 	callback = routes[action]; //|| function(req,res,next) {} ;

		if(method) {
			var root_path = path == '/' ? '?' : '/?'
			var route = ["/", resource, path , root_path].join("")
			//console.log("method=%s , path=%s , route=%s", method, path, route);
			app[method].call(app, route, callback)
		}
	})
}

/* 
(not working, see later)
var express = require('express') 
,		apps = express.application
    ? [express.application]
    : [express.HTTPServer.prototype, express.HTTPSServer.prototype];

apps.forEach(function(app){
	app.crud = crud
})
*/

module.exports = crud