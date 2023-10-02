
import './App.css';
import React from 'react';
import Maincontent from './mainContentPage';
import Queue from './queuePage/queue.js'
import Subscription from './subscription/subscription';
import { Routes, Route } from "react-router-dom";
import MobileNavbar from './mobileNavbar/mobileNavbar';
import LoginPage from './login.js'
import SongDetails from './songdetails/songDetails';
import ComingSoonPage from './commingSoon/commingSoon'
import CurrentPlayingProvider from './context/currentlyPlayingContext';
import Layout from './components/Layout';
import TopArtist from './topArtist/topArtist';

function App() {
  return (
    <div className="app">
      <CurrentPlayingProvider>
        <Layout>
          <Routes>
            <Route path='/'  element={<Maincontent className='main-page'/>} />

            <Route path='/queue' element={<Queue/>} />

            <Route path='/songDetailPage' element={<SongDetails />} />

            <Route path='/subscription' element={<Subscription />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/newrelease' element={<ComingSoonPage />} />
            <Route path='/topchart' element={<ComingSoonPage />} />
            <Route path='/topplaylist' element={<ComingSoonPage />} />
            <Route path='/podcast' element={<ComingSoonPage />} />
            <Route path='/topartist' element={<TopArtist/>} />
            <Route path='/radio' element={<ComingSoonPage />} />
          </Routes>

          <MobileNavbar />
        </Layout>
      </CurrentPlayingProvider>

    </div>

  );
}

export default App;