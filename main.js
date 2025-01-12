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

        bookElement.setAttribute('data', library.indexOf(book))

        const bookTitle = document.createElement('div');
        const bookAuthor = document.createElement('div');
        const bookPages = document.createElement('div');
        const bookRead = document.createElement('div');
        const deleteBook = document.createElement('button');
        const toggleRead = document.createElement('button');

        bookTitle.classList.add('title')
        bookAuthor.classList.add('author')
        bookPages.classList.add('pages')
        bookRead.classList.add('read')
        deleteBook.classList.add('delete')
        toggleRead.classList.add('toggle-read')

        bookTitle.textContent = book.title;
        bookAuthor.textContent = book.author;
        bookPages.textContent = `Pages: ${book.pages}`;
        bookRead.textContent = book.read;

        deleteBook.textContent = 'Delete';
        toggleRead.textContent = 'Toggle read status'

        deleteBook.addEventListener('click', (event) => {
            library.splice(Number(event.target.parentElement.getAttribute('data'), 1));

            event.target.parentElement.remove();
        })

        toggleRead.addEventListener('click', (event) => {
            const index = Number(event.target.parentElement.getAttribute('data'))
            const readStatus = document.querySelector(`[data="${index}"] .read`)

            if (readStatus.textContent === "Read") {
                book.read = false

                readStatus.textContent = 'Not read'
            } else {
                book.read = true

                readStatus.textContent = 'Read'
            }
        })

        bookElement.appendChild(bookTitle);
        bookElement.appendChild(bookAuthor);
        bookElement.appendChild(bookPages);
        bookElement.appendChild(bookRead);
        bookElement.appendChild(deleteBook);
        bookElement.appendChild(toggleRead)

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