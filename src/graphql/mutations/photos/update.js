import {
    GraphQLNonNull,
    GraphQLID
} from 'graphql';
import Photo from '../../../models/photos';
import {
    PhotoInputType,
    PhotoType
} from '../../types/photos';

export default {
    type: PhotoType,
    args: {
        id: {
            name: "ID",
            type: new GraphQLNonNull(GraphQLID)
        },
        data: {
            type: new GraphQLNonNull(PhotoInputType)
        }
    },
    resolve(root, params) {
        return Photo.findByIdAndUpdate(params.id, {
            $set: { ...params.data
            }
        }).then((user) => {
            return Photo.findById(params.id).exec();
        }).catch((err) => {
            throw new Error("Error al actualizar a un usuario");
        })
    }
}