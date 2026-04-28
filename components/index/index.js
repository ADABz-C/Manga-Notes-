class Book {
    constructor(title, author, description, image, rank, url){
        this.title = title;
        this.author = author;
        this.description = description;
        this.image = image;
        this.rank = rank;
        this.amazon_product_url = url;
    }
}

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
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn')


let allbooks = [];


function displayBooks(bookCards){

    const bookShelf = document.getElementById('bookShelf');
    bookShelf.innerHTML = "";

    bookCards.forEach(book => {
        
        const bookObj = new Book(
            book.title,
            book.author,
            book.description,
            book.book_image,
            book.rank,
            book.amazon_product_url
        );

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
        
        

        // Card animation

        // const cards = document.querySelectorAll('.book-card');

            //mouse enters
            card.addEventListener('mouseenter', () => {
                gsap.to(card, {
                    y: -5,
                    duration: 0.1
                });

            })

            // mouse leaves

            card.addEventListener('mouseleave', () => {
                gsap.to(card, {
                    y:0,
                    duration: 0.1
                });
            });

            card.addEventListener('click', ()=> {
                //save book selected
                console.log("Saving book", bookObj)
                localStorage.setItem("selectedBook", JSON.stringify(bookObj));
                
    
                // redirect to reviewPage
                window.location.href = "../reviewPage/reviewPage.html";
            })

        bookShelf.appendChild(card);

    });

}

function searchBooks(query){
    const filtered = allbooks.filter(book => 
        book.title.toLowerCase().includes(query.toLowerCase())
    )

    displayBooks(filtered)

}

searchInput.addEventListener('input', (e)=> {
    searchBooks(e.target.value);
});


async function loadSearchedBooks() {
    const response = await fetch("http://localhost:3000/books");
    const books = await response.json();

    allbooks = books;
    displayBooks(allbooks);
}

searchBtn.addEventListener('click', (e)=>{
    searchBooks(searchInput.value);
})


loadSearchedBooks();