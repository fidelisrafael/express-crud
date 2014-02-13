(function() {
	"use strict"

	var express = require('express')
	,		app 		= express()
	,		routes 	= require('./routes')

	app.crud = require('./crud')
	
	app.crud('users', routes.users)

	var port = process.env.PORT || 3000;

	app.listen(port);

	console.log('Express server listening on port =' + port);

	module.exports = exports = app;

})()

/* 

POST 
curl -d "" http://localhost:3000/users 
{
  "code": 201,
  "status": "created",
  "user": {
    "name": "Rafael Fidelis",
    "auth_token": "\"7-6nyGfedzNTvwatEiXB"
  }
}

DELETE
curl -X DELETE http://localhost:3000/users/1
{
  "code": 200,
  "status": "ok",
  "message": "user deleted"
}

curl -X PUT http://localhost:3000/users/1
{
  "code": 2001,
  "status": "ok",
  "message": "user updated"
}
*/
