'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _likes = require('../../types/likes');

var _graphql = require('graphql');

var _likes2 = require('../../../models/likes');

var _likes3 = _interopRequireDefault(_likes2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var queryAllLikes = {
    type: new _graphql.GraphQLList(_likes.LikeType),
    resolve: function resolve() {
        var likes = _likes3.default.find().exec();
        if (!likes) throw new Error("Error al traer de la bd");
        return likes;
    }
};

exports.default = queryAllLikes;