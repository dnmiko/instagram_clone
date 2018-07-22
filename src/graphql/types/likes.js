import {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLObjectType,
    GraphQLBoolean,
    GraphQLNonNull
} from 'graphql';

import Photo from '../../models/photos';
import User from '../../models/users';

import {
    PhotoType
} from './photos';
import {
    UserType
} from './users';

export const LikeType = new GraphQLObjectType({
    name: "ListLikes",
    description: "Lista de los likes a las fotos de la base de datos del clone de instagram.",
    fields: () => ({
        _id: {
            type: GraphQLNonNull(GraphQLID)
        },
        is_active: {
            type: GraphQLBoolean
        },
        photo: {
            type: PhotoType,
            resolve(like) {
                const {
                    photo
                } = like;
                return Photo.findById(photo).exec();
            }
        },
        the_one_who_liked_it: {
            type: UserType,
            resolve(like) {
                const {
                    the_one_who_liked_it
                } = like;
                return User.findById(the_one_who_liked_it).exec();
            }
        },
        created_at: {
            type: GraphQLString
        }
    })
});

export const LikeInputType = new GraphQLInputObjectType({
    name: "AddLike",
    description: "Agrega una nueva relación de like a la base de datos de instagram.",
    fields: () => ({
        photo: {
            type: GraphQLString
        },
        the_one_who_liked_it: {
            type: GraphQLString
        }
    })
});