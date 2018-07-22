'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _followRelation = require('../../../models/followRelation');

var _followRelation2 = _interopRequireDefault(_followRelation);

var _followRelation3 = require('../../types/followRelation');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    type: _followRelation3.FollowType,
    args: {
        data: {
            //Significa que tiene que venir con todos los valores del tipo UserInputType.
            type: new _graphql.GraphQLNonNull(_followRelation3.FollowInputType)
        }
    },
    resolve: function resolve(root, params) {
        var follow = new _followRelation2.default(params.data);
        var newFollow = follow.save();

        if (!newFollow) throw new Error("Error al agregar a un nuevo usuario");
        //Me regresa el mismo objeto que le mandé de parámetro, pero con el _id que le corresponde.
        return newFollow;
    }
};