import React from "react";
import styled from "styled-components";

const MatchStatsEntry = ({ player }) => {

  return (
    <div>
      {player.player} - {player.team}
    </div>
  )

};

export default MatchStatsEntry;