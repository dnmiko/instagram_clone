'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _followRelation = require('../../../models/followRelation');

var _followRelation2 = _interopRequireDefault(_followRelation);

var _followRelation3 = require('../../types/followRelation');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var deleteFollow = {
    type: _followRelation3.FollowType,
    args: {
        id: {
            name: 'ID',
            type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
        }
    },
    resolve: function resolve(root, params) {
        var follow = _followRelation2.default.findByIdAndRemove(params.id).exec();

        if (follow === null) throw new Error("Error al borrar al usuario");

        return follow;
    }
};

exports.default = deleteFollow;