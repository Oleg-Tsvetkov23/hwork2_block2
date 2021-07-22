import { Book } from "../models/books";

interface CreateBookDto {
  title: string;
  description: string;
  authors: string;
  favorite: string;
  fileCover: string;
}

export class BooksRepository {
  constructor() {
    console.log("new BooksService");
  }
  async create(data:CreateBookDto) {
    const book = new Book(data);
    await book.save();
    return book;
  }
  findAll() {
    return Book.find();
  }
  getBook(id:string) {
    return Book.findById(id);
  }
  deleteBook(id:string) {
    return Book.deleteOne({_id:id});
  }
  updateBook(data:CreateBookDto,id:string) {
    const {title, description, authors, favorite, fileCover} = data
    return Book.findByIdAndUpdate(id, {title, description, authors, favorite, fileCover});
  }
}
