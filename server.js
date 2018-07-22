import Express from 'express';
import Mongoose from 'mongoose';
import BodyParser from 'body-parser';
import UserSchema from './src/models/users';
import {
    createToken
} from './src/resolvers/create';
import {
    verifyToken
} from './src/resolvers/verify';
import graphQLHTTP from 'express-graphql';
import schema from './src/graphql';
import cors from 'cors';

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
app.use(cors());

//Endpoint para crear un usuario nuevo.
app.post('/signup', function (req, res) {
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
app.post('/login', function (req, res) {
    const token = createToken(req.body.user_name, req.body.password).then((token) => {
        res.status(200).json({
            token
        });

    }).catch(() => {
        res.status(403).json({
            message: "Login Failed, invalid credentials"
        });
    });
});

app.get('/', function (req, res) {
    res.send("Estoy funcionando");
});

//Middleware para proteger graphql.
app.use('/graphql', (req, res, next) => {
    const token = req.headers['authorization'];
    try {
        req.user = verifyToken(token);
        next();
    } catch (err) {
        res.status(401).json({
            message: err.message
        });
    }
});

app.use('/graphql', graphQLHTTP((req, res) => ({
    schema,
    graphiql: true,
    pretty: true,
    context: {
        user: req.user
    }
})));

app.listen(PORT, function () {
    console.log("Magic Happens in Port " + PORT);
})