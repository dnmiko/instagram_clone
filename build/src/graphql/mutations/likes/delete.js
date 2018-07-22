'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _likes = require('../../../models/likes');

var _likes2 = _interopRequireDefault(_likes);

var _likes3 = require('../../types/likes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var deleteLike = {
    type: _likes3.LikeType,
    args: {
        id: {
            name: 'ID',
            type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
        }
    },
    resolve: function resolve(root, params) {
        var like = _likes2.default.findByIdAndRemove(params.id).exec();

        if (like === null) throw new Error("Error al borrar al usuario");

        return like;
    }
};

exports.default = deleteLike;