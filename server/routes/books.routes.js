const express = require('express');
const router =express.Router();

const bookCrtl = require('../controlles/books.controllers');

router.get('/',bookCrtl.getAllBooks);
router.get('/OpenLibra',bookCrtl.getOpenLibra);
router.get('/ofertas',bookCrtl.getFilterBooks);
router.get('/:idbook',bookCrtl.getBook);

// router.post('/',bookCrtl.createBook);
// router.put('/:id',bookCrtl.updateBook);
// router.delete('/:id',bookCrtl.deleteBook);

module.exports = router;