import express from 'express';
import { Book } from '../models/Book.js';
import { verifyAdmin } from './auth.js';

// router
const router = express.Router();

// add a book into the database
router.post('/addbook', verifyAdmin, async (req, res) => {
    try {
        const { name, author, imageUrl } = req.body;
        // const book = await Book.findOne({ name })
        // if (book) {
        //     return res.json({ message: "Book already exits" });
        // }
        const newBook = new Book({
            name,
            author,
            imageUrl
        });
        await newBook.save();
        return res.json({ added: true })
    } catch (err) {
        return res.json({ message: "Error in Adding Book" });
    }
});

// get all books from the database
router.get('/books', async (req, res) => {
    try {
        const books = await Book.find();
        return res.json(books);
    } catch (err) {
        return res.json(err);
    }
});

// get a book for specific id
router.get('/book/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const book = await Book.findById({ _id: id });
        return res.json(book);
    }
    catch (err) {
        console.log(err);
    }
});

// update a book with specific id
router.put('/book/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const book = await Book.findByIdAndUpdate({ _id: id }, req.body);
        return res.json({ updated: true, book });
    }
    catch (err) {
        console.log(err);
    }
});

// delete a book with specific id
router.delete('/book/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const book = await Book.findByIdAndDelete({ _id: id });
        return res.json({ deleted: true, book });
    }
    catch (err) {
        console.log(err);
    }
});

export { router as BookRouter }