// initialize packages 
var express = require("express");
var path = require("path");

// initialize express
var app = express();

// setting port requirements
var PORT = process.env.PORT || 5000;

app.use(express.static(__dirname + '/public'));

require("./routes/index.js")(app)

app.listen(PORT, function () {
    console.log("Server is listening on " + PORT);
});