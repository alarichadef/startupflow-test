import express from 'express';
import Picture from './models/picture';

const app = express();


app.get('/', (req, res) => {
  res.send('Startupflow');
});

app.get('/picture',async (req, res) => {
  try {
    var result = await Picture.find().exec();
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post('/picture', async (req, res) => {
  const picture = await Picture.create({
    datePicture: req.body.date,
    img: req.body.img,
    longitude: req.body.long,
    latitude: req.body.lat
  });
  return res.send(picture);
});


app.listen(3000, () =>
  console.log('App listening on port 3000!'),
);
