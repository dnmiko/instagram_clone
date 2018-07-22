import {
    GraphQLNonNull,
    GraphQLID
} from 'graphql';
import Like from '../../../models/likes';
import {
    LikeType
} from '../../types/likes';

const deleteLike = {
    type: LikeType,
    args: {
        id: {
            name: 'ID',
            type: GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, params) {
        const like = Like.findByIdAndRemove(params.id).exec();

        if (like === null) throw new Error("Error al borrar al usuario");

        return like;
    }
}

export default deleteLike;