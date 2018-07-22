'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FollowInputType = exports.FollowType = undefined;

var _graphql = require('graphql');

var _users = require('../../models/users');

var _users2 = _interopRequireDefault(_users);

var _users3 = require('./users');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FollowType = exports.FollowType = new _graphql.GraphQLObjectType({
    name: "ListFollows",
    description: "Lista las relaciones de Follow entre usuarios de la base de datos de Instagram",
    fields: function fields() {
        return {
            _id: {
                type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
            },
            is_active: {
                type: _graphql.GraphQLBoolean
            },
            the_followed_one: {
                type: _users3.UserType,
                resolve: function resolve(follow) {
                    var the_followed_one = follow.the_followed_one;

                    return _users2.default.findById(the_followed_one).exec();
                }
            },
            the_one_who_follows: {
                type: _users3.UserType,
                resolve: function resolve(follow) {
                    var the_one_who_follows = follow.the_one_who_follows;

                    return _users2.default.findById(the_one_who_follows).exec();
                }
            },
            created_at: {
                type: _graphql.GraphQLString
            }
        };
    }
});

var FollowInputType = exports.FollowInputType = new _graphql.GraphQLInputObjectType({
    name: "AddFollow",
    description: "Crea una relación de follow entre dos usuarios de la base de datos de Instagram",
    fields: function fields() {
        return {
            the_followed_one: {
                type: _graphql.GraphQLString
            },
            the_one_who_follows: {
                type: _graphql.GraphQLString
            }
        };
    }
});