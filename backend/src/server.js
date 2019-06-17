import express from 'express';
import Picture from './models/picture';
import cors from 'cors';
import multer from 'multer';
import fs from 'fs-extra';

const app = express();
const upload = multer({limits: {fileSize: 2000000 },dest:'/uploads/'}) 
app.use(cors());


app.get('/', (req, res) => {
  res.send('Startupflow');
});

app.get('/picture',async (req, res) => {
  try {
    var result = await Picture.find().sort({datePicture: 'desc'}).exec();
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});


app.post('/', upload.single('picture'), async (req, res) => {
  // read te mg file from tmp in-memory location
  var newImg = fs.readFileSync(req.file.path);
  // encode the file as a base64 string.
  var encImg = newImg.toString('base64');
  // define your new document
 let data = {
  datePicture: new Date(),
  img: encImg,
  latitude: req.body.latitude,
  longitude: req.body.longitude
  };
  await  Picture.create(data).then( result => {
    return res.send(result);
  });
});

app.listen(3000, () =>
  console.log('App listening on port 3000!'),
);