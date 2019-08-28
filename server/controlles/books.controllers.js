const Books = require('../models/books.models');
var qs = require('querystring')
const request = require('request');
const BooksCtrl = {};


BooksCtrl.getAllBooks = async(req,res,next) => {
    const books = await Books.find({"oferta":0});
    res.json(books);
}

BooksCtrl.getOpenLibra = async(req,res,next) => {
    var options = { method: 'GET',
        url: 'http://www.etnassoft.com/api/v1/get/',
        qs: { category: 'libros_programacion' }
    };

    await request(options, function (error, response, body) {
        if (error) throw new Error(error);
        body = String(body)
        body = body.substring(body.indexOf('(') + 1, body.lastIndexOf(')'))
        const listbook = JSON.parse(body);
        store = [];
        for (const key in listbook) {
            store.push({
                titulo : listbook[key].title,
                idioma : listbook[key].language,
                descripcion : (listbook[key].content_short).trim().replace(/[^\x20-\x7E]/gmi, ""),
                portada : listbook[key].cover,
                precio : "0",
                oferta : 0,
                link_amazon : listbook[key].url_download,
                autor : listbook[key].author,
                idbook : listbook[key].ID
            })
        }
        // const books = new Books();

        // books.collection.insertMany(store,(err,docs)=>{
        //     if(err) throw err;
        //     if(!err){
        //         console.log('Guardado multiples libros ' + docs);
        //     }
        // })
        res.json(store);
    });
    
    next();
}


BooksCtrl.getFilterBooks = async(req,res) => {
    const books = await Books.find({"oferta":1});
    res.json(books);
}

BooksCtrl.createBook = async (req,res) => {
    const book = new Books(req.body);
    await book.save();
    res.json({status:"empleado guardado"});
}

BooksCtrl.getBook = async (req,res) => {
    console.log('Busco un libro ' + req.params.idbook)
    const book = await Books.findOne({idbook:req.params.idbook});
    res.json(book);
}

BooksCtrl.updateBook = async (req,res) => {
    const book = {
        titulo : req.body.titulo,
        idioma : req.body.idioma,
        descripcion : req.body.descripcion,
        portada : req.body.portada,
        precio : req.body.precio,
        oferta : req.body.oferta,
        link_amazon : req.body.link_amazon,
        autor : req.body.autor,
        idbook : req.body.id
    }
    await Books.findByIdAndUpdate(req.params.id,{$set: book},{new: true});
    res.json({status:'Book Actualizado'});
}

BooksCtrl.deleteBook = async (req,res)=>{
    await Books.findByIdAndRemove(req.params.id);
}

module.exports = BooksCtrl;