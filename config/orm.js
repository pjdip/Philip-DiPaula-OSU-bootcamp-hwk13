/* const { query } = require("./connection"); */
const connection = require("./connection");

const qMarkString = num => {
    let marks = "";
    for (let i = 0; i < num; i++) {
        marks += "? ";
    }
    marks.slice(0, -1);
    return marks;
};

console.log(qMarkString(5));

const orm = {
    selectAll: (table, callback) => {
        let queryString = "SELECT * FROM " + table;
        connection.query(queryString, (err, result) => {
            if (err) { throw err }
            callback(result);
        });
    },

    insertOne: (table, cols, vals, callback) => {
        let queryString = "INSERT INTO " + table;
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += qMarkString(vals.length);
        queryString += ")";

        connection.query(queryString, vals, (err, result) => {
            if (err) { throw err }
            callback(result);
        });
    },

/*     updateOne: (table) */
};

// Export the orm object for the model
module.exports = orm;