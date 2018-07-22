import {
    GraphQLNonNull,
    GraphQLID
} from 'graphql';
import Follow from '../../../models/followRelation';
import {
    FollowType
} from '../../types/followRelation';

const deleteFollow = {
    type: FollowType,
    args: {
        id: {
            name: 'ID',
            type: GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, params) {
        const follow = Follow.findByIdAndRemove(params.id).exec();

        if (follow === null) throw new Error("Error al borrar al usuario");

        return follow;
    }
}

export default deleteFollow;