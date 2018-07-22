import {
    GraphQLNonNull,
    GraphQLID
} from 'graphql';
import User from '../../../models/users';
import {
    UserType
} from '../../types/users';

const deleteUser = {
    type: UserType,
    args: {
        id: {
            name: 'ID',
            type: GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, params) {
        const user = User.findByIdAndRemove(params.id).exec();

        if (user === null) throw new Error("Error al borrar al usuario");

        return user;
    }
}

export default deleteUser;