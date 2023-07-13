let myLibrary = [];

function Book(title, author, pages, genre, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.genre = genre;
    this.read = read;
}

function addToLibrary(Book) {
    myLibrary.push(Book);
    return myLibrary;
}

const lightInAugust = new Book('Light In August', 'William Faulkner', 532, 'Classic', 'Read');
const thePictureOfDorianGrey = new Book('The Picture Of Dorian Grey', 'Oscar Wilde', 203, 'Classic', 'Read');
const onTheRoad = new Book('On The Road', 'Jack Kerouac', 346, 'Modern Classic', 'Read');
addToLibrary(onTheRoad);
addToLibrary(lightInAugust);
addToLibrary(thePictureOfDorianGrey);

console.log(myLibrary);

function printLibrary() {
    const container = document.getElementById('container');
    myLibrary.forEach(function(item){
        let newCard = document.createElement('div');
        newCard.className = 'card';
        container.appendChild(newCard);

        let bookTitle = document.createElement('div');
        bookTitle.className = 'book-title';
        bookTitle.textContent = 'Title: ' + item.title;
        newCard.appendChild(bookTitle);

        let bookAuthor = document.createElement('div');
        bookAuthor.className = 'book-author';
        bookAuthor.textContent = 'Author: ' + item.author;
        newCard.appendChild(bookAuthor);

        let bookPages = document.createElement('div');
        bookPages.className = 'book-pages';
        bookPages.textContent = 'Pages: ' + item.pages;
        newCard.appendChild(bookPages);

        let bookGenre = document.createElement('div');
        bookGenre.className = 'book-genre';
        bookGenre.textContent = 'Genre: ' + item.genre;
        newCard.appendChild(bookGenre);

        let readStatus = document.createElement('div');
        readStatus.className = 'read-status';
        readStatus.textContent = 'This book is: ' + item.read;
        newCard.appendChild(readStatus);

        //ADDS THE READ/NOT READ BUTTON TO EACH CARD
        let readButton = document.createElement('button');
        readButton.textContent = item.read;
        newCard.appendChild(readButton);

        if (readButton.textContent === 'Read'){
            readButton.className = 'readBook';
        } else {
            readButton.className = 'notReadBook';
        }

        readButton.addEventListener('click', () => {
            if(readButton.textContent === 'Read'){ 
                item.read = 'Not Read';
                readStatus.textContent = 'This book is: Not Read';
                readButton.textContent = item.read;
                readButton.className = 'notReadBook';
            } else if (readButton.textContent === 'Not Read'){
                item.read = 'Read';
                readStatus.textContent = 'This book is: Read';
                readButton.textContent = item.read;
                readButton.className = 'readBook';
            }
            console.log(myLibrary);
        });

        const remove = document.createElement('button');
        remove.className = 'remove';
        remove.textContent = 'Remove';
        newCard.appendChild(remove);

        remove.addEventListener('click', () => {
            let areSure = confirm('Are you sure you want to remove this book from your library?');

            if (areSure === true){
                myLibrary = myLibrary.filter(i => i.title != item.title);
                newCard.remove();
                console.log(myLibrary);
            } 
        }); 
    })
}

printLibrary();

const form = document.getElementById('form');
const newBook = document.getElementById('new');
newBook.addEventListener('click', () => {
    if (form.style.display === 'none') {
        form.style.display = 'flex';
    } else {
        form.style.display = 'none';
    }
});