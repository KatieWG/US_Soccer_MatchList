// import React, { useState, useEffect } from "react";
import * as React from 'react';
import axios from "axios";
import MatchList from "./MatchList.jsx";
import styled from "styled-components";
// import config from '../../config.js';

const NavBar = styled.span`
  height: 50px;
  overflow: hidden;
  background-color: grey;
  position: fixed;
  top: 0;
  width: 100%;
  margin-left: 0%;
  box-shadow: 0 4px 4px -2px gray;
`;

  // height: 50px;
  // background-color: grey;
  // standard-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  // display: flex;
  // justify-content: space-evenly;
  // align-items: center;
  // margin:0;
  // padding:0;

const App = () => {
  const [matches, setMatches] = React.useState([]);
  const [match, setMatch] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  //REQUESTS DATA FROM SERVER, WHERE OUR API CALL LIVES
  const getMatches = () => {
    axios.get('/matches')
    .then(matchesData => {
      setMatches(matchesData.data);
      setLoading(false);
    })
    .catch(err => {
      console.log('ERR GETTING MATCHES:', err);
    })
  }

   // ADDS API DATA TO CACHE, PREVENTING AN API CALL ON EVERY REFRESH
   const addDataIntoCache = (cacheName, url, response) => {
    // Converting our response into Actual Response form
    const data = new Response(JSON.stringify(response));
    if ('caches' in window) {
      // Opening given cache and putting our data into it
      caches.open(cacheName)
      .then((cache) => {
        cache.put(url, data);
        alert('Data Added into cache!')
      })
      .catch(() => {
        console.log('unable to cache')
      });
    }
  };

  //ON PAGE LOAD, useEffect WILL RUN
  React.useEffect(() => {
    getMatches();
    // setTimeout(() => {
    //   addDataIntoCache('MyCache',
    //   'https://localhost:2828', matches)
    //   console.log("Delayed for 5 seconds.");
    // }, "5000")
  }, []);

  return (
    <div>
    <NavBar/>
    {loading ? <div>Loading...</div> : <MatchList matchData={matches}/>}
    {/* <button onClick={()=>addDataIntoCache('MyCache',
      'https://localhost:2828', 200)} >
        Add Data Into Cache</button> */}
    </div>
  )
}

export default App;



