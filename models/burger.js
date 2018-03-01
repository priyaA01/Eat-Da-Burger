/*Inside burger.js, import orm.js into burger.js

Also inside burger.js, create the code that will call the ORM functions using burger specific input 
for the ORM.

Export at the end of the burger.js file.*/

var orm = require("../config/orm.js");

var burger={
	all: function(cb)
	{
		orm.selectAll("*","burgers",function(result){
			cb(result);
		});
	},
	insert: function(vals,cb)
	{
		orm.selectAll("burgers","burger_name",vals,function(result){
			cb(resultid);
		});
	},
	update: function(condition,cb)
	{
		orm.selectAll("burgers","true", condition,function(result){
			cb(result);
		});
	}

};

//Export the ORM object
module.exports = burger;



