# Sample repo for #184

It's a very small `.avdl` file with a singe type, error and message inside. The intent is to create an HTTP endpoint on node which implements the message type in the schema, and have a browser client that can call the method exposed by the service.

## Run it
- `npm run start-server` - Starts the server on http://localhost:5555
- `npm run start-client` - Starts the client using webpack-dev-server on http://locahost:8080
