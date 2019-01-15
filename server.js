const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    db.collection('stream-gaps').find().toArray((err, result) => {
      if (err) return console.log(err)
      // renders index.ejs
      res.render('index.ejs', {quotes: result})
    })
  })

var db

var connectString = 'xxxxxx';

MongoClient.connect(connectString,{ useNewUrlParser: true }, (err, client) => {
  if (err) return console.log(err)
  db = client.db('rtknet') // whatever your database name is
  app.listen(3000, () => {
    console.log('listening on 3000')
  })
})

