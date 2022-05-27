import React from "react";
import Match from "./Match.jsx"

const MatchList = ( { matchData } ) => {

  return (
   <div>
     MatchList
    {matchData.map((match, idx) => {
      return <Match matchData={matchData} key={idx}/>
    })}
    </div>
  )
}

export default MatchList;