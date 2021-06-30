const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UsersSchema = new Schema({
  firstname: {
    type : String,
    required : true
  },
  lastname: {
    type : String,
    required : true
  },
  username: {
    type : String,
    required : true
  },
  password: {
    type : String,
    required : true
  },
  mail: {
    type : String,
    required : true
  },
  phone_number: {
    type : String,
    required : true
  },
  city: {
    type : String,
    required : true
  },
  Postal: {
    type : Int16Array,
    required : true
  },
});

const Users = mongoose.model('Users',UsersSchema);

module.exports = Users;