import {
    GraphQLNonNull,
    GraphQLID
} from 'graphql';

import Like from '../../../models/likes';
import {
    LikeType
} from '../../types/likes';

const querySingleLike = {
    type: LikeType,
    args: {
        id: {
            name: 'ID',
            type: GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, params) {
        const like = Like.findById(params.id).exec();
        return like;
    }
}

export default querySingleLike;