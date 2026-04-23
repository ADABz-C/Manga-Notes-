async function loadBooks(){
    const response = await fetch(`http://localhost:3000/books`)
    const books = await response.json();

    const bookShelf = document.getElementById('bookShelf');

    books.forEach(book => {
        const card = document.createElement('div');
        card.classList.add('book-card');
        card.innerHTML = 
        `
            <div class="titleHolder"><h1>${book.title}</h1></div>
                <div class="bookContent">
                    <div class="imgHolder"><img src="${book.book_image}" alt="book image"></div>
                    <div class="descriptionHolder">
                        <p>
                            ${book.description}
                        </p>
                    </div>
                </div>
                <div class="credentialHolder">
                    <p>Author: ${book.author}</p>
                    <br>
                    <p>World Rank: ${book.rank} </p>
                </div>
        `;
        
        bookShelf.appendChild(card);
    });
}

loadBooks();


//Implementing Search function
