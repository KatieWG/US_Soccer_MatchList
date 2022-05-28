import React from "react";
import Match from "./Match.jsx"
import styled from "styled-components";


const StyledDiv = styled.div`
  margin-top: 80px;
`;

const MatchList = ( { matchData } ) => {

  return (
   <StyledDiv>
    <div>
      {matchData.map((match, idx) => {
      return <Match matchData={matchData[idx]} key={idx}/>
    })}
    </div>
    </StyledDiv>
  )
}

export default MatchList;