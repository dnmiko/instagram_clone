import User from './users';
import Photos from './photos';
import Likes from './likes';
import Follows from './follows';

export default {
    ...User,
    ...Photos,
    ...Likes,
    ...Follows
}