import UserMutations from './users';
import PhotoMutations from './photos';
import LikeMutations from './likes';
import FollowMutations from './follows';

export default {
    ...UserMutations,
    ...PhotoMutations,
    ...LikeMutations,
    ...FollowMutations
}