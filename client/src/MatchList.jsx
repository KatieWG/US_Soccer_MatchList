import React from "react";
import Match from "./Match.jsx"
import styled from "styled-components";

const StyledDiv = styled.div`
  margin-top: 130px;
`;

const MatchList = ( { matchData, onMatchClick, onPageChange } ) => {

  return (
   <StyledDiv>
    <ul>
      {matchData.map((match, idx) => {
      return <li><Match matchData={matchData[idx]} onPageChange={onPageChange} key={idx}/></li>
    })}
    </ul>
    </StyledDiv>
  )
}

export default MatchList;