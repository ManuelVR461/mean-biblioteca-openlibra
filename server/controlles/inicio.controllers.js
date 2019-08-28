const inicioctrl = {};

inicioctrl.getIndex = async (req,res)=>{
    console.log("Pagina de Inicio");
    res.json({pagina:"Pagina de Inicio"});
}

module.exports = inicioctrl;