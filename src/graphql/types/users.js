import {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLObjectType,
    GraphQLBoolean,
    GraphQLNonNull
} from 'graphql';

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
        password: {
            type: GraphQLString
        },
        profile_picture: {
            type: GraphQLString
        }
    })
});

export const UserAdminInputType = new GraphQLInputObjectType({
    name: "AddUsersAdmin",
    description: "Agrega usuarios a la base de datos de Instagram como administrador",
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
        password: {
            type: GraphQLString
        },
        profile_picture: {
            type: GraphQLString
        },
        is_admin: {
            type: GraphQLBoolean
        },
        is_active: {
            type: GraphQLBoolean
        }
    })
});