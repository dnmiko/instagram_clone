import {
    UserType
} from '../../types/users';
import {
    GraphQLList
} from 'graphql';

import User from '../../../models/users';

const queryAllUsers = {
    type: new GraphQLList(UserType),
    resolve() {
        const users = User.find().exec();
        if (!users) throw new Error("Error al traer de la bd");
        return users;
    }
}

export default queryAllUsers;