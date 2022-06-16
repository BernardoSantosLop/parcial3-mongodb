const graphqlHTTP = require('express-graphql');
const schemas = require('../champion/championSchema');
const cors = require('cors');
const root = require('../services');
const expressPlayground = require("graphql-playground-middleware-express").default;

const corsOptions = {
  "origin": process.env.WHITELIST,
  "methods": "GET",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}

const init = (server) => {
  server.use('/api/graph', cors(corsOptions), graphqlHTTP.graphqlHTTP({
    schema: schemas,
    rootValue: root,
    graphiql: true
  }))
  server.get('/api/graph', expressPlayground({ endpoint: '/api/graph' }));
}

module.exports = {
    init: init
};