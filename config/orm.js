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
      //f string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')printQuestionMarks

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
		//console.log(queryStr);
		
		connection.query(queryStr,[all,tableName],function(err,result)
		{
			if(err)
				console.log(err);
			//console.log(result);
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

	    console.log(queryString);
	    console.log(vals);
		if(vals != "")
		{
			connection.query(queryString,[vals,false],function(err,result)
		{
			if(err)
				console.log(err);
			//console.log(result);
			cb(result); 
		});
		}
		
	},

	updateOne : function (tableName, condition,cb){
		var queryString = "UPDATE " + tableName;
		queryString += " SET devoured = true WHERE ";
	    queryString += condition;

	    console.log(queryString);
		
		connection.query(queryString,function(err,result)
		{
			if(err)
				console.log(err);
			//console.log(result);
			cb(result); 
		});
	},
	/*selectDevoured : function (tableName,cb){
		var queryStr="SELECT count(*) FROM ?? ";
		//console.log(queryStr);
		
		connection.query(queryStr,[tableName],function(err,result)
		{
			if(err)
				console.log(err);
			//console.log(result);
			cb(result); 
		});
	},


	deleteAll : function(tableName,limit, cb){
		var queryString = "DELETE FROM " + tableName +" LIMIT " +  limit;
		connection.query(queryString, function(err,result)
		{
			if(err)
				console.log(err);
			//console.log(result);
			cb(result); 
		});

	}*/
};

//Export the ORM object
module.exports = orm;