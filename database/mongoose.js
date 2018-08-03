const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/DrunkMonkey';

mongoose.connect(mongoURI, { useNewUrlParser: true });

const db = mongoose.connection

db.once('open', () => {
  console.log('Connected to Mongo')
}).on('error', () => {
  console.log('Something went wrong with the conenction')
})

const userInfoSchema = new mongoose.Schema({
  firstName: {
    type: 'string',
    required: true
  },
  lastName: {
    type: 'string',
    required: true
  },
  handle: {
    type: 'string',
    required: true,
    unique: true
  },
  email: {
    type: 'string',
    required: true,
    unique: true
  },
  password: {
    type: 'string',
    required: true
  },
  avatar: 'string',
  description: 'string',
});

const UserInfo = mongoose.model('UserInfo', userInfoSchema);

module.exports = UserInfo;