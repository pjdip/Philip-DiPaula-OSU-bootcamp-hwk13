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
}

// Export database functions for use in the controller
module.exports = burger;