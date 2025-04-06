import React from 'react'
import UpComingMatchCard from '../components/UpComingMatchCard';
const UpComingMatches = ({matchesUpcoming}) => {
    const upcomingMatches = [
        {
          id: '22345',
          isIPL: false,
          status: 'Upcoming',
          teams: {
            home: { shortName: 'IND', name: 'India', score: '-', overs: '-' },
            away: { shortName: 'PAK', name: 'Pakistan', score: '-', overs: '-' }
          },
          venue: 'Narendra Modi Stadium, Ahmedabad',
          date: 'April 10, 2025',
        },
        {
          id: '22346',
          isIPL: true,
          status: 'Upcoming',
          teams: {
            home: { shortName: 'RR', name: 'Rajasthan Royals', score: '-', overs: '-' },
            away: { shortName: 'GT', name: 'Gujarat Titans', score: '-', overs: '-' }
          },
          venue: 'Sawai Mansingh Stadium, Jaipur',
          date: 'April 12, 2025',
        },
        {
          id: '22347',
          isIPL: false,
          status: 'Upcoming',
          teams: {
            home: { shortName: 'AUS', name: 'Australia', score: '-', overs: '-' },
            away: { shortName: 'SA', name: 'South Africa', score: '-', overs: '-' }
          },
          venue: 'SCG, Sydney',
          date: 'April 15, 2025',
        }
      ];
  return (
    <div className="space-y-4">
      {matchesUpcoming.map((match) => (
        <UpComingMatchCard key={match.matchId} match={match} />
      ))}
    </div>
  )
}

export default UpComingMatches
