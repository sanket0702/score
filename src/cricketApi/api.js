import axios from 'axios';

const API_KEY = '2d7939a02bmsh20b20718bf3ef1ep1e3b00jsn25e11b4556dc'; //'b9de2e629dmsh4faff5639dba6e4p169c67jsn425052b49eb6' //;
//
const API_HOST = 'cricbuzz-cricket2.p.rapidapi.com';

const apiClient = axios.create({
  baseURL: `https://${API_HOST}`,
  headers: {
    'x-rapidapi-key': API_KEY,
    'x-rapidapi-host': API_HOST,
  },
});
//Live Match Detail
export const fetchLiveMatches = async () => {
  try {
    const response = await apiClient.get('/matches/v1/live');
    return response.data;
  } catch (error) {
    console.error('Error fetching live matches:', error);
    return null;
  }
};


/******************UpcomingMatch Api ******/
export const fetchUpcomingMatches = async () => {
    const options = {
      method: "GET",
      url: "https://cricbuzz-cricket2.p.rapidapi.com/matches/v1/upcoming",
      headers: {
        "x-rapidapi-key": API_KEY,
        "x-rapidapi-host": API_HOST,
      },
    };
  
    try {
      const response = await axios.request(options);
      const upcomingMatchData  = response.data;
  
      let upcomingMatches = [];
      
      upcomingMatchData.typeMatches.forEach((typeMatch) => {
        typeMatch.seriesMatches.forEach((series) => {
          if (series.seriesAdWrapper) {
            const seriesData = series.seriesAdWrapper;
            seriesData.matches.forEach((match) => {
                 
                upcomingMatches.push(match.matchInfo);
                  
            });
          }
        });
      });
  
      // Sort matches by startDate (earliest match first)
      upcomingMatches.sort((a, b) => a.startDate - b.startDate);
  
      return upcomingMatches;
    } catch (error) {
      console.error("Error fetching upcoming matches:", error);
      return [];
    }
  };
  
  
/*************************************** */


// Function to fetch match scorecard/******************/
export const fetchScorecard = async (matchId) => {
  try {
    const response = await apiClient.get(`/mcenter/v1/${matchId}/scard`);
    return response.data;
    
  } catch (error) {
    console.error('Error fetching scorecard:', error);
    return null;
  }
};
/*************************************************************** */




/************************************************************************************** */
/*import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api'; // Adjust if using a deployed backend

export const fetchLiveMatches = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/live`);
    return response.data;
  } catch (error) {
    console.error("Error fetching live matches:", error.message);
    return null;
  }
};

export const fetchUpcomingMatches = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/upcoming`);
    return response.data;
  } catch (error) {
    console.error("Error fetching upcoming matches:", error.message);
    return [];
  }
};

export const fetchScoreCard = async (matchId) => {
  try {
    const response = await axios.get(`${BASE_URL}/scorecard/${matchId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching scorecard for match ${matchId}:`, error.message);
    return null;
  }
};*/
