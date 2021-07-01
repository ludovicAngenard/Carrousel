
const mongoose = require('mongoose');

bcrypt = require('bcrypt'),
Schema = mongoose.Schema;

const UsersSchema = new Schema({
  username: {
    type : String,
    required : true
  },
  password: {
    type : String,
    required : true
  },
  role:{
    type: String,
    required : true
  }
});

UsersSchema.methods.comparePassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};
UsersSchema.methods.compareUsername = function(username) {
  if( username == this.username){
    return true;
  }
};


const Users = mongoose.model('Users',UsersSchema);

module.exports = Users;