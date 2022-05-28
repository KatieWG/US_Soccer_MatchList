import React from "react";
import styled from "styled-components";

const StyledTitleDiv = styled.div`
height: 100px;
width: 75%;
background-color: grey;
margin-top: 5px;
margin: 10px 10px 10px 10px;
padding: 5px 5px 5px 5px;
color: maroon;
`;

const StyledCompetitionDiv = styled.div`
color: black;
`;

const StyledImgLeft = styled.img`
height: 40px;
margin: 5px 5px 5px 5px;
float: left;
`;

const StyledImgRight = styled.img`
height: 40px;
margin: 5px 5px 5px 5px;
`;

const StyledDateDiv = styled.div`
float: right;
margin: 5px 5px 5px 5px;
`;

const Match = ({ matchData }) => {

  return (
    <StyledTitleDiv>
      <span>
      <div>
        {matchData.fixture}
        <StyledDateDiv>
        {new Date(matchData.game_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </StyledDateDiv>
      </div>
      </span>
      <StyledCompetitionDiv>
        {matchData.competition}
      </StyledCompetitionDiv>
      <span>
        <StyledImgLeft src={matchData.home_img_m} alt=""/>
        <StyledImgRight src={matchData.away_img_m} alt=""/>
      </span>
    </StyledTitleDiv>
  )
}

export default Match;