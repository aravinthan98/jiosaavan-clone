
import './App.css';
import React,{useState} from 'react';
import Topnavbar from './topNavBar.js';
import Corrosal from './corrosal/Corrosal.js'
import Maincontent from './mainContentPage';
import Queue from './queuePage/queue.js'
import LiveMusic from './musicBar.js';
import Subscription from './subscription/subscription';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MobileNavbar from './mobileNavbar/mobileNavbar';
import LoginPage from './login.js'

function App() {
  const [selectedSong, setSelectedSong] = useState(null);




  const handleCardClick = (song) => {
    setSelectedSong(song);
  }

 

  return (
    <div className="app">


      <Topnavbar/>
     
        

        <Routes>
        <Route path='/' element={<Maincontent handleCardsClick={handleCardClick}/>}/>
        <Route path='/queue' element={<Queue selectedSong={selectedSong} />}/>
        </Routes>
        <LiveMusic
        selectedSong={selectedSong}
        
      />
      <MobileNavbar/>
    
   
     {/* <Subscription/> */}
 
    </div>

  );
}

export default App;
