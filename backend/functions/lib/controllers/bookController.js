"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBook = exports.updateBook = exports.getBooks = exports.createBook = void 0;
const firestoreService_1 = __importDefault(require("../services/firestoreService"));
const booksCollection = firestoreService_1.default.collection('books');
// Create a new book
const createBook = async (req, res) => {
    try {
        const data = req.body; // Retrieve book data from request body
        const docRef = await booksCollection.add(data);
        res.status(201).send(Object.assign({ id: docRef.id }, data));
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).send({ error: error.message });
        }
        else {
            res.status(500).send({ error: "Unknown error occurred" });
        }
    }
};
exports.createBook = createBook;
// Retrieve all books
const getBooks = async (req, res) => {
    try {
        const snapshot = await booksCollection.get();
        const books = snapshot.docs.map(doc => (Object.assign({ id: doc.id }, doc.data())));
        res.status(200).send(books);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).send({ error: error.message });
        }
        else {
            res.status(500).send({ error: "Unknown error occurred" });
        }
    }
};
exports.getBooks = getBooks;
// Update a book by ID
const updateBook = async (req, res) => {
    try {
        const { id } = req.params; // Retrieve book ID from URL parameters
        const data = req.body;
        await booksCollection.doc(id).update(data);
        res.status(200).send(Object.assign({ id }, data));
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).send({ error: error.message });
        }
        else {
            res.status(500).send({ error: "Unknown error occurred" });
        }
    }
};
exports.updateBook = updateBook;
// Delete a book by ID
const deleteBook = async (req, res) => {
    try {
        const { id } = req.params;
        await booksCollection.doc(id).delete();
        res.status(200).send({ message: 'Book deleted successfully' });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).send({ error: error.message });
        }
        else {
            res.status(500).send({ error: "Unknown error occurred" });
        }
    }
};
exports.deleteBook = deleteBook;
//# sourceMappingURL=bookController.js.map