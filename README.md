# US_Soccer_MatchList

1. Coding environment -->
  - Create a package.json file
  - install the listed packages
  - In terminal, run npm install

2. Server setup -->
  - using express, set up a basic server on localhost:3000
  - use Postman to test server routes
    *NOTE: Don't forget to add authorization in headers with the provided api header and token*

3. API connection -->
  - On server, setup API request. Client will sent a request to server to make API call. This structure prevents secrets from being pushed to GitHub in compiled files.

4. Setup React Environment -->
  - Create a src folder. Within, create index.js file. index.js will be the entrypoint for webpack to render our compiled React components.
  - Configure webpack.config.js to match the specs in this file. This file ensures that webpack is communicating with the correct files, and indicates which filetypes can be compiled.