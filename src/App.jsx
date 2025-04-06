import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect,useState } from 'react';
import './App.css';
import Home from './pages/Home';
import MatchDetail from './pages/MatchDetail';
import LiveMatches from './pages/LiveMatches';
import UpComingMatches from './pages/UpcomingMatch';
import IPLMatches from './pages/IplMatches';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import { fetchLiveMatches,fetchUpcomingMatches } from './cricketApi/api';



function App() {

  const [allLiveMatch, setAllLiveMatch] = useState([]);
  const [iplLiveMatch, setIplLiveMatch] = useState([]);
  const [iplUpcomingMatch, setIplUpcomingMatch] = useState([]);
  const[upComingMatches,setUpcomingMatches]=useState([]);
  //const [activeTab, setActiveTab] = useState(activeSection);
  

  /*useEffect(() => {
     // setActiveTab(activeSection);
  }, [activeSection]);*/

/*Api CAlling*/
useEffect(()=>{
  const getLiveMatches=  async()=>
      {
      const LiveMatch = await fetchLiveMatches();
      /*************LIVE MATCH API FETCH */
      if(LiveMatch?.typeMatches){
          let allMatch=[];
          let iplMatch=[];

          LiveMatch.typeMatches.forEach((typeofMatch)=>{
              typeofMatch.seriesMatches.forEach((series)=>{
                  if (series.seriesAdWrapper?.matches) {
                      series.seriesAdWrapper.matches.forEach((match) => {
                          allMatch.push(match); // Extracting match info //this only send matches not INFO to get you have to  use "match.matchInfo"
                          if (match.matchInfo.seriesName === "Indian Premier League 2025") {
                              iplMatch.push(match);
                          }
                      });
                  }
              });
          })
          setAllLiveMatch(allMatch);
          setIplLiveMatch(iplMatch);
      }
      /***********************************/

      /*upcomingmatch*********************/
      const UpComingMatch =await fetchUpcomingMatches();
      setUpcomingMatches(UpComingMatch);


      
      /***********************************/

      
      /*********this is for upcoming Ipl Match */
      const iplUpcomingMatch = UpComingMatch.filter(
          match => match.seriesName === "Indian Premier League 2025"
        );
        
        setIplUpcomingMatch(iplUpcomingMatch);
      
      /********************************** */
     
      
  };
  getLiveMatches();
      
},[])

  return (
    <>
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Navbar />
        <Routes>
          
          <Route path="/" element={<LiveMatches matchesLive={allLiveMatch}/>} />
          <Route path="/upcoming" element={<UpComingMatches matchesUpcoming={upComingMatches}/>} />
          <Route path="/ipl" element={<IPLMatches iplmatch={iplLiveMatch} upcoming={iplUpcomingMatch} />}/>
          <Route path="/mcenter/v1/:matchId/scard" element={<MatchDetail/>}/>
          
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;