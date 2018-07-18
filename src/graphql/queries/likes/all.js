import {
    LikeType
} from '../../types/likes';
import {
    GraphQLList
} from 'graphql';

import Like from '../../../models/likes';

const queryAllLikes = {
    type: new GraphQLList(LikeType),
    resolve() {
        const likes = Like.find().exec();
        if (!likes) throw new Error("Error al traer de la bd");
        return likes;
    }
}

export default queryAllLikes;