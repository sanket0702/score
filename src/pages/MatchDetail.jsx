import React, { useEffect } from 'react'
import MatchScoreCard from '../ui/ScoreCard';
import ScoreCard from '../ui/ScoreCard';
import { fetchScorecard } from '../cricketApi/api';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
const MatchDetail = () => {

  /*const sampleMatch = {
    league: "Indian Premier League",
    venue: "Wankhede Stadium, Mumbai",
    date: "March 31, 2025",
    innings: [
      {
        team: "Mumbai Indians",
        score: "150/3 (15.2)",
        batting: [
          { name: "Rohit Sharma", runs: 50, balls: 32, fours: 6, sixes: 2, strikeRate: 156.25 },
          { name: "Ishan Kishan", runs: 30, balls: 20, fours: 4, sixes: 1, strikeRate: 150.0 },
          { name: "Suryakumar Yadav", runs: 45, balls: 28, fours: 5, sixes: 1, strikeRate: 160.71 },
        ],
        bowling: [
          { name: "Deepak Chahar", overs: 4, wickets: 2, economy: 7.25 },
          { name: "Ravindra Jadeja", overs: 4, wickets: 1, economy: 6.50 },
          { name: "Matheesha Pathirana", overs: 4, wickets: 2, economy: 8.00 },
        ],
      },
      {
        team: "Chennai Super Kings",
        score: "148/7 (20.0)",
        batting: [
          { name: "Ruturaj Gaikwad", runs: 40, balls: 35, fours: 5, sixes: 1, strikeRate: 114.28 },
          { name: "MS Dhoni", runs: 28, balls: 15, fours: 2, sixes: 2, strikeRate: 186.67 },
          { name: "Shivam Dube", runs: 35, balls: 22, fours: 3, sixes: 1, strikeRate: 159.09 },
        ],
        bowling: [
          { name: "Jasprit Bumrah", overs: 4, wickets: 2, economy: 5.75 },
          { name: "Piyush Chawla", overs: 4, wickets: 1, economy: 6.25 },
          { name: "Hardik Pandya", overs: 4, wickets: 2, economy: 7.50 },
        ],
      },
    ],
  };*/

  const {matchId}= useParams();
   const[liveScoreCard ,setLiveScoreCard]=useState()

  useEffect(()=>{
    const fetchScoreCard= async()=>{
      const scorecarddata = await fetchScorecard(matchId);
    console.log("Fetched Data:", scorecarddata);// Log the entire response
    setLiveScoreCard(scorecarddata)
    }
    fetchScoreCard();
  },[matchId])
  
  return (
    <div>
      <ScoreCard match={liveScoreCard}/>
    </div>
  )
}

export default MatchDetail
