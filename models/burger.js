var orm = require("../config/orm.js");

var burger = {
	all: function (cb) {
		orm.selectAll("burgers", function (result) {
			cb(result);
		});
	},
	insert: function (cols, vals, cb) {
		orm.insertOne("burgers", cols, vals, function (result) {
			cb(result);
		});
	},
	update: function (condition, cb) {
		orm.updateOne("burgers", condition, function (result) {
			cb(result);
		});
	},
	del: function (cb) {
		orm.deleteAll("burgers", function (result) {
			cb(result);
		});
	}

};

//Export the ORM object
module.exports = burger;