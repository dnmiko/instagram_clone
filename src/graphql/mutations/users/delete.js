import {
    GraphQLNonNull,
    GraphQLID
} from 'graphql';
import User from '../../../models/users';
<<<<<<< HEAD
import {
    UserType
} from '../../types/users';
=======
import { UserType } from '../../types/users';
>>>>>>> e0ce78ddfd74820a146a9130f70195088ed33fc4

export default {
    type: UserType,
    args: {
        id: {
            name: "ID",
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolver(root, params) {
        const deletedUser = User.findByIdAndRemove(params.id).exec();

        if (!deletedUser) throw new Error("Error al borrar al usuario");

        return deletedUser;
    }
}