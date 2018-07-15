import {
    GraphQLNonNull,
    GraphQLID
} from 'graphql';

import Follow from '../../../models/followRelation';
import {
    FollowType
} from '../../types/followRelation';

const querySingleFollow = {
    type: FollowType,
    args: {
        id: {
            name: 'ID',
            type: GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, params) {
        const follow = Follow.findById(params.id).exec();
        return follow;
    }
}

export default querySingleFollow;