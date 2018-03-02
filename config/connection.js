//npm package for mysql
var mysql = require("mysql");

//code to connect Node to MySQL
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "welcome1",
  database: "burgers_db"
});

if(process.env.JAWSDB_URL)
{
	connection = mysql.createConnection(process)

}

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("database connected as id " + connection.threadId);
});

//Export the connection
module.exports = connection;
