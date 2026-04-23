//basic setup
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(cors());

const PORT = 3000;

//adding route
app.get('/books', async (req, res) => {
    try{
        const API_KEY = process.env.NY_BOOKSAPI_KEY;
        const BASE_URL = process.env.NY_BOOKSAPI_BASE_URL

        const response = await fetch(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${API_KEY}`);

        const data = await response.json();

        // breaking through layers
        const books = data.results.books.slice(0,9);

        res.json(books);

    }
    catch(error){
        res.status(500).json({ error: "Failed to fetch books"});
    }
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}/books`);
});