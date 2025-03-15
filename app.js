const myLibrary = [];

function Book(title, author, pages, read) {
  if (!new.target) {
    throw "You must use the 'new' operator to call the constructor";
  }
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} Pages, Read: ${this.read}`;
  };
}

function addBookToLibrary(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read)
    myLibrary.push(newBook);
}

console.log("Hello")