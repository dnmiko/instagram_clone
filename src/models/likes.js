import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const LikesSchema = new Schema({
    "is_active": {
        type: Boolean,
        default: true
    },
    "photo": {
        type: Schema.Types.ObjectId,
        ref: "Photos"
    },
    "the_one_who_liked_it": {
        type: Schema.Types.ObjectId,
        ref: "Users"
    },
    "created_at": {
        type: Date,
        default: new Date()
    }
}, {
    collection: "Likes",
    timestamps: true
});

export default mongoose.model("Likes", LikesSchema);