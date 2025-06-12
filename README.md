# Simple Book CRUD API

This project is a simple Node.js + Express REST API that allows you to perform basic CRUD operations (Create, Read, Update, Delete) on books. The data is stored in memory (an array), so no database is used.

##  Technologies Used

- Node.js
- Express.js
- Postman (for API testing)

##  Getting Started

1. Clone the Repository ->
git clone https://github.com/yourusername/task-3.git ->
cd task-3
 2. Install Dependencies ->
npm install
3. Start the Server ->
npm start ->
Server will start at:
---http://localhost:3000

## API Endpoints
### GET All Books
1.Endpoint: GET /books
2.Purpose: Returns a list of all books.
### Screenshot:
![GET](images/screenshot-get.png)


 ### POST a New Book
1.Endpoint: POST /books
2.Body:json
{
  "title": "kongari akhila",
  "author": "akhila"
}
### Screenshot:
![POSt](images/screenshot-post.png)


### PUT (Update) a Book
1.Endpoint: PUT /books/:id
2.Body:json
{
  "title": "akhila",
  "author": "akki"
}
### Screenshot:
![PUT](images/screenshot-put.png)


## DELETE a Book
1.Endpoint: DELETE /books/:id
2.Purpose: Deletes a book with the specified ID.
### Screenshot:
![DELETE](images/screenshot-delete.png)


## Notes
Data is stored temporarily in memory and will be lost on server restart.
Make sure to use a valid book ID (from GET /books) for PUT and DELETE requests.

## Author
kongari Akhila


