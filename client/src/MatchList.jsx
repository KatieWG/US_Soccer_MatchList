import React from "react";
import Match from "./Match.jsx"
import styled from "styled-components";


const StyledDiv = styled.div`
  margin-top: 70px;
`;

const MatchList = ( { matchData } ) => {

  return (
   <StyledDiv>
    {matchData.map((match, idx) => {
      return <Match matchData={matchData[idx]} key={idx}/>
    })}
    </StyledDiv>
  )
}

export default MatchList;