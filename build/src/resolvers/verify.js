'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.verifyToken = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _users = require('../models/users');

var _users2 = _interopRequireDefault(_users);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expiresIn = '3d';
var secret = "samplejwtinstagram";
var tokenPrefix = "JWT";

var verifyToken = exports.verifyToken = function verifyToken(token) {
    try {
        var _token$split = token.split(' '),
            _token$split2 = _slicedToArray(_token$split, 2),
            prefix = _token$split2[0],
            receivedToken = _token$split2[1];

        var user = null;

        if (!receivedToken) {
            throw new Error("No se recibió un token");
        }

        if (prefix != tokenPrefix) {
            throw new Error("Formato de header inválido");
        }

        _jsonwebtoken2.default.verify(receivedToken, secret, function (err, payload) {
            if (err) {
                throw new Error("Token inválido");
            } else {
                user = _users2.default.findById(payload.id).exec();
            }
        });

        if (!user) {
            throw new Error("El usuario no existe");
        }

        return user;
    } catch (err) {
        throw new Error("Error inesperado");
    }
};