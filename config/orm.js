const { query } = require("./connection");
const connection = require("./connection");

const orm = {
    selectAll: (table, callback) => {
        let queryString = "SELECT * FROM " + table;
        connection.query(queryString, (err, result) => {
            if (err) { throw err }
            callback(result);
        });
    },

    insertOne: (table, cols, vals, callback) => {
        let queryString = "INSERT INTO ?? SET ?";
        let sqlData = {
            burger_name: vals
        };
        connection.query(queryString, [table, sqlData], (err, result) => {
            if (err) { throw err }
            callback(result);
        });
    },

/*     updateOne: (table) */
};

// Export the orm object for the model
module.exports = orm;