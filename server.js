// Dependencies

//Express Things
const express = require("express");
let PORT = process.env.PORT || 8081;
let app = express();

// Middleware
// Serve static content for the app from the "public" directory in the application directory
app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//HandleBars Things
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes to the server
let routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});