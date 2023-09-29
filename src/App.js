
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
import SideNavbar from './sideNavbar/sideNavbar';
import Footer from './footer/footer'
import SongDetails from './songdetails/songDetails';
import ComingSoonPage from './commingSoon/commingSoon'
import CurrentPlayingProvider from './context/currentlyPlayingContext';
import Layout from './components/Layout';

function App() {
  const [selectedSong, setSelectedSong] = useState(null);

  const handleCardClick = (song) => {
    setSelectedSong(song);
  }
  return (
    <div className="app">    
    <CurrentPlayingProvider>
    <Layout>
         <Routes>
        <Route path='/' element={<><Topnavbar/><div className='maincontent_page'>
          <SideNavbar/>
          <div className='main-page'>
              <Maincontent handleCardsClick={handleCardClick} />
          <Footer/>
          </div></div>
          <LiveMusic/></>}/>

        <Route path='/queue' element={<><Topnavbar/><Queue selectedSong={selectedSong} />
         <LiveMusic/></>}/>

        <Route path='/songDetailPage' element={<><Topnavbar/><div className='maincontent_page'>
          <SideNavbar/>
          <div className='main-page'>
          <SongDetails/>
          <Footer/>
          </div></div><LiveMusic selectedSong={selectedSong}/></>}/>

          <Route path='/subscription' element={<Subscription/>}/>
          <Route path='/login' element={<LoginPage/>}/>

          <Route path='/newrelease' element={<><Topnavbar/><div className='maincontent_page'>
          <SideNavbar/>
          <div className='main-page'>
          <ComingSoonPage/>
          <Footer/>
          </div></div><LiveMusic selectedSong={selectedSong}/></>}/>
        </Routes>

      <MobileNavbar/>
    </Layout>
     </CurrentPlayingProvider>

    </div>

  );
}

export default App;
