const express = require('express');
const router = express.Router();
const userController = require('../controllers/bookcontroller');

router.get('/books', userController.getBooks);
//router.post('/books', userController.createBook);
//router.put('/books/:id', userController.updateBook);
//router.delete('/books/:id', userController.deleteBook);

module.exports = router;