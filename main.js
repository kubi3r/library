const library = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBook(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read)
    library.push(newBook)
}

function refreshLibrary() {
    for (const book of library) {
        const bookElement = document.createElement('div')
        bookElement.classList.add('book')

        const bookTitle = document.createElement('div')
        const bookAuthor = document.createElement('div')
        const bookPages = document.createElement('div')
        const bookRead = document.createElement('div')

        bookTitle.textContent = book.title
        bookAuthor.textContent = book.author
        bookPages.textContent = book.pages
        bookRead.textContent = book.read

        bookElement.appendChild(bookTitle)
        bookElement.appendChild(bookAuthor)
        bookElement.appendChild(bookPages)
        bookElement.appendChild(bookRead)

        const bookContainer = document.querySelector('.book-container')
        bookContainer.appendChild(bookElement)
    }
}
