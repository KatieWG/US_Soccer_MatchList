import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  float: right;
`;

const TeamTwoTable = ({ players }) => {
  console.log('players in table two', players)

  return (
    <StyledDiv>
      TeamTwoTable
    </StyledDiv>
  )

};

export default TeamTwoTable;