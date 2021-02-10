const express = require("express");
const composeRouter = express.Router();

const Note = require("../model/note");

composeRouter.route("/").post((req, res) => {
  const noteData = new Note({
    noteTitle: req.body.noteTitle,
    noteContent: req.body.noteContent,
    uid: req.body.uid,
  });

  noteData
    .save()
    .then(() => {
      res.json(`Added new note to collection`);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = composeRouter;
