
import './App.css';
import React from 'react';
import Maincontent from './components/mainContent/mainContentPage';
import Queue from './components/queuePage/queue'
import Subscription from './components/subscription/subscription';
import { Routes, Route } from "react-router-dom";
import MobileNavbar from './components/mobileNavbar/mobileNavbar';
import LoginPage from './components/login/login';
import SongDetails from './components/songdetails/songDetails';
import ComingSoonPage from './commingSoon/commingSoon'
import CurrentPlayingProvider from './context/currentlyPlayingContext';
import Layout from './components/Layout';
import TopArtist from './components/topArtist/topArtist';
import SignUp from './components/SignUp/Signup';
import SearchResultSection from './components/searchCards/SearchResultSection';
import FavoriteSection from './components/favoritSection/myFavoriteScetion';
import UpdatePassword from './components/login/updatePassword';
function App() {
  return (
    <div className="app">
      <CurrentPlayingProvider>
        <Layout>
          <Routes>
            <Route path='/'  element={<Maincontent className='main-page'/>}/>
        
          

            <Route path='/queue' element={<Queue/>} />

            <Route path='/songDetailPage/:id' element={<SongDetails />} />
            <Route path='/search/:id' element={<SearchResultSection/>}/>
            <Route path='/subscription' element={<Subscription />} />
            <Route path='/login' element={<LoginPage/>} />
            
            <Route path='/signup' element={<SignUp/>} />
            <Route path='/change-password' element={<UpdatePassword/>}/>
            
            <Route path='/newrelease' element={<ComingSoonPage />} />
            <Route path='/topchart' element={<ComingSoonPage />} />
            <Route path='/topplaylist' element={<ComingSoonPage />} />
            <Route path='/podcast' element={<ComingSoonPage />} />
            <Route path='/topartist' element={<TopArtist/>} />
            <Route path='/radio' element={<ComingSoonPage />} />
            <Route path='/my-music' element={<FavoriteSection/>}/>
          </Routes>

          <MobileNavbar />
        </Layout>
      </CurrentPlayingProvider>

    </div>

  );
}

export default App;