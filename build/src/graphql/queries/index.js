'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _users = require('./users');

var _users2 = _interopRequireDefault(_users);

var _photos = require('./photos');

var _photos2 = _interopRequireDefault(_photos);

var _likes = require('./likes');

var _likes2 = _interopRequireDefault(_likes);

var _follows = require('./follows');

var _follows2 = _interopRequireDefault(_follows);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _extends({}, _users2.default, _photos2.default, _likes2.default, _follows2.default);