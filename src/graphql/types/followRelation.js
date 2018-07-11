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

export const FollowType = new GraphQLObjectType({
    name: "List Follows",
    description: "Lista las relaciones de Follow entre usuarios de la base de datos de Instagram",
    fields: () => ({
        _id: {
            type: GraphQLNonNull(GraphQLID)
        },
        is_active: {
            type: GraphQLBoolean
        },
        the_followed_one: {
            type: UserType,
            resolve(follow) {
                const {
                    the_followed_one
                } = follow;
                return User.findById(the_followed_one).exec();
            }
        },
        the_one_who_follows: {
            type: UserType,
            resolve(follow) {
                const {
                    the_one_who_follows
                } = follow;
                return User.findById(the_one_who_follows).exec();
            }
        },
        created_at: {
            type: GraphQLString
        }
    })
});

export const FollowInputType = new GraphQLInputObjectType({
    name: "AddFollow",
    description: "Crea una relación de follow entre dos usuarios de la base de datos de Instagram",
    fields: () => ({
        the_followed_one: {
            type: GraphQLString
        },
        the_one_who_follows: {
            type: GraphQLString
        }
    })
});