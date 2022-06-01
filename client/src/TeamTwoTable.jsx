import React, {useState, useEffect} from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  float: right;
`;

const StyledCell = styled.div`
  border-style: solid;
  margin-top: -1px;
  font-size: .6em;
  width: 180px;
  padding: 10px;
  text-align: left;
`;

const StyledHeader = styled.div`
  font-size: .8em;
  border-style: solid;
  margin-right: -1px;
  margin-bottom: 20px;
  padding: 15px;
  width: 170px;
  background-color: #bebebe;
`;

const StyledHeader2 = styled.div`
  font-size: .8em;
  border-style: solid;
  margin-right: -1px;
  margin-bottom: 20px;
  padding: 15px;
  width: 70px;
  background-color: #bebebe;
`;

const StyledCell2 = styled.div`
  border-style: solid;
  margin-top: -1px;
  margin-left: -1px;
  font-size: .6em;
  width: 80px;
  padding: 10px;
  text-align: center;
`;

const TeamTwoTable = ({ players }) => {
  console.log('players in table one', players)

  useEffect(() => {
  }, [players]);

  if (players.length) {
    return (
      <StyledDiv className="container">
        <div style={{marginBottom: "20px", color: "black", fontSize: "1em"}}>{players[0].team}</div>
        <span style={{display: "flex"}}>
        <StyledHeader>Player</StyledHeader>
        <StyledHeader2>XA</StyledHeader2>
        <StyledHeader2>XG</StyledHeader2>
        <StyledHeader2>Avg</StyledHeader2>
        </span>
        <div style={{width: "40%", display: "table", marginBottom: "10%", float: "left"}}>
          {players.map((player) => {
            return  <span style={{display: "flex"}}>
                      <StyledCell>{player.player}</StyledCell>
                      <StyledCell2>{player.xa.value}</StyledCell2>
                      <StyledCell2>{player.xg.value}</StyledCell2>
                      <StyledCell2>{player.xg.avg}</StyledCell2>
                    </span>
            })}
        </div>
      </StyledDiv>
    )



  } else {
    return (
      <div>loading...</div>
    )
  }


};

export default TeamTwoTable;