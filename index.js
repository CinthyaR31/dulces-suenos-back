const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
/*
mongoose.connect('mongodb://localhost/db-dulces-suenos')
    .then(db => console.log('DB esta conectada'))
    .catch(err => console.error(err));*/


mongoose.connect('mongodb+srv://user_dulces_suenos:user_dulces_suenos@cluster0.h1dn3.mongodb.net/db-dulces-suenos')
    .then(db => console.log('DB esta conectada'))
    .catch(err => console.error(err));

app.use(cors());

//Settings: configuración de express
//configuración del puerto del servidor
app.set('port', process.env.PORT || 3000);

//Middlewares: funciones que te ayudan a procesar antes de que lleguen a las url

// Parsea el body a json
app.use(express.json());
//Permite el acceso de cors
app.use(morgan('dev'));

//Routes: url de nuestro servidor
app.use('/dulces-suenos', require('./routers/rutas'));

//Static files: los archivos estaticos son aquellos archivos que enviamos al fronted, ej: fuentes, archivos js, html,css
//mis archivos estaticos iran en la carpeta public
app.use(express.static(__dirname + '/public'));


//Server is listening, servidor le digo que escuche en el puerto 3000
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});
