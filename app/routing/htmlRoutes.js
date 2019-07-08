// Dependencies

// include path package to get correct file path for our HTML
var path = require('path');

// ------------------------ROUTING-------------------------------
module.exports = function(app){
    // HTML GET requests
    // this code handles when a user visits a page

    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirnma, "../public/survey.html"))
    });

    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"))
    });
}