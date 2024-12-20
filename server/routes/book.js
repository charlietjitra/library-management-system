import { Router } from "express";
import {showAllBooks, getBookById, addBook, deleteBook, editBook } from "../controller/bookController.js"
const router = Router();

router.get('/books', showAllBooks);
router.get('/book/:id', getBookById)
router.post('/addbook', addBook);
router.delete('/deletebook/:id', deleteBook);
router.put('/editbook/:id', editBook);

export default router;
