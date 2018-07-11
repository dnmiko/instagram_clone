import mongoose from 'mongoose';
import mongooseValidator from 'mongoose-unique-validator'
import bcrypt from 'bcrypt';

const SALT_WORK_FACTOR = 10;
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    "user_name": {
        type: String,
        required: true
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
    "follows": [{
        type: Schema.Types.ObjectId,
        ref: "followRelation"
    }],
    "followed_by": [{
        type: Schema.Types.ObjectId,
        ref: "followRelation"
    }],
    "owned_photos": [{
        type: Schema.Types.ObjectId,
        ref: "Photos"
    }],
    "is_active": {
        type: Boolean,
        default: true
    },
    "is_admin": {
        type: Boolean,
        default: false
    },
}, {
    //Nombre de la colección.
    collection: "Users",
    //Guarda un timestamp cada vez que un objeto de esta colección es actualizado.
    timestamps: true
});

//Hacemos referencia al plugin de unique validator para que sólo se permitan registros únicos.
UserSchema.plugin(mongooseValidator);

//Trigger de pre-save para encriptar la URL en la base de datos.
UserSchema.pre('save', function(next) {
    let user = this;

    //Si el usuario no fue modificado no hago ningún hasheo ni nada.
    if (!user.isModified('password')) return next();

    //Genera una semilla para hashear.
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        //Hashea.
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);

            user.password = hash;
            next();
        });
    });
});

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
    //Por seguridad, hasheamos la contraseña con la que intentan entrar contra el hash de la DB.
    //Nunca deshasheamos el hash guardado en la DB, es inseguro.
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        cb(null, isMatch);
    });
};

export default mongoose.model('Users', UserSchema);