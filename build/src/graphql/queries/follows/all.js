'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _followRelation = require('../../types/followRelation');

var _graphql = require('graphql');

var _followRelation2 = require('../../../models/followRelation');

var _followRelation3 = _interopRequireDefault(_followRelation2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var queryAllFollows = {
    type: new _graphql.GraphQLList(_followRelation.FollowType),
    resolve: function resolve() {
        var follows = _followRelation3.default.find().exec();
        if (!follows) throw new Error("Error al traer de la bd");
        return follows;
    }
};

exports.default = queryAllFollows;