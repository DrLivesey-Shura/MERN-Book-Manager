import { Router } from "express";
import bookModel from "../models/bookModel.js";

const routes = new Router();

routes.post("/", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({ message: "send all reauired feilds" });
    }
    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };
    const book = await bookModel.create(newBook);
    return res.status(201).send(book);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

routes.get("/", async (req, res) => {
  try {
    const books = await bookModel.find({});
    return res.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

routes.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await bookModel.findById(id);
    return res.status(200).json(book);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

routes.put("/:id", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({ message: "send all reauired feilds" });
    }
    const { id } = req.params;
    const result = await bookModel.findByIdAndUpdate(id, req.body);
    if (!result) {
      return res.status(404).json({ message: "Book not found" });
    }
    return res.status(200).send({ message: "Book updated succesfully" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

routes.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await bookModel.findByIdAndDelete(id, req.body);
    if (!result) {
      return res.status(404).json({ message: "Book not found" });
    }
    return res.status(200).send({ message: "Book Deleted succesfully" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

export default routes;
