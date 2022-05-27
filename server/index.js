// write header
const express = require('express');
const app = express();
const axios = require('axios');
const path = require('path');
const port = process.env.PORT || 2828;
const config = require('../config.js');

app.use(express.static(path.join(__dirname, '..', 'client')));
app.use(express.json());

// THIS ROUTE WILL INVOKE API CALL FOR ALL MATCHES
app.get('/matches', (req, res) => {
  axios({
      method: "GET",
      url: 'https://kp9yu8gvth.execute-api.us-east-2.amazonaws.com/prod/lm/fixtures',
      headers: {
        'x-api-key': config.Authorization,
        "Content-Type": "application/json",
      }
    })
  .then(matchData => {
    console.log('MATCH DATA RETRIEVED')
    res.status(200).send(matchData.data);
    //.send(matchData.data)
  })
  .catch(err => {
    console.log('ERR RETRIEVING MATCH DATA', err)
  })
})

app.get('/matches', (req, res) => {

});


app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
