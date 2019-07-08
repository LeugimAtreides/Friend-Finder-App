// Here we are linking the routes to a "data" source
var friendData = require("../data/friends");

// routing

module.exports = function(app) {
    // API GET requests
    // Below code handles when users "visits" a page
    // In each of the below cases when a user visits a link
    app.get("/api/friends", function(req, res) {
        res.json(friendData);
    });

    app.post("/api/friends", function(req, res) {
        // this will handle when a user submits a form
        friendData.push(req.body);
    })
}