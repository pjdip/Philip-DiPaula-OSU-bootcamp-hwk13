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
    burger.insertOne(
        ["burger_name"],
        [req.body.burger_name],
        result => {
            res.json({ id: result.insertId });
        }
    );
});

// Updates burgers when they have been consumed
router.put("/api/burgers/:id", (req, res) => {
    let condition = "id = " + req.params.id;
    console.log(condition);

    burger.updateOne(
        { devoured: req.body.devoured },
        condition,
        result => {
            if (result.changedRows === 0) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        }
    );
});

router.delete("/api/burgers/:id", (req, res) => {
    let condition = "id = " + req.params.id;
    console.log(condition);

    burger.deleteOne(condition, result => {
        if (result.affectedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Export the router
module.exports = router;