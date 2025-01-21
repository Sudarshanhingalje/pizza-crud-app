// controllers/bookController.js
const Book = require('../models/book'); // Adjust path if necessary

// Create a new book
const createBook = async (req, res) => {
  const { title, author, genre } = req.body;
  try {
    const newBook = new Book({ title, author, genre });
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all books
const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a book
const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, genre } = req.body;
    const updatedBook = await Book.findByIdAndUpdate(id, { title, author, genre }, { new: true });
    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a book
const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    await Book.findByIdAndDelete(id);
    res.status(200).json({ message: 'Book deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Exporting functions
module.exports = { createBook, getBooks, updateBook, deleteBook };
