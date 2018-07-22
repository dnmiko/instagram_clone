import {
    GraphQLNonNull,
    GraphQLID
} from 'graphql';
import Follow from '../../../models/followRelation';
import {
    FollowInputType,
    FollowType
} from '../../types/followRelation';

export default {
    type: FollowType,
    args: {
        id: {
            name: "ID",
            type: new GraphQLNonNull(GraphQLID)
        },
        data: {
            type: new GraphQLNonNull(FollowInputType)
        }
    },
    resolve(root, params) {
        return Follow.findByIdAndUpdate(params.id, {
            $set: { ...params.data
            }
        }).then((follow) => {
            return Follow.findById(params.id).exec();
        }).catch((err) => {
            throw new Error("Error al actualizar a un usuario");
        })
    }
}