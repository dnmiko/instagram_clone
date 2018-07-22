"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var FollowRelationSchema = new Schema({
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

exports.default = _mongoose2.default.model('FollowRelation', FollowRelationSchema);