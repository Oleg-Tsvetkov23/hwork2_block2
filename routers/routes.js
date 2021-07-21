const { Router } = require("express");
const { container } = require("../container");
const { BooksRepository } = require("../books/bookrepository");
const router = new Router();

router.get("/", async (req, res) => {
  const repo = container.get(BooksRepository)
  const books = await repo.findAll();
  res.json(books);
});

router.post("/", async (req, res) => {
  const repo = container.get(BooksRepository)
  const book = await repo.create(req.body);
  res.json(book);
});

router.get("/:id", async (req, res) => {
  const repo = container.get(BooksRepository)
  try {
    const books = await repo.getBook(req.params.id)
    res.json(books);
  } catch (e) {
    console.error(e);
    res.status(404).json("books | not found");
  }
});

router.delete("/:id", async (req, res) => {
  const repo = container.get(BooksRepository)
  try {
    await repo.deleteBook(req.params.id);
    res.json("Ok");
  } catch (e) {
    console.error(e);
    res.status(404).json("books | not found");
  }
});

router.put("/:id", async (req, res) => {
  const repo = container.get(BooksRepository)
  try {
    await repo.updateBook(req.body,req.params.id);
    res.json("Ok");
  } catch (e) {
    console.error(e);
    res.status(404).json("books | not found");
  }
});

module.exports = router;
