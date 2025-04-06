import React from 'react'


const UpComingMatchCard = ({match}) => 
{
  const formatMatchDate = (startDate) => {
    if (!startDate) return "Date not available"; // Handle missing date
  
    const matchDate = new Date(Number(startDate)); // Convert from string to number
    if (isNaN(matchDate)) return "Invalid Date"; // Final check
  
    const today = new Date();
  
    // If the match is today, show only "Today, HH:MM AM/PM"
    if (
      matchDate.getDate() === today.getDate() &&
      matchDate.getMonth() === today.getMonth() &&
      matchDate.getFullYear() === today.getFullYear()
    ) {
      return `Today, ${matchDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: true })}`;
    }
  
    // Otherwise, show "Apr 05, 03:30 PM" format (local time)
    return matchDate.toLocaleDateString([], { month: "short", day: "2-digit" }) + 
           `, ${matchDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: true })}`;
  };
  


  const currentYear = new Date().getFullYear();
const isIpl = match.seriesName === `Indian Premier League ${currentYear}`;
  return (
    <div  className={`border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow mx-5 ${
      isIpl ? "bg-[url('https://media.istockphoto.com/id/1404615645/vector/abstract-colorful-background.jpg?s=612x612&w=0&k=20&c=_bVzbN6dsseE2ivU0TyzMUjozAYkO8VMxaZCBs7Ft_I=')]" : ""
    }`}>
          <div className="p-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className={`text-sm font-medium text-gray-500 ${isIpl? "text-amber-100 text-white bg-blue-500 px-2 rounded-2xl":""}`}>{isIpl ? `IPL ${currentYear}` : 'International Match'}</h3>
              <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-500 text-white">
                {match.state.toUpperCase()}
              </span>
            </div>

            <div className="space-y-3">
              {/* Home Team */}
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <span className={`font-medium w-8 text-center  ${isIpl? "text-amber-100":""}`}>{match.team1.teamSName}</span>
                  <span className={`ml-3 text-sm ${isIpl? "text-amber-100":""}`}>{match.team1.teamName}</span>
                </div>
              </div>

              {/* Away Team */}
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <span className={`font-medium w-8 text-center  ${isIpl? "text-amber-100":""}`}>{match.team2.teamSName}</span>
                  <span className={`ml-3 text-sm ${isIpl ? "text-amber-100 bg":""}`}>{match.team2.teamName}</span>
                </div>
              </div>
            </div>

            {/* Match info (venue, date) */}
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className={`text-xs text-gray-500 ${isIpl ? "text-amber-100 text-white font-black ":""}`}>{match.venueInfo.ground} , {match.venueInfo.city}</p>
              <p className={`text-xs text-gray-500 mt-1 ext-xs  ${isIpl ? "text-amber-100  text-white":""}`}>{match.status === "Preview" ?
                formatMatchDate(Number(match.startDate)) : formatMatchDate(Number(match.startDate)) }</p>
            </div>
          </div>
        </div>
  )
}

export default UpComingMatchCard
