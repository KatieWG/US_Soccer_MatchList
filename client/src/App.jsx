// import React, { useState, useEffect } from "react";
import * as React from 'react';
import axios from "axios";
import MatchList from "./MatchList.jsx";
import MatchStats from "./MatchStats.jsx";
import Search from "./Search.jsx";
import styled from "styled-components";
import logo from "./usSoccerLogo.png";
// import config from '../../config.js';

const StyledDiv = styled.div`
  font-family: helvetica neue;
`;

const NavBar = styled.span`
  height: 95px;
  background-color: #c62034;
  position: fixed;
  top: 0;
  width: 100%;
  margin-left: -8px;
  box-shadow: 0 4px 4px -2px gray;
  font-family: helvetica neue;
  display: flex;
`;


const StyledImg = styled.img`
  height: 70px;
  margin: 15px 15px 15px 15px;
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
  const [playerData, setPlayerData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [homepage, setHomepage] = React.useState(true);

  //REQUESTS DATA FROM SERVER, WHERE OUR API CALL LIVES
  const getMatches = () => {
    axios.get('/matches')
    .then(matchesData => {
      setMatches(matchesData.data);
      setFilteredMatches(matchesData.data);
      setLoading(false);
    })
    .catch(err => {
      console.log('ERR GETTING MATCHES:');
    })

    console.log('invoked getmatches')
  }

  const getMatch = (opta_game_id) => {
    axios.get(`/match/${opta_game_id}`)
    .then(playerStats => {
      setPlayerData(playerStats.data);
      setLoading(false);
    })
    .catch(err => {
      console.log('ERR GETTING MATCH:', err);
    })

    console.log('invoked getmatch')
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
  //FOR FUTURE VERSIONS: add a debounce feature here to improve time complexity
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

  //WHEN USER CLICKS A MATCH FROM THE LIST, STATE WILL TOGGLE ON App.jsx TO RENDER EITHER MATCHLIST OR MATCHSTATS
  const onPageChange = (data = []) => {
    setHomepage(!homepage)
    setMatch(data)
    console.log('match data in ONPAGECHANGE:', data.game_id)
    if (homepage) {
      getMatch(data.game_id);
    }
  }


  //ON PAGE LOAD, useEffect WILL RUN
  React.useEffect(() => {
    if (homepage) {
      getMatches();
    }

    // setTimeout(() => {
    //   addDataIntoCache('MatchCache',
    //   'https://localhost:2828', matches)
    //   console.log("Cache delayed for 2 seconds.");
    // }, "2000")
  }, []);

  return (
    <StyledDiv>
    {loading ?
      <div>
        <NavBar>
          <StyledImg src={logo} alt="Logo"/>
          <Search onSearchKeystroke={onSearchKeystroke}/>
        </NavBar>
        <div style={{fontSize: "1.7em", marginTop: "170px", textAlign: "center"}}>
          Loading...
        </div>
      </div>
      :
    (homepage ?
      <div>
        <NavBar>
          <StyledImg src={logo} alt="Logo"/>
          <Search onSearchKeystroke={onSearchKeystroke}/>
        </NavBar>
        <MatchList matchData={filteredMatches} onPageChange={onPageChange}/>
      </div>
      :
      <div>
        <NavBar>
          <StyledImg src={logo} alt="Logo"/>
          <Search onSearchKeystroke={onSearchKeystroke}/>
        </NavBar>
        <div>rendering now</div>
        <MatchStats match={match} onPageChange={onPageChange} playerData={playerData}/>
      </div>
      )
      }
    </StyledDiv>
  )
}

export default App;



