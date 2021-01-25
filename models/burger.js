// Import ORM for database interaction functionality
let orm = require("../config/orm");

let burger = {

    // Retrieving all burgers from the database
    selectAll: callback => {
        orm.selectAll("burgers", result => {
            callback(result);
        });
    },

    // cols is an array of column names from the burgers table
    // vals is an array of the values associated with those columns
    insertOne: (cols, vals, callback) => {
        orm.insertOne("burgers", cols, vals, result => {
            callback(result);
        });
    },

    // objColVals is an object whos keys represent columns in the mysql table
    // and who's values are what are to be updated to those columns in the table
    // condition is SQL text to go with a "WHERE" statement
    updateOne: (objColVals, condition, callback) => {
        orm.updateOne("burgers", objColVals, condition, result => {
            callback(result);
        });
    }
}

// Export database functions for use in the controller
module.exports = burger;