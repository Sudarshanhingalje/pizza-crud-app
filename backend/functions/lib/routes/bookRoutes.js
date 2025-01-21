"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bookController_1 = require("../controllers/bookController");
const router = express_1.default.Router();
router.post('/', bookController_1.createBook); // Create a new book
router.get('/', bookController_1.getBooks); // Get all books
router.put('/:id', bookController_1.updateBook); // Update a book by ID
router.delete('/:id', bookController_1.deleteBook); // Delete a book by ID
exports.default = router;
//# sourceMappingURL=bookRoutes.js.map