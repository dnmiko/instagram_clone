import jwt from 'jsonwebtoken';
import User from '../models/users';

//Constantes que definen el comportamiento del JWT.
const expiresIn = "1d";
const secret = "samplejwtinstagram";

export const createToken = function(user_name, password) {

    if (!user_name || !password) {
        return false
    }

    console.log(user_name, password)
    const user = User.findOne({ 'user_name': user_name }).then((user) => {
        console.log(user);
        const compare = new Promise((resolve, reject) => {

            user.comparePassword(password, function(err, isMatch) {
                console.log(isMatch);
                if (isMatch) {
                    let payload = {
                        user_name: user.user_name,
                        id: user._id
                    }
                    const token = jwt.sign(payload, secret, { expiresIn });

                    resolve(token)
                } else {
                    reject(false)
                }
            })

        });

        return compare

    }).catch((err) => {
        return err
    });


    return user

}