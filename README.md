##### Motivation

Generate a `react-static` website using `cf-graphql` as a local GraphQL endpoint.

##### Set Up

You will need to set three environment variables to authenticate the local GraphQL endpoint with contentful. You can create a `.env` file at the root of the project directory or set the variables yourself. Here is an example `.env`:

```bash
SPACE_ID="some-space-id"
CDA_TOKEN="its-cda-token"
CMA_TOKEN="your-cma-token"
```

Note, `CMA_TOKEN` should be assigned to a personal access token for your space's Content Management API.

##### Develop

`npm install`

`npm run graphql` Starts the local GraphQL server, which needs to be running for data injection. This will also spin up a GraphiQL interface (at default `localhost:4000`) for building your queries.

`npm start` to start a local `react-static` development server.

##### Build

`npm run build` to produce a dist folder containing the static site.