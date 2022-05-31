import React from "react";
import styled from "styled-components";

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
  console.log('match on MATCHSTATS', match)
  console.log('playerData on MATCHSTATS', playerData)

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
        {/* {playerData.length ? playerData[0].player : null} */}
        //map over player data to render a player per row
      </div>
    </StyledDiv>
  )
}

export default MatchStats;