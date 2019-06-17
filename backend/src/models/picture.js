import mongoose from 'mongoose';

const db = mongoose.connect('mongodb://127.0.0.1/test', {useNewUrlParser: true});
  

const pictureSchema = new mongoose.Schema({
    datePicture: {
        type: Date,
    },
    img: { 
        type: Buffer, 
       // contentType: String 
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