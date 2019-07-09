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

       
        

        var bestMatch = {
            name: "",
            photo: "",
            difference: 100
        }

        // this will handle when a user submits a form
        var userData = req.body
        var userScores = userData.scores;
        console.log(userScores);
        for (var i = 0; i < friendData.length; i++){
            // console.log(friendData[i].name);
            var totalDiff = 0;
            var totalArray = [];

            for (let j = 0; j < friendData[i].scores.length; j++) {
                totalDiff += Math.abs(parseInt(userScores[j]) - parseInt(friendData[i].scores[j]));

                if (totalDiff <= bestMatch.difference) {
                    bestMatch.name = friendData[i].name;
                    bestMatch.photo = friendData[i].photo;
                    bestMatch.difference = totalDiff;
                }
                console.log(bestMatch)
            }
            // keep track of the first indexed item and its successor and turn the number strings into int arrays
            // totalArray.push(totalDiff)
        };

        friendData.push(userData)
        // console.log(results)
        res.json(bestMatch)
        

       
    })


}