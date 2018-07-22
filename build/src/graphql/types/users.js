"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UserInputType = exports.UserType = undefined;

var _graphql = require("graphql");

var UserType = exports.UserType = new _graphql.GraphQLObjectType({
    name: "ListUsers",
    description: "Lista de los usuarios de la base de datos del clone de Instagram",
    fields: function fields() {
        return {
            _id: {
                type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
            },
            user_name: {
                type: _graphql.GraphQLString
            },
            name: {
                type: _graphql.GraphQLString
            },
            last_name: {
                type: _graphql.GraphQLString
            },
            email: {
                type: _graphql.GraphQLString
            },
            profile_picture: {
                type: _graphql.GraphQLString
            },
            created_at: {
                type: _graphql.GraphQLString
            },
            is_active: {
                type: _graphql.GraphQLBoolean
            },
            is_admin: {
                type: _graphql.GraphQLBoolean
            }
        };
    }
});

var UserInputType = exports.UserInputType = new _graphql.GraphQLInputObjectType({
    name: "AddUsers",
    description: "Agrega usuarios a la base de datos de Instagram",
    fields: function fields() {
        return {
            user_name: {
                type: _graphql.GraphQLString
            },
            name: {
                type: _graphql.GraphQLString
            },
            last_name: {
                type: _graphql.GraphQLString
            },
            email: {
                type: _graphql.GraphQLString
            },
            password: {
                type: _graphql.GraphQLString
            },
            profile_picture: {
                type: _graphql.GraphQLString
            }
        };
    }
});