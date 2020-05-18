const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());

mongoose
  .connect('mongodb://db:27017/crud-node-mongo-docker', {
    useNewUrlParser: true
  })
  .then(result => {
    console.log('MongoDB Conectado');
  })
  .catch(error => {
    console.log(error);
  });

var UrlSchema = new mongoose.Schema({
  url: {
    type: String,
    unique: true,
    required: true
  },
  hash: {
    type: String,
    unique: true,
    required: true
  }
});

var Url = mongoose.model('Url', UrlSchema);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/:hash', function (req, res) {
  Url.find({ hash: req.params.hash }, function (err, urls) {
    if (err) return console.error(err);
    res.redirect(urls[0].url)
  });
});

app.post('/', function (req, res) {
  let request = req.query;
  let hash = Math.random().toString(36).substring(2, 6)
    + Math.random().toString(36).substring(2, 6);
  const novaUrl = new Url({
    url: request.url,
    hash: hash
  });

  novaUrl
    .save()
    .then(result => {
      res.json(result);
    })
    .catch(error => {
      Url.find({ url: request.url }, function (err, urls) {
        if (err) return console.error(err);
        //res.status(500).json(error);
        res.status(500).json(urls);
      });
    });



});

app.listen(9000, () => console.log('Server ativo na porta 9000'));