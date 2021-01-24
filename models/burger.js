let orm = require("../config/orm");

let burger = {
    selectAll: callback => {
        orm.selectAll("burgers", result => {
            callback(result);
        });
    },

/*     insertOne:  */
}