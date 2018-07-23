const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/DrunkMonkey';

mongoose.connect(mongoURI, { useNewUrlParser: true });

const db = mongoose.connection

db.once('open', () => {
  console.log('Connected to Mongo')
}).on('error', () => {
  console.log('Something went wrong with the conenction')
})

const loginSchema = new mongoose.Schema({

  firstName: {
    type: 'string',
    required: true
  },
  lastName: {
    type: 'string',
    required: true
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

const Login = mongoose.model('Login', loginSchema);

module.exports = Login;