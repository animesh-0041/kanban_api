const express = require("express");
const { BoardModel } = require("../model/board.model");
const boardRoute = express.Router();

//craete board
boardRoute.post("/", async (req, res) => {
  try {
    const boards = new BoardModel(req.body);
    await boards.save();
    res.send("Board create successful");
  } catch (error) {
    res.send(error);
  }
});

//get all boards

boardRoute.get("/", async (req, res) => {
    try {
      const boards = await BoardModel.find();
      res.send(boards);
    } catch (error) {
      res.send(error);
    }
  });


// craete new task particular board

boardRoute.patch("/add-task/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await BoardModel.updateMany({ _id: id },{ $push: { task: { ...req.body } } });
    res.send("your task is added")
  } catch (error) {
    res.send(error)
  }
});

module.exports = {
  boardRoute,
};
