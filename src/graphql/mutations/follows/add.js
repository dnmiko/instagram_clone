import {
    GraphQLNonNull
} from 'graphql';
import Follow from '../../../models/followRelation';
import {
    FollowInputType,
    FollowType
} from '../../types/followRelation';

export default {
    type: FollowType,
    args: {
        data: {
            //Significa que tiene que venir con todos los valores del tipo UserInputType.
            type: new GraphQLNonNull(FollowInputType)
        }
    },
    resolve(root, params) {
        const follow = new Follow(params.data);
        const newFollow = follow.save();

        if (!newFollow) throw new Error("Error al agregar a un nuevo usuario");
        //Me regresa el mismo objeto que le mandé de parámetro, pero con el _id que le corresponde.
        return newFollow;
    }
}