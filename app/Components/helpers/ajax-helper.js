var axx = require("axios");
var key = require("./apiKeys.js");

var helper = {
  getStories: function(topic, startYear, endYear) {
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    queryURL += "?" + $.param({
    "api-key": key,
    "q": topic,
    "begin_date": startYear,
    "end_date": endYear
  });
  }
}
