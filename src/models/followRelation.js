import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const FollowRelationSchema = new Schema({
    "is_active": {
        type: Boolean,
        default: true
    },
    "the_followed_one": {
        type: Schema.Types.ObjectId,
        ref: "Users"
    },
    "the_one_who_follows": {
        type: Schema.Types.ObjectId,
        ref: "Users"
    },
    "created_at": {
        type: Date,
        default: new Date()
    }
}, {
    collection: "FollowRelation",
    timestamps: true
});

export default mongoose.model('FollowRelation', FollowRelationSchema);