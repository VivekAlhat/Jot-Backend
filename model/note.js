const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  noteTitle: String,
  noteContent: String,
  uid: String,
});

module.exports = mongoose.model("Note", noteSchema);
