// Here we are linking the routes to a "data" source
var friendData = require("../data/friends");
var newResponse = [];
var hold = [];
var compare = [];
var userScoreSum = [];
var results = [];
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
        newResponse.push(req.body);

        for (let i = 0; i < friendData.length; i++) {

            // keep track of the first indexed item and its successor and turn the number strings into int arrays
            let firstItem = friendData[i].scores;
            firstItem = firstItem.map(Number);

            let secondItem = friendData[i + 1].scores;
            secondItem = secondItem.map(Number);

            // create a variable that tracks only the score of the user response
            let userScore = newResponse.scores;
            userScore = userScore.map(Number);

            // function that adds up the values in an array
            arrSum = function(arr){
                return arr.reduce(function(a,b){
                    return a + b
                }, 0);
            };
            // push the user sum into an array
            userScoreSum.push(arrSum(userScore));

            hold.push(Math.abs(userScoreSum - arrSum(firstItem)));

            compare.push(Math.abs(userScoreSum - arrSum(secondItem)));

            // push into the results the comparison with the smallest difference
            if (hold > compare) {
                results.length = 0;
                results.push(compare)
                hold.length = 0;
                compare.length = 0;

            }

            else if (hold < compare) {
                results.length = 0;
                results.push(hold)
                hold.length = 0;
                compare.length = 0;

            }

            if (hold < results) {
                results.length = 0;
                results.push(friendData[i])
                hold.length = 0;

            }

            else if (hold > results) {
                hold.length = 0
            }

            if (compare < results) {
                results.length = 0;
                results.push(friendData[i + 1])
                compare.length = 0
            }

            else if (compare > results){
                compare.length = 0;
            }

        };
        
        friendData.push(req.body)

        return results;

       
    })


}