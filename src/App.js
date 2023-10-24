
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
import TopArtist from './components/topArtist/topArtist';
import SignUp from './components/SignUp/Signup';
import SearchResultSection from './components/searchCards/SearchResultSection';
import FavoriteSection from './components/favoritSection/myFavoriteScetion';
import UpdatePassword from './components/login/updatePassword';
import NewReleases from './components/newReleases/newRelease';
import TopChart from './components/topchart/topchart';
import TopPlayList from './components/editorialPick/topPlaylist'
import MobileMyMusic from './components/mobileMymusic/MobileMyMusic';
import FavoriteSongs from './components/favoritSection/favoriteSong';
import MobileProfile from './components/mobileMymusic/MobileProfile';

function App() {

  return (
    <>
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
              
              <Route path='/newrelease' element={<NewReleases />} />
              <Route path='/topchart' element={<TopChart />} />
              <Route path='/topplaylist' element={<TopPlayList />} />
              
              <Route path='/podcast' element={<ComingSoonPage />} />
              <Route path='/topartist' element={<TopArtist/>} />
              <Route path='/radio' element={<ComingSoonPage />} />
              <Route path='/my-music' element={<FavoriteSection/>}/>
              <Route path='/my-music-sec' element={<MobileMyMusic/>}/>
              <Route path='/languages' element={<ComingSoonPage/>}/>
              <Route path='/my-music/songs' element={<FavoriteSongs/>}/>
              <Route path='/my-music-sec/my-profile-m' element={<MobileProfile/>}/>
              <Route path='/redeem' element={<ComingSoonPage/>}/>
            </Routes>
  
          </Layout>
        </CurrentPlayingProvider>

    </>

  );
}

export default App;