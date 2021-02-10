const express = require("express");
const { Mongoose } = require("mongoose");
const dashboardRouter = express.Router();

const Note = require("../model/note");

dashboardRouter.route("/").post((req, res) => {
  const uid = req.body.uid;

  Note.find({ uid: uid }, (err, data) => {
    if (err) {
      res.json(err);
    } else {
      res.json(data.reverse());
    }
  });
});

dashboardRouter
  .route("/:id")
  .get((req, res) => {
    const id = req.params.id;

    Note.findOne({ _id: id }, (err, data) => {
      if (err) {
        res.json(err);
      } else {
        res.json(data);
      }
    });
  })
  .delete((req, res) => {
    const id = req.params.id;

    Note.findOneAndDelete({ _id: id }, (err, data) => {
      if (err) {
        res.json(err);
      } else {
        res.json(data);
      }
    });
  });

module.exports = dashboardRouter;
