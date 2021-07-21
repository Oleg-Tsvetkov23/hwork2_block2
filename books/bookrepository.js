const { Book } = require("../models/books");

class BooksRepository {
  constructor() {
    console.log("new BooksService");
  }
  async create(data) {
    const book = new Book(data);
    await book.save();
    return book;
  }
  findAll() {
    return Book.find();
  }
  getBook(id) {
    return Book.findById(id);
  }
  deleteBook(id) {
    return Book.deleteOne({_id:id});
  }
  updateBook(data,id) {
    const {title, description, authors, favorite, fileCover} = data
    return Book.findByIdAndUpdate(id, {title, description, authors, favorite, fileCover});
  }
}

module.exports = { BooksRepository };
