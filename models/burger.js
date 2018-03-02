
var orm = require("../config/orm.js");

var burger={
	all: function(cb)
	{
		orm.selectAll("*","burgers",function(result){
			cb(result);
		});
	},
	insert: function(cols,vals,cb)
	{
		orm.insertOne("burgers",cols,vals,function(result){
			cb(result);
		});
	},
	update: function(condition,cb)
	{
		orm.updateOne("burgers", condition,function(result){
			cb(result);
		});
	},
	del: function(limit,cb)
	{
		orm.deleteAll("burgers",limit, function(result){
			cb(result);
		});
	},

	/*limit : function(cb)
	{
		orm.selectDevoured("burgers",function(result){
			cb(result);
		});
	}*/


};

//Export the ORM object
module.exports = burger;



