import {
    GraphQLNonNull,
    GraphQLID
} from 'graphql';
import Photo from '../../../models/photos';
import {
    PhotoType
} from '../../types/photos';

const deletePhoto = {
    type: PhotoType,
    args: {
        id: {
            name: 'ID',
            type: GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, params) {
        const photo = Photo.findByIdAndRemove(params.id).exec();

        if (photo === null) throw new Error("Error al borrar al usuario");

        return photo;
    }
}

export default deletePhoto;