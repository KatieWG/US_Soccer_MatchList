import React, { useState, useEffect } from "react";
import axios from "axios";
import MatchList from "./MatchList.jsx";
import MatchStats from "./MatchStats.jsx";
import Search from "./Search.jsx";
import styled from "styled-components";
import logo from "./usSoccerLogo.png";

/*
STYLED COMPONENTS (you'll see them at the top of my components) are my preferred way to implement css at the component level.
To sum it up, you set an html tag with css styling onto a variable, then render the variable name within html tags in your return/render statement.
*/
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

const App = () => {
  const [matches, setMatches] = useState([]);
  const [filteredMatches, setFilteredMatches] = useState(matches);
  const [match, setMatch] = useState([]);
  const [playerData, setPlayerData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [homepage, setHomepage] = useState(true);

  //REQUESTS DATA FROM SERVER, WHICH MAKES OUR FIRST API CALL
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

  //REQUESTS DATA FROM SERVER, WHICH MAKES OUR SECOND API CALL
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

   //ADDS API DATA TO CACHE, PREVENTING AN API CALL ON EVERY REFRESH
   const addDataIntoCache = (cacheName, url, response) => {
    const data = new Response(JSON.stringify(response));
    if ('caches' in window) {
      caches.open(cacheName)
      .then((cache) => {
        cache.put(url, data);
      })
      .catch(() => {
        console.log('ERR CANNOT CACHE')
      });
    }
  };

  //SEARCHES BY DATE RANGE AND TEAM NAME
  //FOR FUTURE VERSIONS: add a debounce feature here to optimize - would not search on every keystroke
  const onSearchKeystroke = (e) => {
    e.preventDefault();
    var userSearch = e.target.value;
    var results = [];
    console.log(userSearch)

    if (userSearch.length) {
      //filters match NAME and DATE by user search
      matches.map((matchObj) => {
        let lowercaseMatchname = matchObj.fixture.toLowerCase();
        let matchDate = (new Date(matchData.game_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })).toLowerCase();
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
    if (homepage) {
      getMatch(data.game_id);
    } else {
      setPlayerData([])
    }
  }

  //ON PAGE LOAD, useEffect WILL RUN
  useEffect(() => {
    //on initial render, getMatches will invoke
    if (homepage) {
      getMatches();
    }
    //after API data has been fetched, it'll be cached into MatchCache on user's browser
    setTimeout(() => {
      addDataIntoCache('MatchCache',
      'https://localhost:2828', matches)
    }, "1000")
  }, []);

  return (
    <StyledDiv>
    {loading ?
      <div>
        <NavBar>
          <StyledImg src={logo} alt="Logo"/>
          <Search onSearchKeystroke={onSearchKeystroke}/>
        </NavBar>
        {/*If 'loading' state is set to true, loading... screen will render */}
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
        {playerData.length ? <MatchStats match={match} onPageChange={onPageChange} playerData={playerData}/> : <div style={{fontSize: "1.7em", marginTop: "170px", textAlign: "center"}}>
          Loading...
        </div>}
      </div>
      )
      }
    </StyledDiv>
  )
}

export default App;



