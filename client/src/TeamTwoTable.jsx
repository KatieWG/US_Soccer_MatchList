import React, {useState, useEffect} from "react";
import styled from "styled-components";

/* STYLED COMPONENTS */
const StyledDiv = styled.div`
  float: right;
`;

const StyledCell = styled.div`
  border-style: solid;
  margin-top: -1px;
  font-size: .6em;
  width: 180px;
  padding: 15px 10px 15px 10px;
  text-align: left;
  background-color: #f2f2f2;
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
  width: 70px;
  padding: 15px;
  text-align: center;
`;

const StyledCell3 = styled.div`
  border-style: solid;
  margin-top: -1px;
  margin-left: -1px;
  font-size: .5em;
  width: 80px;
  padding: 10px;
  text-align: center;
`;

const TeamTwoTable = ({ players }) => {
  useEffect(() => {
  }, [players]);

  //line 64 prevents app from rendering until this component has received the necessary data (players)
  if (players.length) {
    return (
      <StyledDiv className="container">
        {/* I fashioned a data table with react divs (not a very graceful solution), but given more time and resources would implement it with D3 or another data modeling library */}
        <div style={{marginBottom: "20px", color: "black", fontSize: "1em"}}>{players[0].team}</div>
          <span style={{display: "flex"}}>
            {/* I plan to do more research on how to render this data in the most optimized way */}
            <StyledHeader>Player</StyledHeader>
            <StyledHeader2>XA</StyledHeader2>
            <StyledHeader2>XG</StyledHeader2>
            <StyledHeader2>Avg</StyledHeader2>
          </span>
        <div style={{width: "40%", display: "table", marginBottom: "10%", float: "left"}}>
          {/* line 76 maps over 'players' and renders a line of data per player in the array of objects */}
          {players.map((player, idx) => {
            return  <span key={idx} style={{display: "flex"}}>
                      <StyledCell>{player.player}</StyledCell>
                      <StyledCell2>{player.xa.value}</StyledCell2>
                      <StyledCell2>{player.xg.value}</StyledCell2>
                      <StyledCell3>{player.xg.avg} xg / {player.xa.avg} xa</StyledCell3>
                    </span>
            })}
        </div>
      </StyledDiv>
    )
  //If component has not received necessary data, it will render the loading screen
  } else {
    return (
      <div style={{fontSize: "1.7em"}}>Loading...</div>
    )
  }

};

export default TeamTwoTable;