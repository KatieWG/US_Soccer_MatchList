// write header
const express = require('express');
const app = express();
const axios = require('axios');
const path = require('path');
const port = process.env.PORT || 2828;
// const { API CALL HERE } = require('../controller.js')

app.use(express.static(path.join(__dirname, '..', 'client')));
app.use(express.json());

// THIS ROUTE WILL INVOKE API CALL FOR ALL MATCHES
app.get('/', (req, res) => {
  // API CALL HERE ()
  // .then(matchData => {
  //   console.log('MATCH DATA RETRIEVED')
  //   res.status(200).send(matchData)
  // })
  // .catch(err => {
  //   console.log('ERR RETRIEVING MATCH DATA', err)
  // })
  res.send(console.log('IN MATCHES ROUTE'));
})

// THIS ROUTE WILL INVOKE API CALL FOR ONE MATCH
// app.get('/match/:game_id', (req, res) => {
  // API CALL HERE (req.params.game_id)
  // .then(matchData => {
  //   console.log('MATCH DATA RETRIEVED')
  //   res.status(200).send(matchData)
  // })
  // .catch(err => {
  //   console.log('ERR RETRIEVING MATCH DATA', err)
  // })
//   console.log('IN 1 MATCH ROUTE')
// })


app.listen(port, () => {
  console.log(`The app server is running on port: ${port}!`);
})

