class Book {
    constructor(title, author, description, book_image, rank, url) {
        this.title = title;
        this.author = author;
        this.description = description;
        this.book_image = book_image;
        this.rank = rank;
        this.amazon_product_url = url;
    }
}


const dataTransfered = localStorage.getItem('selectedBook');
console.log("raw storage: ", dataTransfered);

let book;
const image = document.getElementById("image");

if (dataTransfered){
    const data = JSON.parse(dataTransfered);
    console.log("pb : ", data); //parsed book
    console.log("img: ", data.image);

    book = new Book(
        data.title,
        data.author,
        data.description,
        data.image,
        data.rank,
        data.amazon_product_url
    );
    
    // display it
    document.getElementById("titleHolder").textContent = book.title;
    image.src = book.book_image;
    image.addEventListener('click', ()=>{
        window.open(book.amazon_product_url, "_blank");
    })
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

const textarea = document.getElementById('notepad');

if (savedNote){
    document.getElementById('notepad').value = savedNote;
}



let saveTimeout; 
textarea.addEventListener('input', ()=> {
    localStorage.setItem(notekey, textarea.value);

    clearTimeout(saveTimeout);

    saveTimeout = setTimeout(()=>{
        alert("Note Saved ✅")
    }, 10000)
})

const saveBtn = document.getElementById('saveBtn');

saveBtn.addEventListener('click', ()=>{
    localStorage.setItem(notekey, textarea.value);

    window.alert("Note Saved ✅");
})



/// adding amazon link


let floatAnim;

image.addEventListener("mouseenter", () => {
    floatAnim = gsap.to(image, {
        y: -10,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });
});

image.addEventListener("mouseleave", () => {
    if (floatAnim) {
        floatAnim.kill(); // stop animation
    }

    // reset position smoothly
    gsap.to(image, {
        y: 0,
        duration: 0.3
    });
});
