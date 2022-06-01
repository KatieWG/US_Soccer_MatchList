import React, {useState, useEffect} from "react";
import styled from "styled-components";
import TeamOneTable from "./TeamOneTable.jsx";
import TeamTwoTable from "./TeamTwoTable.jsx";

const StyledDiv = styled.div`
  margin: 90px 20px;
`;

const StyledTitleDiv = styled.div`
height: 100px;
width: 75%;
margin-top: 20px;
color: #c62034;
font-size: 2em;
float: left;
`;

const StyledDateDiv = styled.div`
float: right;
margin: 20px 0px 0px 0px;
font-size: 1.3em;
color: grey;
`;

const MatchStats = ({ match, onPageChange, playerData }) => {
  const [count, setCount] = useState(1);
  const [homeTeam, setHomeTeam] = useState('');
  const [awayTeam, setAwayTeam] = useState('');
  const [homeRoster, setHomeRoster] = useState([]);
  const [awayRoster, setAwayRoster] = useState([]);

  //parses TEAM NAMES from first endpoint and splits them into homeTeam/awayTeam states
  const parseTeams = () => {
    let teamOne;
    let teamTwo;
    if (match.fixture) {
      let fixture = match.fixture;
      for (let i = 0; i < fixture.length; i++) {
        if (i > 1 && (fixture[i - 1] + fixture[i] + fixture[i + 1] === ' v ')) {
          // at this point, we are at the middle of the string
          // slice the first and second teams from the string
          teamOne = fixture.slice(0, i - 1);
          teamTwo = fixture.slice(i + 2);
        }
      }
      setHomeTeam(teamOne);
      setAwayTeam(teamTwo);
    }
  };

  //parses PLAYERS into homeRoster and awayRoster by their team name
  const parsePlayers = () => {
    let roster1 = [];
    let roster2 = [];
      // map over playerData to split players into arrays by team
      playerData.map((player) => {
        //if player is on homeTeam, push to homeRoster array
        if (player.team === homeTeam) {
          roster1.push(player);
        }
        //if player is on awayTeam, push to awayRoster array
        if (player.team === awayTeam) {
          roster2.push(player);
        }
      })
      setHomeRoster(roster1);
      setAwayRoster(roster2);
  };

  //will run on initial page load AND whenever homeTeam state changes
  useEffect(() => {
    if (count === 1) {
      parseTeams();
    }
    parsePlayers();
    setCount(count + 1)
  }, [homeTeam]);

  //will only render desired content once playerData is retrieved from API
  if (playerData.length === 0) {
    return (<div style={{fontSize: "1.7em", marginTop: "170px", textAlign: "center"}}>Loading...</div>)
  } else {
    return (
    <StyledDiv>
      <button onClick={onPageChange}>back</button>
      <span>
        <div>
          <StyledTitleDiv>
            {match.fixture}
          </StyledTitleDiv>
          <StyledDateDiv>
          {new Date(match.game_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </StyledDateDiv>
        </div>
      </span>

      <div style={{fontSize: "1.7em", marginTop: "170px", textAlign: "left"}}>
      {homeRoster.length ? <TeamOneTable style={{float: "left"}} players={homeRoster}/> : <div style={{fontSize: "1.7em", marginTop: "170px", textAlign: "center"}}>
          Loading...
        </div>
      }
      {awayRoster.length ? <TeamTwoTable style={{float: "right"}} players={awayRoster}/> : <div style={{fontSize: "1.7em", marginTop: "170px", textAlign: "center"}}>
          Loading...
        </div>}
      </div>
    </StyledDiv>
  )
  }
}

export default MatchStats;

