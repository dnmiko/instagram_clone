import jwt from 'jsonwebtoken';
import User from '../models/users';

//Constantes que definen el comportamiento del JWT.
const expiresIn = "1d";
const secret = "samplejwtinstagram";

export const createToken = (email, password) => {
    //Verificamos que los datos no sean vacío.
    if (!email || !password) {
        return false;
    }

    //Para crear el JWT necesitamos primero encontrar el usuario al cuál le pertenece.
    const user = User.findOne({
        'email': email
    }).then((user) => {
        console.log(user);

        //En caso de que lo encontremos, comparamos la contraseña para autenticarlo.
        const compare = new Promise((resolve, reject) => {
            user.comparePassword(password, (err, isMatch) => {
                //Si la contraseña fuera correcta, creamos un JWT.
                if (isMatch) {
                    let payload = {
                        email: user.email,
                        id: user._id
                    }

                    //Creación del JWT.
                    const token = jwt.sign(payload, secret, {
                        expiresIn
                    });

                    resolve(token);
                } else {
                    reject(false);
                }
            });
        });

        return compare;
    }).catch((err) => {
        return err;
    });

    return user;
}