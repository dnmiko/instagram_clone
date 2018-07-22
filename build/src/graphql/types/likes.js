'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LikeInputType = exports.LikeType = undefined;

var _graphql = require('graphql');

var _photos = require('../../models/photos');

var _photos2 = _interopRequireDefault(_photos);

var _users = require('../../models/users');

var _users2 = _interopRequireDefault(_users);

var _photos3 = require('./photos');

var _users3 = require('./users');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LikeType = exports.LikeType = new _graphql.GraphQLObjectType({
    name: "ListLikes",
    description: "Lista de los likes a las fotos de la base de datos del clone de instagram.",
    fields: function fields() {
        return {
            _id: {
                type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
            },
            is_active: {
                type: _graphql.GraphQLBoolean
            },
            photo: {
                type: _photos3.PhotoType,
                resolve: function resolve(like) {
                    var photo = like.photo;

                    return _photos2.default.findById(photo).exec();
                }
            },
            the_one_who_liked_it: {
                type: _users3.UserType,
                resolve: function resolve(like) {
                    var the_one_who_liked_it = like.the_one_who_liked_it;

                    return _users2.default.findById(the_one_who_liked_it).exec();
                }
            },
            created_at: {
                type: _graphql.GraphQLString
            }
        };
    }
});

var LikeInputType = exports.LikeInputType = new _graphql.GraphQLInputObjectType({
    name: "AddLike",
    description: "Agrega una nueva relación de like a la base de datos de instagram.",
    fields: function fields() {
        return {
            photo: {
                type: _graphql.GraphQLString
            },
            the_one_who_liked_it: {
                type: _graphql.GraphQLString
            }
        };
    }
});