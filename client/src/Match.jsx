import React from "react";
import styled from "styled-components";

const StyledTitleDiv = styled.div`
height: 130px;
width: 87%;
background-color: white;
margin-top: 5px;
margin: 10px 10px 10px 10px;
padding: 10px;
color: maroon;
box-shadow: 0 4px 4px -2px gray;
border-radius: 3px;
`;

const StyledFixtureDiv = styled.div`
float: left;
font-size: 1.3em;
`;

const StyledCompetitionDiv = styled.div`
color: grey;
margin-top: -30px;
`;

const StyledLogosDiv = styled.div`
display: flex;
justify-content: center;
font-size; 1em;
color: grey;
`;

const StyledImgLeft = styled.img`
height: 100px;
margin: -30px 30px 30px 30px;
`;

const StyledImgRight = styled.img`
height: 100px;
margin: -30px 30px 5px 30px;
`;

const StyledDateDiv = styled.div`
float: right;
margin: 0px 5px 5px 5px;
color: grey;
`;

const Match = ({ matchData, onPageChange }) => {

  return (
    <StyledTitleDiv onClick={() => onPageChange(matchData)}>
      <span>
        <div>
          <StyledFixtureDiv>
            {matchData.fixture}
          </StyledFixtureDiv>
          <StyledDateDiv>
          {new Date(matchData.game_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </StyledDateDiv>
        </div>
      </span>
      <br/>
      <br/>
      <br/>
      <StyledCompetitionDiv>
        {matchData.competition}
      </StyledCompetitionDiv>
      <StyledLogosDiv>
        <StyledImgLeft src={matchData.home_img_m} alt=""/>
        <StyledLogosDiv>-</StyledLogosDiv>
        <StyledImgRight src={matchData.away_img_m} alt=""/>
      </StyledLogosDiv>
    </StyledTitleDiv>
  )
}

export default Match;