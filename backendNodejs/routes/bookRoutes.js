const express = require('express');
const { createBook, getBooks, updateBook, deleteBook } = require('../controllers/bookController'); // Make sure this is correct

const router = express.Router();

router.post('/', createBook); // Ensure 'createBook' function is correctly passed here
router.get('/', getBooks); // Ensure 'getBooks' function is correctly passed here
router.put('/:id', updateBook); // Ensure 'updateBook' function is correctly passed here
router.delete('/:id', deleteBook); // Ensure 'deleteBook' function is correctly passed here

module.exports = router;
