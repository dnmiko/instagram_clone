import {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLObjectType,
    GraphQLBoolean,
    GraphQLNonNull
} from 'graphql';

import Follow from '../../models/followRelation';
import {
    FollowType
} from './followRelation';

import Photo from '../../models/photos';
import {
    PhotoType
} from './photos';


export const UserType = new GraphQLObjectType({
    name: "ListUsers",
    description: "Lista de los usuarios de la base de datos del clone de Instagram",
    fields: () => ({
        _id: {
            type: GraphQLNonNull(GraphQLID)
        },
        user_name: {
            type: GraphQLString
        },
        name: {
            type: GraphQLString
        },
        last_name: {
            type: GraphQLString
        },
        email: {
            type: GraphQLString
        },
        profile_picture: {
            type: GraphQLString
        },
        created_at: {
            type: GraphQLString
        },
        follows: {
            type: [FollowType],
            resolve(user) {
                const {
                    _id
                } = user;
                return Follow.find({
                    the_one_who_follows: _id
                }).exec();
            }
        },
        followed_by: {
            type: [FollowType],
            resolve(user) {
                const {
                    _id
                } = user;
                return Follow.find({
                    the_followed_one: _id
                }).exec();
            }
        },
        owned_photos: {
            type: [PhotoType],
            resolve(user) {
                const {
                    _id
                } = user;
                return Photo.find({
                    owner: _id
                }).exec();
            }
        },
        is_active: {
            type: GraphQLBoolean,
        },
        is_admin: {
            type: GraphQLBoolean
        }
    })
});

export const UserInputType = new GraphQLInputObjectType({
    name: "AddUsers",
    description: "Agrega usuarios a la base de datos de Instagram",
    fields = () => ({
        user_name: {
            type: GraphQLString
        },
        name: {
            type: GraphQLString
        },
        last_name: {
            type: GraphQLString
        },
        email: {
            type: GraphQLString
        },
        profile_picture: {
            type: GraphQLString
        }
    })
});