import {
    PhotoType
} from '../../types/photos';
import {
    GraphQLList
} from 'graphql';

import Photo from '../../../models/photos';

const queryAllPhotos = {
    type: new GraphQLList(PhotoType),
    resolve() {
        const photos = Photo.find().exec();
        if (!photos) throw new Error("Error al traer de la bd");
        return photos;
    }
}

export default queryAllPhotos;