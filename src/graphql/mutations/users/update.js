import {
    GraphQLNonNull,
    GraphQLID
} from 'graphql';
import User from '../../../models/users';
import {
    UserInputType,
    UserType
} from '../../types/users';

export default {
    type: UserType,
    args: {
        id: {
            name: "ID",
            type: new GraphQLNonNull(GraphQLID)
        },
        data: {
            type: new GraphQLNonNull(UserInputType)
        }
    },
    resolve(root, params) {
        return User.findByIdAndUpdate(params.id, {
            $set: { ...params.data
            }
        }).then((user) => {
            return User.findById(params.id).exec();
        }).catch((err) => {
            throw new Error("Error al actualizar a un usuario");
        })
    }
}