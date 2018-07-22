"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var LikesSchema = new Schema({
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

exports.default = _mongoose2.default.model("Likes", LikesSchema);