// ----------------------Dependencies----------------

const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');

// Set PORT instance and create express app instance

const PORT = process.env.PORT || 8080

const app = express();

// Sets up the Express app to handle data parsing
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}))

app.use(express.static(path.join(__dirname, "./app/public")))


// ROUTER
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// start server and begin listening

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
})
