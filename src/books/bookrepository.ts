import { BookModel } from "../models/books";
import { Book } from "./ibook"

interface CreateBookDto {
  title: Book['title'];
  description: Book['description'];
  authors: Book['authors'];
  favorite: Book['favorite'];
  fileCover: Book['fileCover'];
}

export class BooksRepository {
  constructor() {
    console.log("new BooksService");
  }
  async create(data:CreateBookDto):Promise<Book> {
    const book = new BookModel(data);
    await book.save();
    return book;
  }
  findAll():Promise<Book[]> {
    return BookModel.find().exec();
  }
  getBook(id:string) {
    return BookModel.findById(id).exec();
  }
  deleteBook(id:string) {
    return BookModel.deleteOne({_id:id}).exec();
  }
  updateBook(data:CreateBookDto,id:string) {
    const {title, description, authors, favorite, fileCover} = data
    return BookModel.findByIdAndUpdate(id, {title, description, authors, favorite, fileCover}).exec();
  }
}
