import { Container, decorate, injectable } from "inversify";
import { BooksRepository } from "./books/bookrepository";
export const container = new Container();

decorate(injectable(), BooksRepository);
container.bind(BooksRepository).toSelf();
