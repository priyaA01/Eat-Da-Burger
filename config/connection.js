//npm package for mysql
var mysql = require("mysql");

//code to connect Node to MySQL
var connection;

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
	connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'welcome1',
		database: 'burgers_db'
	});

}

connection.connect(function (err) {
	if (err) {
		console.error("error connecting: " + err.stack);
		return;
	}
	console.log("database connected as id " + connection.threadId);
});

//Export the connection
module.exports = connection;