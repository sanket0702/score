import React from 'react';
import { Link } from 'react-router-dom';
import LiveIndicator from "../assets/LiveIndicator"
const MatchCard = ({match}) => {

  const currentYear = new Date().getFullYear();
const isIpl = match.matchInfo.seriesName === `Indian Premier League ${currentYear}`;
  const {matchInfo,matchScore}=match;
  const isLive =  matchInfo.state === "In Progress";

  return (
    <div className={`border mx-2 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow md:mx-28 ${isIpl ? " border-l-yellow-500 bg-[url('https://media.istockphoto.com/id/1404615645/vector/abstract-colorful-background.jpg?s=612x612&w=0&k=20&c=_bVzbN6dsseE2ivU0TyzMUjozAYkO8VMxaZCBs7Ft_I=')]" : ""}`}>
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className={`text-sm font-medium text-gray-500 ${isIpl ? " border-l-yellow-500 text-yellow-50 bg-blue-400 rounded-2xl px-2" : ""}`}>{matchInfo.seriesName}</h3>
          
            {isLive && <span className="px-2 py-1 rounded-full text-xs font-bold bg-red-500 text-white flex items-center"><LiveIndicator/>LIVE</span>||<span className="px-2 py-1 rounded-full text-xs font-medium flex bg-red-500 text-white">{matchInfo.state.toUpperCase()}</span>}
          
        </div>
        
        <div className="space-y-3">
          {/* Home Team */}
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className={`font-medium w-8 text-center ${isIpl ? " border-l-yellow-500 text-yellow-50" : ""} `}>{matchInfo.team1.teamSName}</span>
              <span className={`ml-3 text-sm ${isIpl ? " border-l-yellow-500 text-yellow-50" : ""}`}>{matchInfo.team1.teamName}</span>
            </div>
            <div className="text-right">
              <span className={`font-semibold ${isIpl ? " border-l-yellow-500 text-yellow-50" : ""}`}>{matchScore?.team1Score?.inngs1?.runs}/{matchScore?.team1Score?.inngs1?.wickets}</span>
              <span className={`text-xs text-gray-500 ml-1 ${isIpl ? " border-l-yellow-500 text-yellow-50" : ""}`}>({matchScore?.team1Score?.inngs1?.overs})</span>
            </div>
          </div>

          {/* Away Team */}
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className={`font-medium w-8 text-center ${isIpl ? " border-l-yellow-500 text-yellow-50" : ""} `}>{matchInfo.team2.teamSName}</span>
              <span className={`ml-3 text-sm ${isIpl ? " border-l-yellow-500 text-yellow-50" : ""}`}>{matchInfo.team2.teamName}</span>
            </div>
            <div className="text-right">
            {matchScore?.team2Score?.inngs1 ? (<span className={`font-semibold ${isIpl ? " border-l-yellow-500 text-yellow-50" : ""}`}>{matchScore?.team2Score?.inngs1?.runs}/{matchScore?.team2Score?.inngs1?.wickets} <span className={`text-xs text-gray-500 ml-1 ${isIpl ? " border-l-yellow-500 text-yellow-50" : ""}`}>({matchScore?.team2Score?.inngs1?.overs})</span></span>):(<span className="text-gray-500 text-sm">Yet to bat</span>)}
              
              
            </div>
          </div>
        </div>

        {/* Match info (venue, date, required runs) */}
        <div className="mt-3 pt-3 border-t border-gray-100">
          <p className={`text-xs text-gray-500${isIpl ? " border-l-yellow-500 text-yellow-50" : ""}`}>{matchInfo.venueInfo.ground},{matchInfo.venueInfo.city}</p>
          <p className={`text-xs text-gray-500 mt-1 ${isIpl ? " border-l-yellow-500 text-yellow-50" : ""}`}>{new Date(parseInt(matchInfo.startDate)).toLocaleString()}</p>

          
            <p className="text-xs font-medium text-red-600 mt-2">{matchInfo.status}</p>
          
        </div>
      </div>

      {/* View details link for IPL matches */}
       
        <div className="bg-gray-50 px-4 py-2 border-t border-gray-100 flex justify-center items-center">
          <Link
            
            to={`/mcenter/v1/${matchInfo.matchId}/scard`}
            className="text-sm text-blue-600 hover:text-blue-800 transition-colors text-center bg-gray-300 px-5 rounded-4xl font-bold"
          >
            View details
          </Link>
        </div>
      
    </div>
  );
};
//{/*to={`/match/${match.id}`}*/}
export default MatchCard;