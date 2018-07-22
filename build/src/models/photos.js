"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var PhotoSchema = new Schema({
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
        type: String
    },
    "location": {
        type: String
    },
    "url": {
        type: String,
        required: true
    },
    "is_active": {
        type: Boolean,
        default: true
    }
}, {
    collection: "Photos",
    timestamps: true
});

exports.default = _mongoose2.default.model("Photos", PhotoSchema);