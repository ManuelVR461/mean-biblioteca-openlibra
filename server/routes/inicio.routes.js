const express = require('express');
const router =express.Router();

const inicioctrl = require('../controlles/inicio.controllers');
const bookCrtl = require('../controlles/books.controllers');

router.get('/',inicioctrl.getIndex);

router.get('/api/books',bookCrtl.getAllBooks);

router.get('/api/users',()=>{
    console.json({nombre:"Manuel",email:"manuelvr461@gmail.com",pwd:"1234"});
});

module.exports = router;