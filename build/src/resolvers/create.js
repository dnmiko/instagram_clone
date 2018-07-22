'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createToken = undefined;

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _users = require('../models/users');

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Constantes que definen el comportamiento del JWT.
var expiresIn = "1d";
var secret = "samplejwtinstagram";

var createToken = exports.createToken = function createToken(user_name, password) {

    if (!user_name || !password) {
        return false;
    }

    console.log(user_name, password);
    var user = _users2.default.findOne({ 'user_name': user_name }).then(function (user) {
        console.log(user);
        var compare = new Promise(function (resolve, reject) {

            user.comparePassword(password, function (err, isMatch) {
                console.log(isMatch);
                if (isMatch) {
                    var payload = {
                        user_name: user.user_name,
                        id: user._id
                    };
                    var token = _jsonwebtoken2.default.sign(payload, secret, { expiresIn: expiresIn });

                    resolve(token);
                } else {
                    reject(false);
                }
            });
        });

        return compare;
    }).catch(function (err) {
        return err;
    });

    return user;
};