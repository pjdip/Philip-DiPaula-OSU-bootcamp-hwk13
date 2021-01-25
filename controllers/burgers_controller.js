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

// Adds burgers to the database
router.post("/api/burgers", (req, res) => {
    burger.insertOne(["burger_name"],
        [req.body.burger_name],
        result => {
            res.json({ id: result.insertId });
        }
    );
});

// Export the router
module.exports = router;