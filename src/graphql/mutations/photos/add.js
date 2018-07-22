import {
    GraphQLNonNull
} from 'graphql';
import Photo from '../../../models/photos';
import {
    PhotoInputType,
    PhotoType
} from '../../types/photos';

export default {
    type: PhotoType,
    args: {
        data: {
            //Significa que tiene que venir con todos los valores del tipo UserInputType.
            type: new GraphQLNonNull(PhotoInputType)
        }
    },
    resolve(root, params) {
        const photo = new Photo(params.data);
        const newPhoto = photo.save();

        if (!newPhoto) throw new Error("Error al agregar a un nuevo usuario");
        //Me regresa el mismo objeto que le mandé de parámetro, pero con el _id que le corresponde.
        return newPhoto;
    }
}