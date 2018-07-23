const Login = require('../database/mongoose.js');

module.exports = {
  userInfo: (params, callback) => {
    Login.find({ email: params.email, password: params.password}, (err, result) => {
      if (err) {
        callback(err, null)
      } else {
        callback(null, result);
      }
    })
  },

  add: (params, callback) => {
    const login = new Login(params);
    login.save((err, result) => {
      if (err) {
        callback(err, null)
      } else {
        callback(null, result);
      }
    })
  }
}

