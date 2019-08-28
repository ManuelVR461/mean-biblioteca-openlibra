const express = require('express');
const app = express();
const morgan = require('morgan') ;
const { mongoose } = require('./database');
const cors = require('cors');
const config = require('./config');

//CONFIG
app.set('PORT',config.PORT);
app.set('secretKey',config.TOKEN_SECRET);
app.set('publicKey',config.TOKEN_PUBLIC);
//MIDDLEWARE
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin:'http://localhost:4200'}));
//app.use(express.urlencoded({ extended: true }));

//ROUTES
app.use ('/api/',require('./routes/inicio.routes'));
app.use ('/api/users',require('./routes/users.routes'));
app.use ('/api/books',require('./routes/books.routes'));


app.listen(app.get('PORT'),()=>{
    console.log(`server iniciado desde el puerto ${app.get('PORT')}`);
});