// ----------------------Dependencies----------------

const express = require('express');

const path = require('path');

// Set PORT instance and create express app instance

const PORT = process.env.PORT || 8080

const app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// ROUTER
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// start server and begin listening

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
})
