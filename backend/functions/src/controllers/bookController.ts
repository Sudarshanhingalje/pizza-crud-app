import { Request, Response } from 'express';
import * as firestoreService from '../services/firestoreService';

// Create a new book
export const createBook = async (req: Request, res: Response) => {
  try {
    const book = req.body;
    const newBook = await firestoreService.createBook(book);
    res.status(201).send(newBook);
  } catch (error) {
    res.status(500).send({ error: 'Error creating book' });
  }
};

// Retrieve all books
export const getBooks = async (req: Request, res: Response) => {
  try {
    const books = await firestoreService.getBooks();
    res.status(200).send(books);
  } catch (error) {
    res.status(500).send({ error: 'Error fetching books' });
  }
};

// Update a book
export const updateBook = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedBook = req.body;
    const book = await firestoreService.updateBook(id, updatedBook);
    res.status(200).send(book);
  } catch (error) {
    res.status(500).send({ error: 'Error updating book' });
  }
};

// Delete a book
export const deleteBook = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await firestoreService.deleteBook(id);
    res.status(200).send({ message: 'Book deleted successfully' });
  } catch (error) {
    res.status(500).send({ error: 'Error deleting book' });
  }
};
