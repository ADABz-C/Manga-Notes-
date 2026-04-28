### Book-NoteTaker
## Book Explorer Application — Technical
# Documentation
### 1. Project Overview
The Book Explorer application is a web-based platform that allows users to browse, search, and
interact with curated book data from an external API. It is designed for students and casual readers
who want a simple and engaging way to discover books and keep personal notes.
### 2. Technical Architecture
The application uses a client-server structure with a frontend built in HTML, CSS, and JavaScript, and a
backend using Node.js and Express. Data is fetched from the New York Times Books API.
The Book class represents each book with properties such as title, author, description, image, rank,
and buy link.
### 3. Feature Walkthrough
1 Book Display: Shows books in a grid layout using API data.
2 Search: Filters books dynamically based on user input.
3 Book Detail Page: Displays detailed information for a selected book.
4 Notes System: Allows users to save persistent notes per book.
5 Animations: GSAP is used for hover and floating effects.
6 External Link: Clicking the book opens the Amazon purchase page.
### 4. API Documentation
The application uses the New York Times Books API. It retrieves book data including title, author,
description, image, rank, and Amazon link.
The backend securely handles API keys using environment variables.
### 5. Challenges and Decisions
1 Maintaining consistent property names between API and application.
2 Handling localStorage data transfer between pages.
3 Managing dynamic DOM elements and event listeners.
4 Fixing backend errors and ensuring correct API responses.
5 Controlling GSAP animations without stacking issues.
### 6. How to Run
1 Clone the repository and navigate to the project folder.
2 Run 'npm install' to install dependencies.
3 Create a .env file with your NYT API key.
4 Start the backend server using 'node server.js'.
5 Open index.html in your browser.
