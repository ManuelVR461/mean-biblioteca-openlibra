### Server-Mongodb-Express

1. creamos la carpeta del proyecto.
2.  ejecutamos npm init --yes.
4.  instalamos las dependencias necesarias:
    npm install --save express mongan mongoose cors bcryptjs
    npm install nodemon -D
5.  iniciamos servicio de mongodb
6.  creamos una carpeta de server en nuestro proyecto y un archivo de index.js y database.js
7.  En el archivo index js hacemos esta configuracion:

#index.js
 
//requerimos express.
``const express = require('express');``
	
    //creamos el objeto app:
    const app = express();
	
    //establecemos el puerto 3000: 
    app.set('PORT',process.env.PORT || 3000);
	
    // creamos la funcion de inicio:
    app.listen(app.get('PORT'),()=>{
    	console.log(`server iniciado desde el puerto ${app.get('PORT')}`);
    })
    //luego de probar que la conexion inicia podemos llamar los complementos
	//llamamos al complemento morgan que nos permite ver las solicitudes hechas en las url de la api:
	const morgan = require('morgan') ;
	//Le establecemos en la seccion de middleware a express que use este modulo
	app.use(morgan('dev'));

#database.js
 
7. Para hacer la conexion con la base de datos debemos configurar el archivodatabase.js creado por nosotros
8. En el archivo database realizamos la siguiente configuracion:


    //requerimos el modulo mongoose:
	const mongoose = require('mongoose');
	//indicamos la url de la conexion con nuestro servicio de base de datos
	const URI = 'mongodb://localhost/nombredatabase';
	//realizamos la conexion:
	mongoose.connect(URI, {useNewUrlParser: true});
	mongoose.Promise = global.Promise;
	//guardamos el objeto conexion y comprobamos si hubo error o si todo salio bien
	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function() {
		console.log('Base de Datos Conectado');
	});
	//exportamos en modulo para poder llamarlos desde el index
	module.exports = mongoose;

Desde el index llamamos el modulo database para que ejecute la conexion:
	

    const { mongoose } = require('./database');
- si todo sale bien deberia mostrar en consola base de datos Conectado
- habilitamos en los middleware el modulo json de express para trabajar con
estos objetos: 
app.use(express.json());

- Ya con estos pasos tenemos el servidor corriendo y a la escucha
- quedaria crear los controladores, modelos y rutas a las que tendra acceso el frontend de cada componente.

8. En el Archivo Index despues de las seccion de middleware viene la seccion de rutas el cual
	se encargara de dirigir las distintas rutas que se reciba desde el navegador.
	podemos crear un solo archivo aparte llamado routes o anexarlos directamente aqui.
	Por mi parte voy a crear un archivo por cada componente para que sea mas legible.

Estructura de mi proyecto:
	- Inicio
		- server
			- routes
				- inicio.routes.js
			- controllers
				- inicio.controllers.js
			- models
				- inicio.models.js
	- Usuarios
	- Entrar
	- Registrarse
	- Contactos
	- Agendar

9. Para los Archivos Routes se debe requerir el modulo express y luego su clase Routes
	el cual se encarga de gestionar las rutas que se vallan solicitando desde la url.
	En este archivo Por cada Routa solicitada se llama a la funcion especifica de esa ruta
	en el archivo controller por lo que tambien se debe crear de antemano las funciones ahi.

	const express = require('express');
	const router =express.Router();
	const inicioctrl = require('../controlles/inicio.controllers');
	router.get('/',inicioctrl.getIndex);
	module.exports = router;

10. Cada ruta solicitada por el usuario llamara a una funcion especifica dentro del modulo controllers que se diseñara segun lo que haga la pagina en cuestion.
En este caso la pagina de inicio llama a inicio.controller.js en donde van a estar todas la funciones para este componente.

11. La pagina de inicio. controller tendra esta vista:

	const inicioctrl = {}; // objeto que contendra todas las funciones

	//Funcion getIndex que puede llamarse como quiera solo de volvera por ahora un objeto cualquiera.
	inicioctrl.getIndex = async (req,res)=>{ 
		console.log("Pagina de Inicio");
		res.json({pagina:"Pagina de Inicio"});
	}
	// Esportacion del modulo para se disponible para las otros archivos

	module.exports = inicioctrl;

