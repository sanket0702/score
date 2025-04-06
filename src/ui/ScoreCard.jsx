import React, { useState } from 'react';

const ScoreCard = ({ match }) => {
  const [selectedInning, setSelectedInning] = useState(0);

  if (!match?.scorecard || match?.scorecard?.length === 0) {
    return <div className="text-center p-4">No scorecard available</div>;
  }

  const innings = match.scorecard;
  const bowlingTeam = innings[selectedInning === 0 ? 1 : 0]?.batTeamName;

  return (
    <div className='md:flex md:justify-center py-2 md:py-16'>
      <div className="py-1.5 bg-gradient-to-r from-gray-400 to-indigo-400 text-white shadow-lg overflow-hidden md:w-[84%] px-1 md:rounded-2xl">
        
        {/* Top Section - Both Team Scores */}
        <div className='md:flex justify-center pl-2 md:px-8'>
          <div className='w-full md:flex justify-between'>
            {[0, 1].map((i) => {
              const team = innings[i];
              const teamName = team?.batTeamName || `Team ${i + 1}`;
              const score = team?.score && team?.overs
                ? `${team.score} / ${team.wickets} (${team.overs})`
                : 'NOT BAT YET';

              return (
                <div key={i} className='flex md:flex-col justify-center items-center border-b-[1px] py-3 w-full'>
                  <div className='md:flex justify-center'>
                    
                  </div>
                  <div>
                    <h3 className="md:text-center font-extrabold">{teamName}</h3>
                    <h2 className='font-extralight'>{score}</h2>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <h5 className="text-center mt-4 mb-4">{innings.status}</h5>
        <p className="text-sm opacity-90 text-center">venue data</p>

        {/* Scoreboard Summary */}
        <div className="my-4 mx-6 bg-white text-gray-800 rounded-lg text-center">
          <h3 className="text-lg font-bold">
            {innings[selectedInning].batTeamName} - {innings[selectedInning].score} /{innings[selectedInning].wickets} ({innings[selectedInning].overs})
          </h3>
        </div>

        {/* Inning Switcher */}
        <div className="flex justify-center space-x-2 mb-4">
          {innings.map((inning, index) => (
            <button
              key={index}
              className={`p-2 font-bold rounded ${selectedInning === index ? 'bg-gradient-to-r from-gray-600 to-indigo-500 text-white' : 'bg-gray-400'}`}
              onClick={() => setSelectedInning(index)}
            >
              {inning.batTeamName}
            </button>
          ))}
        </div>

        {/* Batting Table */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Batting - {innings[selectedInning].batTeamName}</h3>
          <table className="w-full bg-white text-gray-900 rounded-lg">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-2 text-left">Batsman</th>
                <th className="p-2">Runs</th>
                <th className="p-2">Balls</th>
                <th className="p-2">4s</th>
                <th className="p-2">6s</th>
                <th className="p-2">SR</th>
              </tr>
            </thead>
            <tbody>
              {innings[selectedInning].batsman?.map((batsman, index) => (
                <tr key={index} className="border-t border-gray-300 hover:bg-gray-100">
                  <td className="p-2 font-semibold">
                    {batsman.name}
                    {batsman.outDec && batsman.outDec !== 'Not Out' && (
                      <div className="text-sm italic text-red-500">{batsman.outDec}</div>
                    )}
                  </td>
                  <td className="p-2 text-center">{batsman.runs}</td>
                  <td className="p-2 text-center">{batsman.balls}</td>
                  <td className="p-2 text-center">{batsman.fours || 0}</td>
                  <td className="p-2 text-center">{batsman.sixes || 0}</td>
                  <td className="p-2 text-center">{batsman.strikeRate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bowling Table */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Bowling - {bowlingTeam}</h3>
          <table className="w-full border-collapse border border-gray-300 mt-2 bg-white text-gray-900">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2">Bowler</th>
                <th className="p-2">O</th>
                <th className="p-2">Runs</th>
                <th className="p-2">Wkts</th>
                <th className="p-2">Eco</th>
              </tr>
            </thead>
            <tbody>
              {innings[selectedInning].bowler?.map((bowlers, index) => (
                <tr key={index} className="border-t border-gray-300 hover:bg-gray-100">
                  <td className="p-2">{bowlers.name}</td>
                  <td className="p-2 text-center">{bowlers.overs}</td>
                  <td className="p-2 text-center">{bowlers.runs}</td>
                  <td className="p-2 text-center">{bowlers.wickets || 0}</td>
                  <td className="p-2 text-center">{bowlers.economy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default ScoreCard;
