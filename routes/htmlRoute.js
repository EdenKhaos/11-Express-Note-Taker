var path = require("path");

// routing
module.exports = function(app) {
  // GET Requests
  app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

  // link to css file
  app.get("/styles", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/css/styles.css"));
  });

  // if no matching route is found default to home page
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};