# US_Soccer_MatchList


1. Coding environment -->
  - Create a package.json file
  - install the listed packages
  - In terminal, run npm install


2. Server setup -->
  - using express, set up a basic server on localhost:2828
  - use Postman to test server routes
    *NOTE: Don't forget to add authorization in headers with the provided api header and token*


3. API connection -->
  - On server, setup API request. Client will sent a request to server to make API call. This structure prevents secrets from being pushed to GitHub in compiled files.


4. Setup React Environment -->
  - Create a src folder. Within, create index.js file. index.js will be the entrypoint for webpack to render our compiled React components.
  - Configure webpack.config.js to match the specs in this file. This file ensures that webpack is communicating with the correct files, and indicates which filetypes can be compiled.
  - Ensure all files are directed towards index.js or one of its child components. App.jsx is the parent of this component tree, and is imported into index.js & appended to the DOM.


--------------------------------------------------------------------------------------

TO RUN SITE ->
1. In a terminal window, run 'npm start'. This will start the nodemon server.
2. In another terminal window, run 'npm run watch'. This will start the webpack, compiling our jsx files.
1. Navigate to index.html
2. Right click in file & select 'Open in default browser'


TO DEPLOY SITE ->
- OPTION 1: Use an S3 instance to deploy the bundle.js and index.html files.
- OPTION 2: Use an EC2 micro instance to deploy the entire application.
