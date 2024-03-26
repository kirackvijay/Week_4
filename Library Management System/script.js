const addBookForm = document.getElementById("addBookForm");
const bookList = document.getElementById("bookList");
const searchInput = document.getElementById("searchInput");

let books = [];

addBookForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const genre = document.getElementById("genre").value;

  if (title && author && pages && genre) {
    const newBook = { title, author, pages, genre };
    books.push(newBook);
    displayBooks(books);
    addBookForm.reset();
  } else {
    alert("Please fill in all the required fields.");
  }
});

searchInput.addEventListener("input", function () {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm)
  );
  displayBooks(filteredBooks);
});

function displayBooks(booksArray) {
  bookList.innerHTML = "";
  if (booksArray.length === 0) {
    bookList.innerHTML = "<p>No books found.</p>";
  } else {
    booksArray.forEach((book) => {
      const bookDiv = document.createElement("div");
      bookDiv.classList.add("book");
      bookDiv.innerHTML = `
                <p><strong>Title:</strong> ${book.title}</p>
                <p><strong>Author:</strong> ${book.author}</p>
                <p><strong>Pages:</strong> ${book.pages}</p>
                <p><strong>Genre:</strong> ${book.genre}</p>
            `;
      bookList.appendChild(bookDiv);
    });
  }
}
