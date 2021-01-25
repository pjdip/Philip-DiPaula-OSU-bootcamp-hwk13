/* const { query } = require("./connection"); */
const connection = require("./connection");

const qMarkString = num => {
    let marks = "";
    for (let i = 0; i < num; i++) {
        marks += "? ";
    }
    return marks.slice(0, -1);
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

/*     updateOne: (table) */
};

// Export the orm object for the model
module.exports = orm;