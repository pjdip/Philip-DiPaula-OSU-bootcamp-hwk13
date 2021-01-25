// Import ORM for database interaction functionality
let orm = require("../config/orm");

let burger = {
    selectAll: callback => {
        orm.selectAll("burgers", result => {
            callback(result);
        });
    },

    insertOne: (cols, vals, callback) => {
        orm.insertOne("burgers", cols, vals, result => {
            callback(result);
        });
    },
}

// Export database functions for use in the controller
module.exports = burger;