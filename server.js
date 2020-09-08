//dependencies required
const fs = require("fs");
const express = require("express");
const app = express();

//set port needed to run on server
var PORT = process.env.PORT || 8080;

//set up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes to api.js and html.js files
require("./routes/apiRoute")(app);
require("./routes/htmlRoute")(app);

//port listener
app.listen(PORT, function() {
    console.log("App listening on: http://localhost:" + PORT);
  });