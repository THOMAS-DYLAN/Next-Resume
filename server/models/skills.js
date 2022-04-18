const mongoose = require("mongoose");
const Schema = mongoose.Schema

const skillsSchema = new Schema({
  skill: {
    type: String,
    required: true,
  },
  proficiency: {
    type: Number,
    required: true,
  }
})

module.exports = mongoose.model("skills", skillsSchema);