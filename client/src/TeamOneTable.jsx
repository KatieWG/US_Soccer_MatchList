import React, {useState, useEffect} from "react";
import styled from "styled-components";
// import './grid.css';

const StyledDiv = styled.div`
  float: left;
`;

const StyledCell = styled.div`
  border-style: solid;
  margin-top: -1px;
  font-size: .7em;
  width: 210px;
  padding: 5px;
`;

const StyledHeader = styled.div`
  font-size: 1em;
  border-style: solid;
  margin-right: -1px;
  margin-bottom: 20px;
  padding: 15px;
  width: 190px;
`;

const StyledHeader2 = styled.div`
  font-size: 1em;
  border-style: solid;
  margin-right: -1px;
  margin-bottom: 20px;
  padding: 15px;
  width: 90px;
`;

const TeamOneTable = ({ players }) => {
  console.log('players in table one', players)

  useEffect(() => {
  }, [players]);

  if (players.length) {
    return (
      <StyledDiv className="container">
        <div style={{marginBottom: "20px", color: "black", fontSize: "1em"}}>{players[0].team}</div>
        <span style={{display: "flex"}}>
        <StyledHeader>Player</StyledHeader>
        <StyledHeader2>Assists</StyledHeader2>
        <StyledHeader2>Goals</StyledHeader2>
        <StyledHeader2>Avg</StyledHeader2>
        </span>
        {players.map((player) => {
          return <StyledCell className="item">{player.player}</StyledCell>
        })}
      </StyledDiv>
    )



  } else {
    return (
      <div>loading...</div>
    )
  }


};

export default TeamOneTable;