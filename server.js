import express from 'express';
import mongoose from 'mongoose';

//Iniciamos una instancia del servidor de express.
const app = express();
const PORT = process.env.PORT || 3500;

//Nos conectamos a la base de datos de mLab (MongoDB).
mongoose.connect('mongodb://admin:Poker2294@ds127771.mlab.com:27771/devf-instagram-clone');
const db = mongoose.connection;

//Agregamos callbacks a los casos de error y éxito en la conexión con la DB.
db.on('error', () => console.log("Error en la conexión con al DB"))
    .once('open', () => console.log("Conexión exitosa con la DB"))

app.get('/', function(req, res) {
    res.send("Estoy funcionando");
})

app.listen(PORT, function() {
    console.log("Magic Happens in Port " + PORT);
})