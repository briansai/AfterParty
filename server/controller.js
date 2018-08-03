const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const socket = require('socket.io');
const request = require('request');
const db = require('./model.js');
const YelpKey = require('../YelpAuthentication.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../client/dist')));

const options = {
  url: 'https://api.yelp.com/v3/businesses/search',
  headers: {
    'Authorization': 'Bearer ' + YelpKey,
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE',
    'Content-Type': '*',
  },
  qs: {
    location: '',
    categories: "bars",
    limit: 50,
  }
}

app.get('/getBusinessList', (req, res) => {
  options.qs.location = req.query.location;
  request(options, (err, response) => {
    if (err) {
      return res.status(404).send(err);
    }

    res.status(200).send(response);
  })
})

app.route('/userInfo')  
  .get((req, res) => {
    db.userInfo(req.query, (err, result) => {
      if (err || result.length === 0) {
        return res.status(404).send(err);
      }
  
      res.status(200).send(result);
    })
  })
  .post((req, res) => {
    db.add(req.body.params, (err, result) => {
      let statusCode = 500;
      if (err) {
        if (err.code === 11000) {
          statusCode = 409;
        }

        return res.status(statusCode).send(err);
      }

      res.status(201).send(result);
    })
  })

  //socket.io

  const server = app.listen(PORT, () => {
    console.log('Listening to port:', PORT);
  })
  
  const io = socket(server);
  
  io.sockets.on('connection', (socket) => {

    socket.on('server_message', function(data){
      io.sockets.emit('client_message', data);
    });
  
    console.log('made socket connection', socket.id);
  });

  io.sockets.on('disconnect', function (socket) {
    socket.emit('user disconnected');
  });