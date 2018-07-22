'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _likes = require('../../../models/likes');

var _likes2 = _interopRequireDefault(_likes);

var _likes3 = require('../../types/likes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    type: _likes3.LikeType,
    args: {
        data: {
            //Significa que tiene que venir con todos los valores del tipo UserInputType.
            type: new _graphql.GraphQLNonNull(_likes3.LikeInputType)
        }
    },
    resolve: function resolve(root, params) {
        var like = new _likes2.default(params.data);
        var newLike = like.save();

        if (!newLike) throw new Error("Error al agregar a un nuevo usuario");
        //Me regresa el mismo objeto que le mandé de parámetro, pero con el _id que le corresponde.
        return newLike;
    }
};