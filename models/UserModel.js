const mongoose = require('mongoose');

let schema = mongoose.Schema({
  login: { type: String, required: true },
  hash: { type: String, required: true },
  salt: { type: String, required: true },
  email: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  active: { type: Boolean, default: true },
  includeDate: { type: Date, default: new Date() },
});

const UsersModel = mongoose.model('users', schema);

module.exports = UsersModel;
