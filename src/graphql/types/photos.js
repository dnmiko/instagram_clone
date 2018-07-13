import {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLObjectType,
    GraphQLBoolean,
    GraphQLNonNull
} from 'graphql';

import User from '../../models/users';
import Like from '../../models/likes';

import { UserType } from './users';
import { LikeType } from './likes';

export const Phototype = new GraphQLObjectType({
    name: "ListPhotos",
    description: "Lista de las fotografías dentro de la base de datos de Instagram Clone",
    fields: () => ({
        _id: {
            type: GraphQLNonNull(GraphQLID)
        },
        uploaded_at: {
            type: GraphQLString
        },
        owner: {
            type: UserType,
            resolve(photo) {
                const {
                    owner
                } = like;
                return User.findById(owner).exec();
            }
        },
        description: {
            type: GraphQLString
        },
        location: {
            type: GraphQLString
        },
        url: {
            type: GraphQLString
        },
        likes: {
            type: LikeType,
            resolve(photo) {
                const {
                    _id
                } = like;
                return Like.find({ photo: _id }).exec();
            }
        },
        is_active: {
            type: GraphQLBoolean
        }
    })
});

export const PhotoInputType = new GraphQLInputObjectType({
    name: "AddPhoto",
    description: "Agrega una nueva foto a la base de datos del clone de instagram",
    fields: () => ({
        owner: {
            type: GraphQLString
        },
        description: {
            type: GraphQLString
        },
        location: {
            type: GraphQLString
        },
        url: {
            type: GraphQLString
        }
    })
});