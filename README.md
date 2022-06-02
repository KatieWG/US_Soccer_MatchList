# US_Soccer_MatchList

## Walkthrough

   The MatchList page dynamically renders a list of matches in order of most recent, including information on the matches such as the competition name, dates, and team crests. 

   The MatchList page also supports filtering by user search input. User can search by team name and/or match date. 

   The Match page renders when the user clicks on a specific match in MatchList. It includes basic match info at the top of the page, supports a back button to reroute users back to the MatchList page, and displays player stats in a data table for each team including xg, xa, and avg xg/xa. 


https://user-images.githubusercontent.com/86626323/171543560-8cd41e92-b67f-4f34-bf1c-ff1aecfebff5.mp4


--------------------------------------------------------------------------------------

## Setup

1. Coding environment -->
    - Create a package.json file
    - install the listed packages
    - In terminal, run npm install


2. Server -->
    - using express, set up a basic server on localhost:2828
    - use Postman to test server routes
    *NOTE: Don't forget to add authorization in headers with the provided api header and token*


3. API connection -->
    - On server, setup API request. Client will sent a request to server to make API call. This structure prevents secrets from being pushed to GitHub in compiled files.


4. React Environment -->
    - Create a src folder. Within, create index.js file. index.js will be the entrypoint for webpack to render our compiled React components.
    - Configure webpack.config.js to match the specs in this file. This file ensures that webpack is communicating with the correct files, and indicates which filetypes can be compiled.
    - Ensure all files are directed towards index.js or one of its child components. App.jsx is the parent of this component tree, and is imported into index.js & appended to the DOM.


--------------------------------------------------------------------------------------

TO RUN SITE -->
  1. In a terminal window, run 'npm start'. This will start the nodemon server.
  2. In another terminal window, run 'npm run watch'. This will start the webpack, compiling our jsx files.
  3. Navigate to index.html
  4. Right click in file & select 'Open in default browser'

TO DEPLOY SITE -->
      <br/>
      (OPTION 1) Use an S3 instance to deploy the bundle.js and index.html files.
      <br/>
      (OPTION 2) Use an EC2 micro instance to deploy the entire application.
