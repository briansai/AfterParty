const UserInfo = require('../database/mongoose.js');

module.exports = {
  userInfo: (params, callback) => {
    UserInfo.find({ email: params.email, password: params.password}, (err, result) => {
      if (err) {
        callback(err, null)
      } else {
        callback(null, result);
      }
    })
  },

  add: (params, callback) => {
    const userInfo = new UserInfo(params);
    userInfo.save((err, result) => {
      if (err) {
        callback(err, null)
      } else {
        callback(null, result);
      }
    })
  }
}

