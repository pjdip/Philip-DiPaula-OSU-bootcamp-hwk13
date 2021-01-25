/* const { query } = require("./connection"); */
const { query, connect } = require("./connection");
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
            if (err) {console.error(err)}
            callback(result);
        });
    },

    insertOne: (table, cols, vals, callback) => {
        let queryString = "INSERT INTO " + table;
        queryString += " (" + cols.toString() + ") ";
        queryString += "VALUES (" + qMarkString(vals.length) + ")";

        console.log(queryString);
        console.log(vals);

        connection.query(queryString, vals, (err, result) => {
            if (err) {console.error(err)}
            callback(result);
        });
    },

    updateOne: (table, objColVals, condition, callback) => {
        let queryString = "UPDATE " + table;
        queryString += " SET " + objToString(objColVals);
        queryString += " WHERE " + condition;

        connection.query(queryString, (err, result) => {
            if (err) {console.error(err)}
            callback(result);
        });
    }
};

// Export the orm object for the model
module.exports = orm;