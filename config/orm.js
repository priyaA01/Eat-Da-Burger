//Import (require) connection.js
var connection = require("./connection.js");

function printQuestionMarks (num) {
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
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')printQuestionMarks
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + value);
    }
  }
}

//object methods that will execute the necessary MySQL commands in the controllers
var orm={
	selectAll : function (all,tableName,cb){
		var queryStr="SELECT ?? FROM ??";
		console.log(queryStr);
		
		connection.query(queryStr,[all,tableName],function(err,result)
		{
			if(err)
				console.log(err);
			console.log(result);
			cb(result); 
		});
	},

	insertOne : function (tableName,cols,vals,cb){
		var queryString = "INSERT INTO " + tableName;
		queryString += " (";
	    queryString += cols.toString();
	    queryString += ") ";
	    queryString += "VALUES (";
	    queryString += printQuestionMarks(vals.length);
	    queryString += ") ";

	    console.log(queryStr);
	
		connection.query(queryString,vals,function(err,result)
		{
			if(err)
				console.log(err);
			console.log(result);
			cb(result.id); 
		});
	},

	updateOne : function (tableName,objColVals, condition,cb){
		var queryString = "UPDATE " + tableName;
		queryString += " SET burger_name=";
	    queryString += objToSql(objColVals);
	    queryString += " WHERE id=";
	    queryString += condition;

	    console.log(queryStr);
		
		connection.query(queryString,function(err,result)
		{
			if(err)
				console.log(err);
			console.log(result);
			cb(result); 
		});
	}
};

//Export the ORM object
module.exports = orm;