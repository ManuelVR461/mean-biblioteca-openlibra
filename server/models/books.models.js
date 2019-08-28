const moongosse = require('mongoose');
const {Schema} = moongosse;

const BooksSchema = new Schema({
    titulo : {type: String,required:true},
    idioma : {type: String,required:true},
    descripcion : {type: String,required:true},
    portada : {type: String,required:true},
    precio : {type: String,required:true},
    oferta : {type: Number,required:true},
    link_amazon : {type: String,required:true},
    autor : {type: String,required:true},
    idbook : {type: String,required:true}
});

module.exports = moongosse.model('Books',BooksSchema);