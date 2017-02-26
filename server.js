var express = require("express");
var axios = require("axios");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var Promise = require("bluebird");
mongoose.Promise = Promise;

var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost/nyt_scraper_db");
var db = mongoose.connection;

db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

db.once("open", function() {
  console.log("Mongoose connection smooth sailing!");
});

var storyCntrlr = require("./server/controllers/story_controller.js");
app.use(storyCntrlr);

app.listen(3000, function() {
  console.log("Tune in to port 3000!")
});
