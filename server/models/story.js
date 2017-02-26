var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var StorySchema = new Schema({
  title: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  url: {
    type: String,
    required: true
  }
});

var Story = mongoose.model("story", StorySchema);

module.exports = Story;
