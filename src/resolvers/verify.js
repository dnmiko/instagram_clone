import User from '../models/users';
import jwt from 'jsonwebtoken';

const expiresIn = '3d';
const secret = "samplejwtinstagram";
const tokenPrefix = "JWT";

export const verifyToken = (token) => {
    try {
        const [prefix, receivedToken] = token.split(' ');
        let user = null;

        if (!receivedToken) {
            throw new Error("No se recibió un token");
        }

        if (prefix != tokenPrefix) {
            throw new Error("Formato de header inválido");
        }

        jwt.verify(receivedToken, secret, (err, payload) => {
            if (err) {
                throw new Error("Token inválido");
            } else {
                user = User.findById(payload.id).exec();
            }
        });

        if (!user) {
            throw new Error("El usuario no existe");
        }

        return user;

    } catch (err) {
        throw new Error("Error inesperado");
    }
}