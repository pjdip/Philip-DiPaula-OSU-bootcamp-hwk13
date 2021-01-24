// Dependencies
const mysql = require("mysql");

// Create Connection
let connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Z9PpV$u!Rc3G",
  database: "burgers_db"
});

connection.connect(err => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection
module.exports = connection;
