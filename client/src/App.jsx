// import React, { useState, useEffect } from "react";
import * as React from 'react';
import axios from "axios";
import MatchList from "./MatchList.jsx";
import Search from "./Search.jsx";
import styled from "styled-components";
// import config from '../../config.js';

const StyledDiv = styled.div`
  font-family: helvetica neue;
`;


const NavBar = styled.span`
  height: 65px;
  overflow: hidden;
  background-color: maroon;
  position: fixed;
  top: 0;
  width: 100%;
  margin-left: 0%;
  box-shadow: 0 4px 4px -2px gray;
  font-family: helvetica neue;
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
  const [filteredMatches, setFilteredMatches] = React.useState(matches);
  const [match, setMatch] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  //REQUESTS DATA FROM SERVER, WHERE OUR API CALL LIVES
  const getMatches = () => {
    axios.get('/matches')
    .then(matchesData => {
      setMatches(matchesData.data);
      setFilteredMatches(matchesData.data);
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
      })
      .catch(() => {
        console.log('unable to cache')
      });
    }
  };

  //SEARCHES BY DATE RANGE AND TEAM NAME
  const onSearchKeystroke = (e) => {
    e.preventDefault();
    var userSearch = e.target.value;
    var results = [];
    console.log(userSearch)

    if (userSearch.length) {
      //filters match NAME and DATE by user search
      matches.map((matchObj) => {
        let lowercaseMatchname = matchObj.fixture.toLowerCase();
        let matchDate = matchObj.game_date;
        if (lowercaseMatchname.includes(userSearch) || matchDate.includes(userSearch)) {
          results.push(matchObj);
        }
      })
      //filteredMatches includes only filtered results
      setFilteredMatches(results);
    } else {
      //filteredMatches include ALL match data
      setFilteredMatches(matches);
    }
  };


  //ON PAGE LOAD, useEffect WILL RUN
  React.useEffect(() => {
    getMatches();
    setTimeout(() => {
      addDataIntoCache('MatchCache',
      'https://localhost:2828', matches)
      console.log("Cache delayed for 2 seconds.");
    }, "2000")
  }, []);

  return (
    <StyledDiv>
    <NavBar>
      <Search onSearchKeystroke={onSearchKeystroke}/>
    </NavBar>
    {loading ? <div>Loading...</div> : <MatchList matchData={filteredMatches}/>}
    </StyledDiv>
  )
}

export default App;



