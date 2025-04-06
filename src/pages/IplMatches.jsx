import React from 'react';
import MatchCard from '../components/MatchCard.jsx';
import UpComingMatchCard from '../components/UpComingMatchCard.jsx';

const Ipl = ({ iplmatch, upcoming }) => {
  return (
    <div className="bg-gradient-to-r from-[#1E2A78] to-[#7329C6] text-white py-10 text-center shadow-lg rounded-xl mx-4 space-y-4">
      <div className="flex flex-col justify-center items-center gap-3">
        <img src="https://documents.iplt20.com//ipl/assets/images/ipl-logo-new-old.png" alt="IPL Logo" />
        <h1 className="text-4xl font-bold uppercase tracking-wide drop-shadow-lg">
          IPL - Ye Hai India Ka Tyohar!
        </h1>
      </div>
      
      {iplmatch.map((match) => (
        <MatchCard key={match.matchInfo.id} match={match} />
      ))}

      {upcoming.map((match) => (
        <UpComingMatchCard key={match.matchId} match={match} />
      ))}
    </div>
  );
};

export default Ipl;
