'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _users = require('../../types/users');

var _graphql = require('graphql');

var _users2 = require('../../../models/users');

var _users3 = _interopRequireDefault(_users2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var queryAllUsers = {
    type: new _graphql.GraphQLList(_users.UserType),
    resolve: function resolve() {
        var users = _users3.default.find().exec();
        if (!users) throw new Error("Error al traer de la bd");
        return users;
    }
};

exports.default = queryAllUsers;