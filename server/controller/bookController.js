import Book from "../model/bookSchema.js";

export const showAllBooks = async (req, res) =>{
    try{
        const books = await Book.find({});
        res.status(200).json({
            data: books,
            count: books.length
        })
    }catch(err){
        console.log('Error fetching books', err);
        res.status(500);
    }
}

export const getBookById = async(req,res)=> {
    try{
        const { id } = req.params;
        const book = await Book.findById({_id : id});
        res.status(200).json({data: book});
    }catch(err){
        console.log('Error fetching books', err);
        res.status(500);
    }
}

export const addBook = async(req,res)=> {
    try{
        const { bookName, author, publishYear, country } = req.body;

        if(!bookName || !author || !publishYear || !country) res.status(400).json({message : "Insert valid information"});

        const newBook = {
            bookName : bookName,
            author : author,
            publishYear : publishYear,
            country : country
        };

        const result = await Book.create(newBook);

        res.status(201).json({
            message : "Book succesfully added",
            book : result
        })

    }catch(err){
        console.log('Error adding book', err);
        res.status(500);
    }
}

export const deleteBook = async(req,res)=> {
    try{
        const { id } = req.params;
        const result = await Book.findByIdAndDelete(id);

        res.status(200).json({message: "Resource successfully deleted"});
    }catch(err){
        console.log('Error deleting book', err);
        res.status(500);
    }
}

export const editBook = async(req,res)=> {
    try{
        const { bookName, author, publishYear, country } = req.body;
        const { id } = req.params;

        if(!bookName || !author || !publishYear || !country) res.status(400).json({message : "Insert valid information"});

        const newBook = {
            bookName : bookName,
            author : author,
            publishYear : publishYear,
            country : country
        };
        
        const result = await Book.findByIdAndUpdate(id, req.body);

        if(!result) res.status(404).json({message: "Book not found"});

        res.status(200).json({ message: "Book updated"})
    }catch(err){
        console.log('Error editing book', err);
        res.status(500);
    }
}