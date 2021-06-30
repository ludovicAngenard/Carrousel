const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PhotoSchema = new Schema({
  link: {
    type: String,
    required : true
  },
});

const Photo = mongoose.model('Photo',PhotoSchema);

module.exports = Photo;