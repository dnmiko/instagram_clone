import {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLObjectType,
    GraphQLBoolean,
    GraphQLNonNull
} from 'graphql';

import User from '../../models/users';
import {
    UserType
} from './users';

export const PhotoType = new GraphQLObjectType({
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

export const PhotoAdminInputType = new GraphQLInputObjectType({
    name: "AddPhotoAdmin",
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
        },
        is_active: {
            type: GraphQLBoolean
        }
    })
});