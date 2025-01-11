const library = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBook(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    library.push(newBook);
}

function refreshLibrary() {
    const bookContainer = document.querySelector('.book-container');
    bookContainer.textContent = '';

    for (const book of library) {
        const bookElement = document.createElement('div');
        bookElement.classList.add('book');

        const bookTitle = document.createElement('div');
        const bookAuthor = document.createElement('div');
        const bookPages = document.createElement('div');
        const bookRead = document.createElement('div');

        bookTitle.textContent = book.title;
        bookAuthor.textContent = book.author;
        bookPages.textContent = book.pages;
        bookRead.textContent = book.read;

        bookElement.appendChild(bookTitle);
        bookElement.appendChild(bookAuthor);
        bookElement.appendChild(bookPages);
        bookElement.appendChild(bookRead);

        bookContainer.appendChild(bookElement);
    }
}

const dialog = document.querySelector('dialog');
const newBookButton = document.querySelector('.new-book');
const closeButton = document.querySelector('.close-button');
const addBookButton = document.querySelector('.add-button');

const title = document.querySelector('input[id="title"]');
const author = document.querySelector('input[id="author"]');
const pages = document.querySelector('input[id="pages"]');
const read = document.querySelector('select');

newBookButton.addEventListener('click', () => {
    dialog.showModal();
});

closeButton.addEventListener('click', () => {
    dialog.close();
})

addBookButton.addEventListener('click', (event) => {
    event.preventDefault();

    if (!(title.value && author.value && pages.value)) {
        return;
    }

    addBook(title.value, author.value, pages.value, read.value);
    refreshLibrary();

    title.value = '';
    author.value = '';
    pages.value = '';

    dialog.close();
})