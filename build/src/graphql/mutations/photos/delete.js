'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _photos = require('../../../models/photos');

var _photos2 = _interopRequireDefault(_photos);

var _photos3 = require('../../types/photos');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var deletePhoto = {
    type: _photos3.PhotoType,
    args: {
        id: {
            name: 'ID',
            type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
        }
    },
    resolve: function resolve(root, params) {
        var photo = _photos2.default.findByIdAndRemove(params.id).exec();

        if (photo === null) throw new Error("Error al borrar al usuario");

        return photo;
    }
};

exports.default = deletePhoto;