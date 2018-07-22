'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _graphql = require('graphql');

var _likes = require('../../../models/likes');

var _likes2 = _interopRequireDefault(_likes);

var _likes3 = require('../../types/likes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    type: _likes3.LikeType,
    args: {
        id: {
            name: "ID",
            type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
        },
        data: {
            type: new _graphql.GraphQLNonNull(_likes3.LikeInputType)
        }
    },
    resolve: function resolve(root, params) {
        return _likes2.default.findByIdAndUpdate(params.id, {
            $set: _extends({}, params.data)
        }).then(function (like) {
            return _likes2.default.findById(params.id).exec();
        }).catch(function (err) {
            throw new Error("Error al actualizar a un usuario");
        });
    }
};