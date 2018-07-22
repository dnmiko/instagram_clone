import {
    GraphQLNonNull,
    GraphQLID
} from 'graphql';
import Like from '../../../models/likes';
import {
    LikeInputType,
    LikeType
} from '../../types/likes';

export default {
    type: LikeType,
    args: {
        id: {
            name: "ID",
            type: new GraphQLNonNull(GraphQLID)
        },
        data: {
            type: new GraphQLNonNull(LikeInputType)
        }
    },
    resolve(root, params) {
        return Like.findByIdAndUpdate(params.id, {
            $set: { ...params.data
            }
        }).then((like) => {
            return Like.findById(params.id).exec();
        }).catch((err) => {
            throw new Error("Error al actualizar a un usuario");
        })
    }
}