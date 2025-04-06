import React from 'react';
import MatchCard from '../components/MatchCard.jsx';

const LiveMatch = ({matchesLive}) => {
  /*const matches = [
    {
      id: '12345',
      isIPL: true,
      status: 'Live',
      teams: {
        home: { shortName: 'MI', name: 'Mumbai Indians', score: '150/3', overs: '15.2' },
        away: { shortName: 'CSK', name: 'Chennai Super Kings', score: '148/7', overs: '20.0' }
      },
      venue: 'Wankhede Stadium, Mumbai',
      date: 'March 31, 2025',
      required: 'Mumbai Indians need 20 runs in 28 balls',
    },
    {
      id: '12346',
      isIPL: true,
      status: 'Completed',
      teams: {
        home: { shortName: 'RCB', name: 'Royal Challengers Bangalore', score: '175/6', overs: '20.0' },
        away: { shortName: 'KKR', name: 'Kolkata Knight Riders', score: '160/9', overs: '20.0' }
      },
      venue: 'M. Chinnaswamy Stadium, Bangalore',
      date: 'March 30, 2025',
      result: 'RCB won by 15 runs',
    },
    {
      id: '12347',
      isIPL: false,
      status: 'Upcoming',
      teams: {
        home: { shortName: 'ENG', name: 'England', score: '-', overs: '-' },
        away: { shortName: 'AUS', name: 'Australia', score: '-', overs: '-' }
      },
      venue: 'Lord’s, London',
      date: 'April 5, 2025',
    },
    {
      id: '12348',
      isIPL: true,
      status: 'Live',
      teams: {
        home: { shortName: 'DC', name: 'Delhi Capitals', score: '140/2', overs: '14.0' },
        away: { shortName: 'SRH', name: 'Sunrisers Hyderabad', score: '138/8', overs: '20.0' }
      },
      venue: 'Arun Jaitley Stadium, Delhi',
      date: 'March 31, 2025',
      required: 'Delhi Capitals need 39 runs in 36 balls',
    },
    {
      id: '12349',
      isIPL: true,
      status: 'Completed',
      teams: {
        home: { shortName: 'LSG', name: 'Lucknow Super Giants', score: '189/5', overs: '20.0' },
        away: { shortName: 'PBKS', name: 'Punjab Kings', score: '175/7', overs: '20.0' }
      },
      venue: 'Ekana Stadium, Lucknow',
      date: 'March 29, 2025',
      result: 'LSG won by 14 runs',
    }
  ];*/

  return (
    <div className="space-y-4">
    {matchesLive.length > 0 ? (
      matchesLive.map((match) => (
        <MatchCard key={match.matchInfo.matchId} match={match} />
      ))
    ) : (
      <p className="text-center text-gray-500">No live matches currently.</p>
    )}
  </div>
  );
};

export default LiveMatch;
