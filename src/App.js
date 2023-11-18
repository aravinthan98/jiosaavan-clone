
import './App.css';
import React from 'react';
import Maincontent from './components/mainContent/mainContentPage';
import Queue from './components/queuePage/queue'
import Subscription from './components/subscription/subscription';
import { Routes, Route } from "react-router-dom";
import LoginPage from './components/login/login';
import SongDetails from './components/songdetails/songDetails';
import ComingSoonPage from './commingSoon/commingSoon'
import CurrentPlayingProvider from './context/currentlyPlayingContext';
import Layout from './components/Layout';
import SignUp from './components/SignUp/Signup';
import SearchResultSection from './components/searchCards/SearchResultSection';
import FavoriteSection from './components/favoritSection/myFavoriteScetion';
import UpdatePassword from './components/login/updatePassword';
import MobileMyMusic from './components/mobileMymusic/MobileMyMusic';
import FavoriteSongs from './components/favoritSection/favoriteSong';
import MobileProfile from './components/mobileMymusic/MobileProfile';
import TopCategories from './components/topCategories/TopCategories';

function App() {

  return (
    <>
        <CurrentPlayingProvider>
          <Layout>
            <Routes>
              <Route path='/' element={<Maincontent className='main-page'/>}/>
              <Route path='/queue' element={<Queue/>} />
              <Route path='/songDetailPage/:id' element={<SongDetails />} />
              <Route path='/search/:id' element={<SearchResultSection/>}/>
              <Route path='/subscription' element={<Subscription />} />
              <Route path='/login' element={<LoginPage/>} />             
              <Route path='/signup' element={<SignUp/>} />
              <Route path='/change-password' element={<UpdatePassword/>}/>              
              <Route path='/new-releases' element={<TopCategories />} />
              <Route path='/charts' element={<TopCategories />} />
              <Route path='/featured-playlists' element={<TopCategories />} />             
              <Route path='/original-podcasts' element={<TopCategories />} />
              <Route path='/top-artists' element={<TopCategories/>} />
              <Route path='/radio' element={<TopCategories />} />
              <Route path='/my-music/:section' element={<FavoriteSection/>}/>
              <Route path='/listening-history' element={<FavoriteSection/>}/>
              <Route path='/my-profile-section' element={<MobileMyMusic/>}/>
              <Route path='/languages' element={<ComingSoonPage/>}/>            
              <Route path='/my-music/mysongs' element={<FavoriteSongs/>}/>
              <Route path='/my-music-sec/my-profile-m' element={<MobileProfile/>}/>
              <Route path='/redeem' element={<ComingSoonPage/>}/>
            </Routes>
  
          </Layout>
        </CurrentPlayingProvider>

    </>

  );
}

export default App;