//Import (require) connection.js
var connection = require("./connection.js");

function printQuestionMarks(num) {
	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push("?");
	}

	return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
	var arr = [];

	// loop through the keys and push the key/value as a string int arr
	for (var key in ob) {
		var value = ob[key];
		// check to skip hidden properties
		if (Object.hasOwnProperty.call(ob, key)) {
			
			if (typeof value === "string" && value.indexOf(" ") >= 0) {
				value = "'" + value + "'";
			}
			arr.push(key + "=" + value);
		}
	}
}

//object methods that will execute the necessary MySQL commands in the controllers
var orm = {
	selectAll: function (tableName, cb) {
		var queryStr = "SELECT * FROM ??";
		
		connection.query(queryStr, [tableName], function (err, result) {
			if (err)
				console.log(err);
			cb(result);
		});
	},

	insertOne: function (tableName, cols, vals, cb) {
		var queryString = "INSERT INTO " + tableName;
		queryString += " (";
		queryString += cols.toString();
		queryString += ") ";
		queryString += "VALUES (";
		queryString += printQuestionMarks(vals.length);
		queryString += ") ";

		if (vals != "") {
			connection.query(queryString, [vals, false], function (err, result) {
				if (err)
					console.log(err);
				cb(result);
			});
		}

	},

	updateOne: function (tableName, condition, cb) {
		var queryString = "UPDATE " + tableName;
		queryString += " SET devoured = true WHERE ";
		queryString += condition;

		connection.query(queryString, function (err, result) {
			if (err)
				console.log(err);
			cb(result);
		});
	},

	deleteAll: function(tableName, cb) {
		var queryStr = "DELETE FROM ??";
		
		connection.query(queryStr, [tableName], function (err, result) {
			if (err)
				console.log(err);
			cb(result);
		});
	}
};

//Export the ORM object
module.exports = orm;