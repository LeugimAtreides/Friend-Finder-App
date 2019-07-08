// ----------------------Dependencies----------------

const express = require('express');

const path = require('path');

// Set PORT instance and create express app instance

const PORT = process.env.PORT || 8080

const app = express();

// start server and begin listening

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
})
