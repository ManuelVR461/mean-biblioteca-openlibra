'use strict'

const express = require('express');
const router = express.Router();

const usersCrtl = require('../controlles/users.controllers');


router.post('/login',usersCrtl.loginUser);
router.get('/',usersCrtl.getUsers);
router.post('/register',usersCrtl.registerUsers);
router.get('/logout',usersCrtl.logoutUser);


module.exports = router;