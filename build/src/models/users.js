'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _mongooseUniqueValidator = require('mongoose-unique-validator');

var _mongooseUniqueValidator2 = _interopRequireDefault(_mongooseUniqueValidator);

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SALT_WORK_FACTOR = 10;
var Schema = _mongoose2.default.Schema;

var UserSchema = new Schema({
    "user_name": {
        type: String,
        required: true,
        unique: true
    },
    "name": {
        type: String,
        required: true
    },
    "last_name": {
        type: String
    },
    "email": {
        type: String,
        required: true,
        unique: true
    },
    "password": {
        type: String,
        required: true
    },
    "profile_picture": {
        type: String,
        default: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png"
    },
    "created_at": {
        type: Number,
        default: new Date()
    },
    "is_active": {
        type: Boolean,
        default: true
    },
    "is_admin": {
        type: Boolean,
        default: false
    }
}, {
    //Nombre de la colección.
    collection: "Users",
    //Guarda un timestamp cada vez que un objeto de esta colección es actualizado.
    timestamps: true
});

//Hacemos referencia al plugin de unique validator para que sólo se permitan registros únicos.
UserSchema.plugin(_mongooseUniqueValidator2.default);

//Trigger de pre-save para encriptar la URL en la base de datos.
UserSchema.pre('save', function (next) {
    var user = this;

    //Si el usuario no fue modificado no hago ningún hasheo ni nada.
    if (!user.isModified('password')) return next();

    //Genera una semilla para hashear.
    _bcrypt2.default.genSalt(SALT_WORK_FACTOR, function (err, salt) {
        if (err) return next(err);

        //Hashea.
        _bcrypt2.default.hash(user.password, salt, function (err, hash) {
            if (err) return next(err);

            user.password = hash;
            next();
        });
    });
});

UserSchema.methods.comparePassword = function (candidatePassword, cb) {
    //Por seguridad, hasheamos la contraseña con la que intentan entrar contra el hash de la DB.
    //Nunca deshasheamos el hash guardado en la DB, es inseguro.
    _bcrypt2.default.compare(candidatePassword, this.password, function (err, isMatch) {
        cb(null, isMatch);
    });
};

exports.default = _mongoose2.default.model('Users', UserSchema);