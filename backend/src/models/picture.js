import mongoose from 'mongoose';

const db = () => {
    return mongoose.connect('mongodb://localhost:27017/startupflow');
  };

const pictureSchema = new mongoose.Schema({
    datePicture: {
        type: Date,
    },
    img: { 
        data: Buffer, 
        contentType: String 
    },
    latitude: {
        type: Number
    },
    longitude: {
        type: Number
    }
});

const Picture = mongoose.model('Picture', pictureSchema);

export default Picture;