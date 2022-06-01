import React from "react";
import Match from "./Match.jsx"
import styled from "styled-components";
import logo from "./usSoccerLogo.png";

/* STYLED COMPONENTS */
const StyledDiv = styled.div`
  margin-top: 130px;
  overflow: scroll;
`;

const MatchList = ( { matchData, onMatchClick, onPageChange } ) => {
  return (
   <StyledDiv>
    <ul>
      {matchData.map((match, idx) => {
      return <li><Match matchData={matchData[idx]} onPageChange={onPageChange} key={idx + 1}/></li>
    })}
    </ul>
    </StyledDiv>
  )
}

export default MatchList;