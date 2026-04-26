class Book {
    constructor(title, author, description, book_image, rank) {
        this.title = title;
        this.author = author;
        this.description = description;
        this.book_image = book_image;
        this.rank = rank;
    }
}


const dataTransfered = localStorage.getItem('selectedBook');
console.log("raw storage: ", dataTransfered);

if (dataTransfered){
    const data = JSON.parse(dataTransfered);
    console.log("pb : ", data);//parsed book
    console.log("img: ", data.image);

    const book = new Book(
        data.title,
        data.author,
        data.description,
        data.image,
        data.rank
    );

    // display it
    document.getElementById("titleHolder").textContent = book.title;
    document.getElementById("image").src = book.book_image;
    document.getElementById("descriptionHolder").textContent = book.description;
    document.getElementById("author").textContent = "Author: " + book.author;
    document.getElementById("rank").textContent = "Rank: " + book.rank;
}

else {
    console.log("No book data found in localStorage");
}

// const book = dataTransfered;


/////// Notepad 

const notekey = "notes_" + book.rank; //rank over title due to possiblity of duplicate
const savedNote = localStorage.getItem(notekey);
if (savedNote){
    document.getElementById('notepad').value = savedNote;
}

const textarea = document.getElementById('notepad');

textarea.addEventListener('input', ()=> {
    localStorage.setItem(notekey, textarea.value);
})

const saveBtn = document.getElementById('saveBtn');

saveBtn.addEventListener('click', ()=>{
    localStorage.setItem('notekey', textarea.value);
})