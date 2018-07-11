import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const PhotoSchema = new Schema({
    "uploaded_at": {
        type: Date,
        default: new Date()
    },
    "owner": {
        type: Schema.Types.ObjectId,
        ref: "Users",
        required: true
    },
    "description": {
        type: String,
    },
    "location": {
        type: String
    },
    "url": {
        type: String,
        required: true
    },
    "likes": [{
        type: Schema.Types.ObjectId,
        ref: 'Likes'
    }],
    "is_active": {
        type: Boolean,
        default: true
    }
}, {
    collection: "Photos",
    timestamps: true
});

export default mongoose.model("Photos", PhotoSchema);