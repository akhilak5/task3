const express = require('express')
const app=express();

const PORT=3000;
app.use(express.json());

let books=[];
app.get('/books',(req,res)=>{
    res.json(books);
})

app.post('/books',(req,res)=>{
    const{title,author}=req.body;
    const id=Date.now();
    const newbook={id,title,author};
    books.push(newbook);
    res.status(201).json(newbook);
});


app.put('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id); 
    const { title, author } = req.body;
    const bookIndex = books.findIndex(book => book.id === bookId);

    if (bookIndex === -1) {
        return res.status(404).json({ message: 'Book not found' });
    }

    if (title) {
        books[bookIndex].title = title;
    }
    if (author) {
        books[bookIndex].author = author;
    }

    res.json(books[bookIndex]);
});




app.delete('/books/:id',(req,res)=>{
    const bookId=parseInt(req.params.id);
    const bookIndex=books.findIndex(book=>book.id==bookId)
    if (bookIndex === -1) {
    return res.status(404).json({ message: 'Book not found' });
}
    const deletebook=books.splice(bookIndex,1)
    res.json(deletebook[0])
        

})

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
});
