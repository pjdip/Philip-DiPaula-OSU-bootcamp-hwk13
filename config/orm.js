/* const { query } = require("./connection"); */
const connection = require("./connection");

// Helper Functions

// Creates a string of num ?'s to be inserted in mysql queries
const qMarkString = num => {
    let marks = "";
    for (let i = 0; i < num; i++) {
        marks += "? ";
    }
    return marks.slice(0, -1);
};

// Takes an object of key/value pairs and converts to a string for mysql queries
const objToString = object => {
    let str = "";
    for (let key in object) {
        let value = object[key];

        // In case there are spaces in the the string, wrap in ''
        if (typeof value === "string" && value.indexOf(" ") != -1) {
        value = "'" + value + "'";
        }
        str += key + "=" + value + ",";
    }
    return str.slice(0, -1);
};

const orm = {
    selectAll: (table, callback) => {
        let queryString = "SELECT * FROM " + table;
        connection.query(queryString, (err, result) => {
            if (err) {
                console.error(err);
            }
            callback(result);
        });
    },

    insertOne: (table, cols, vals, callback) => {
        let queryString = "INSERT INTO " + table;
        queryString += " (";
        queryString += cols.toString();
        queryString += ") VALUES (";
        queryString += qMarkString(vals.length);
        queryString += ")";

        console.log(queryString);
        console.log(vals);

        connection.query(queryString, vals, (err, result) => {
            if (err) {
                console.error(err);
            }
            callback(result);
        });
    },

    updateOne: (table)
};

// Export the orm object for the model
module.exports = orm;