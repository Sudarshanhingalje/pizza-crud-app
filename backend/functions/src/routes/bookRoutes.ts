import express from 'express';
import * as bookController from '../controllers/bookController';

const router = express.Router();

router.post('/', bookController.createBook);         // Create a new book
router.get('/', bookController.getBooks);           // Get all books
router.put('/:id', bookController.updateBook);      // Update a book by ID
router.delete('/:id', bookController.deleteBook);   // Delete a book by ID

export default router;
