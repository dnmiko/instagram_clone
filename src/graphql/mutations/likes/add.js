import {
    GraphQLNonNull
} from 'graphql';
import Like from '../../../models/likes';
import {
    LikeInputType,
    LikeType
} from '../../types/likes';

export default {
    type: LikeType,
    args: {
        data: {
            //Significa que tiene que venir con todos los valores del tipo UserInputType.
            type: new GraphQLNonNull(LikeInputType)
        }
    },
    resolve(root, params) {
        const like = new Like(params.data);
        const newLike = like.save();

        if (!newLike) throw new Error("Error al agregar a un nuevo usuario");
        //Me regresa el mismo objeto que le mandé de parámetro, pero con el _id que le corresponde.
        return newLike;
    }
}