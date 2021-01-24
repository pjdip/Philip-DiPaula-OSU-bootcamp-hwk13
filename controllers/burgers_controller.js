// Dependencies
const express = require("express");
const router = express.Router();

// Import Burger Model
const burger = require("../models/burger");

// Routes

// Uses the burger model to interact with the database through the orm
// Get's info about the burgers and sends it to the front-end
router.get("/", (req, res) => {
    burger.selectAll(data => {
        let handlebarsObj = {
            burgers: data
        };
        console.log(handlebarsObj);
        res.render("index", handlebarsObj);
    });
});

// Export the router
module.exports = router;