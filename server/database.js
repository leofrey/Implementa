const mongoose = require('mongoose');
const URI = 'mongodb://localhost/test';

mongoose.connect(URI)
  .then(db => console.log('DB Conectada'))
  .catch(err => console.log(err));

module.exports = mongoose;