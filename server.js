import Express from 'express';
import Mongoose from 'mongoose';
import BodyParser from 'body-parser';
import UserSchema from './src/models/users';
import { createToken } from './src/resolvers/create';

//Iniciamos una instancia del servidor de express.
const app = Express();
const PORT = process.env.PORT || 3500;

//Nos conectamos a la base de datos de mLab (MongoDB).
Mongoose.connect('mongodb://admin:Poker2294@ds127771.mlab.com:27771/devf-instagram-clone');
const db = Mongoose.connection;

//Agregamos callbacks a los casos de error y éxito en la conexión con la DB.
db.on('error', () => console.log("Error en la conexión con al DB"))
    .once('open', () => console.log("Conexión exitosa con la DB"))

app.use(BodyParser.json());

//Endpoint para crear un usuario nuevo.
app.post('/signup', function(req, res) {
    let user = req.body;
    UserSchema.create(user).then((user) => {
        return res.status(201).json({
            "message": "Usuario creado",
            "id": user._id
        });
    }).catch((err) => {
        console.log(err)
        return res.json(err);
    });
});

//Endpoint para logear a un usuario.
app.post('/login', function(req, res) {
    const token = createToken(req.body.email, req.body.password).then((token) => {
        res.status(201).json({
            token
        });

    }).catch(() => {
        res.status(403).json({
            message: "Login Failed, invalid credentials"
        });
    });
});

app.get('/', function(req, res) {
    res.send("Estoy funcionando");
})

app.listen(PORT, function() {
    console.log("Magic Happens in Port " + PORT);
})