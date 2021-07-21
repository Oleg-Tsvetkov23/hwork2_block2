const { Container, decorate, injectable } = require("inversify");
const { BooksRepository } = require("./books/bookrepository");
const container = new Container();

decorate(injectable(), BooksRepository);
container.bind(BooksRepository).toSelf();

module.exports = { container };
