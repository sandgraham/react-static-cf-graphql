'use strict';

require('dotenv').load();

const path = require('path');
const cfGraphql = require('cf-graphql');
const express = require('express');
const cors = require('cors');
const graphqlHTTP = require('express-graphql');

const port = process.env.PORT || 4000;
const spaceId = process.env.SPACE_ID;
const cdaToken = process.env.CDA_TOKEN;
const cmaToken = process.env.CMA_TOKEN;

if (spaceId && cdaToken && cmaToken) {
  console.log('Space ID, CDA token and CMA token provided');
  console.log(`Fetching space (${spaceId}) content types to create a space graph`);

  useProvidedSpace();
} else {
  console.log('Please provide environment variables: SPACE_ID, CDA_TOKEN, CMA_TOKEN')
}

// this function implements a flow you could use in your application:
// 1. fetch content types
// 2. prepare a space graph
// 3. create a schema out of the space graph
// 4. run a server
function useProvidedSpace () {
  const client = cfGraphql.createClient({spaceId, cdaToken, cmaToken});

  client.getContentTypes()
  .then(cfGraphql.prepareSpaceGraph)
  .then(spaceGraph => {
    const names = spaceGraph.map(ct => ct.names.type).join(', ');
    console.log(`Contentful content types prepared: ${names}`);
    return spaceGraph;
  })
  .then(cfGraphql.createSchema)
  .then(schema => startServer(client, schema))
  .catch(fail);
}

function startServer (client, schema) {
  const app = express();
  app.use(cors());

  app.use('/client', express.static(path.join(__dirname, 'dist')));

  const ui = cfGraphql.helpers.graphiql({title: 'plangraphql'});
  app.get('/', (_, res) => res.set(ui.headers).status(ui.statusCode).end(ui.body));

  const opts = {version: false, timeline: false, detailedErrors: false};
  const ext = cfGraphql.helpers.expressGraphqlExtension(client, schema, opts);
  app.use('/graphql', graphqlHTTP(ext));

  app.listen(port);
  console.log('Running a GraphQL server!');
  console.log(`You can access GraphiQL at localhost:${port}`);
  console.log(`You can use the GraphQL endpoint at localhost:${port}/graphql/`);
}

function fail (err) {
  console.log(err);
  process.exit(1);
}