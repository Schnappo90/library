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
  this.id = self.crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, read) {
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

function displayLibrary(myLibrary) {
  return myLibrary.map();
}

// addBookToLibrary("The Best", "Alex", 342, false);
// addBookToLibrary("Empireland", "Sathnam Sanghera", 256, true);
// addBookToLibrary(
//   "Empireworld: How British Imperialism Has Shaped the Globe",
//   "Sathnam Sanghera",
//   448,
//   true
// );

let bookForm = document.getElementById("add-book-form");
let bookTitleInput = document.getElementById("title");
let authorInput = document.getElementById("author");
let pagesInput = document.getElementById("pages");
let submit = document.querySelector(".submit");
const openModal = document.querySelector(".open-modal");
const closeModal = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");

openModal.addEventListener("click", () => {
  modal.showModal();
});

closeModal.addEventListener("click", () => {
  modal.close();
});

bookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let bookTitleValue = bookTitleInput.value;
  let authorValue = authorInput.value;
  let pageValue = pagesInput.value;

  addBookToLibrary(bookTitleValue, authorValue, pageValue, false);
  displayBooksOnPage(myLibrary);

  bookTitleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
});

const bookContainer = document.querySelector(".book-library-display");

function displayBooksOnPage(myLibrary) {
  const lastBook = myLibrary[myLibrary.length - 1];

  //create book card tile
  const card = document.createElement("div");
  card.classList.add("book-info-card");
  card.setAttribute("data-id", lastBook.id);

  // Create and append the title
  const bookTitle = document.createElement("h3");
  bookTitle.textContent = lastBook.title;
  card.appendChild(bookTitle);

  // Create and append the author
  const authorInfo = document.createElement("p");
  authorInfo.textContent = `By ${lastBook.author}`;
  card.appendChild(authorInfo);

  // Create and append the pages info
  const pagesInfo = document.createElement("p");
  pagesInfo.textContent = `${lastBook.pages} Pages`;
  card.appendChild(pagesInfo);

  // 🔹 Create a new remove button for each book
  const removeBook = document.createElement("button");
  removeBook.classList.add("removeBook");
  removeBook.textContent = "Delete From Library";
  card.appendChild(removeBook);

  // Add event listener to remove button
  removeBook.addEventListener("click", (e) => {
    let bookIndex = myLibrary.findIndex(book => book.id === lastBook.id);
    if(bookIndex !== -1) {
        myLibrary.splice(bookIndex, 1);
    }
    card.remove(); // Remove the card from the page
  });

  bookContainer.appendChild(card);
}

removeBook.addEventListener("click", (e) => {
  console.log(e);
});

// displayBooksOnPage(myLibrary);
