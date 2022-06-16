const express = require('express');
const mongoose = require('mongoose');

const mongoUrl = process.env.MONGO_DB_URL || 'mongodb+srv://asunawesker:yamaha112@scrapping.p01tu.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 3000

module.exports = function () {
  let server = express();
  let create;
  let start;

  create = () => {
    let routes = require('../routes');
    server.set('port', PORT);

    mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
    mongoose.connection;   
    routes.init(server);
  };


  start = () => {
    let port = server.get('port');
    server.listen(port, function () {});
  };
  
  return {
    create: create,
    start: start
  };
};