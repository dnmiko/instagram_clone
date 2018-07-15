import {
    FollowType
} from '../../types/followRelation';
import {
    GraphQLList
} from 'graphql';

import Follow from '../../../models/followRelation';

const queryAllFollows = {
    type: new GraphQLList(FollowType),
    resolve() {
        const follows = Follow.find().exec();
        if (!follows) throw new Error("Error al traer de la bd");
        return follows;
    }
}

export default queryAllFollows;