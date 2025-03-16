const myLibrary = [];

function Book(title, author, pages, read) {
  if (!new.target) {
    throw "You must use the 'new' operator to call the constructor";
  }
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read === "true";
  this.id = self.crypto.randomUUID();
  this.toggleReadStatus = function() {
        this.read = !this.read;
      }
  };

  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} Pages, Read: ${this.read}`;
  };

function addBookToLibrary(title, author, pages, read) {
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

function displayLibrary(myLibrary) {
  return myLibrary.map();
}

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

  let bookTitleValue = bookTitleInput.value.trim();
  let authorValue = authorInput.value.trim();
  let pageValue = pagesInput.value.trim();
  let radioInput = document.querySelector('input[name="read"]:checked').value;

  if (!bookTitleValue || !authorValue || !pageValue) {
    alert("Please fill out all fields before submitting.");
    return;
  }

  addBookToLibrary(bookTitleValue, authorValue, pageValue, radioInput);
  displayBooksOnPage(myLibrary);

  bookForm.reset();
  modal.close();
});

const bookContainer = document.querySelector(".book-library-display");

function displayBooksOnPage(myLibrary) {
  const lastBook = myLibrary[myLibrary.length - 1];

  //create book card tile
  const card = document.createElement("div");
  card.classList.add("book-info-card");
  card.setAttribute("data-id", lastBook.id);

  // Create and append the title
  const bookTitle = document.createElement("h4");
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


  const readStatus = document.createElement("button");
  if(lastBook.read === true) {
    readStatus.classList.add("hasRead");
    readStatus.innerHTML = "&#9989; Read";
    }
    else {
        readStatus.classList.add("hasRead", "unread");
    readStatus.innerHTML = "&#10060; Not Read";
    } 
    card.appendChild(readStatus);

    readStatus.addEventListener('click', () => {
        lastBook.toggleReadStatus();
    }
    )

  

  // Create 'has read' button for each book
//   const readStatus = document.createElement("button");
//   if (lastBook.userReadStatus() === true) { 
//     readStatus.classList.add("hasRead");
//     readStatus.innerHTML = "&#9989; Read";

//   } 
//   else {
//     readStatus.classList.add("hasRead", "unread");
//     readStatus.innerHTML = "&#10060; Not Read";
//   }

//   card.appendChild(readStatus);

//   read.addEventListener('click', () => {
//     if(lastBook.userReadStatus() === true) {
//         lastBook.userReadStatus = false;
//         readStatus.classList.add("hasRead", "unread");
//         readStatus.innerHTML = "&#10060; Not Read";
//     } else {
//         readStatus.classList.add("hasRead");
//         readStatus.innerHTML = "&#9989; Read";
//     }
//   })

  // 🔹 Create a new remove button for each book
  const removeBook = document.createElement("button");
  removeBook.classList.add("removeBook");
  removeBook.textContent = "Remove";
  card.appendChild(removeBook);

  // Add event listener to remove button
  removeBook.addEventListener("click", (e) => {
    let bookIndex = myLibrary.findIndex((book) => book.id === lastBook.id);
    if (bookIndex !== -1) {
      myLibrary.splice(bookIndex, 1);
    }
    card.remove(); // Remove the card from the page
  });

  bookContainer.appendChild(card);
}

function createCard() {}
