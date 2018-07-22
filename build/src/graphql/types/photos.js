'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PhotoInputType = exports.PhotoType = undefined;

var _graphql = require('graphql');

var _users = require('../../models/users');

var _users2 = _interopRequireDefault(_users);

var _users3 = require('./users');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PhotoType = exports.PhotoType = new _graphql.GraphQLObjectType({
    name: "ListPhotos",
    description: "Lista de las fotografías dentro de la base de datos de Instagram Clone",
    fields: function fields() {
        return {
            _id: {
                type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
            },
            uploaded_at: {
                type: _graphql.GraphQLString
            },
            owner: {
                type: _users3.UserType,
                resolve: function resolve(photo) {
                    var owner = photo.owner;

                    return _users2.default.findById(owner).exec();
                }
            },
            description: {
                type: _graphql.GraphQLString
            },
            location: {
                type: _graphql.GraphQLString
            },
            url: {
                type: _graphql.GraphQLString
            },
            is_active: {
                type: _graphql.GraphQLBoolean
            }
        };
    }
});

var PhotoInputType = exports.PhotoInputType = new _graphql.GraphQLInputObjectType({
    name: "AddPhoto",
    description: "Agrega una nueva foto a la base de datos del clone de instagram",
    fields: function fields() {
        return {
            owner: {
                type: _graphql.GraphQLString
            },
            description: {
                type: _graphql.GraphQLString
            },
            location: {
                type: _graphql.GraphQLString
            },
            url: {
                type: _graphql.GraphQLString
            }
        };
    }
});