import React, { useState } from "react";
import './mainContentPage.css'

import {VscHistory} from 'react-icons/vsc';
import {CgMusicNote} from 'react-icons/cg';
import {RiAlbumLine} from 'react-icons/ri';
import {MdOutlinePodcasts} from 'react-icons/md';
import {LiaMicrophoneAltSolid} from 'react-icons/lia'
import TopChart from "./topchart/topchart";
import NewReleases from "./newReleases/newRelease";
import TrendingPodcast from "./trendingPodcast/trendingPodcast";
import TopPlaylist from "./editorialPick/topPlaylist";
import RadioStation from "./radioStations/radioStation";
import TopArtist from "./topArtist/topArtist";
import Footer from "./footer/footer";
import SongDetails from "./songdetails/songDetails";
import Corrosal from "./corrosal/Corrosal";
import TopAlbum from "./topAlbum/topAlbum";
import PickMood from "./pickMoods/pickMoods";
import ComingSoonPage from "./commingSoon/commingSoon";

// import CaroSample from "./corrosal/carosample";

function Maincontent({handleCardsClick}){
    const [selectedNavCom, setselectedNavCom] = useState('Treanding Now');


  let navComponent;
  switch (selectedNavCom) {
    case 'New Releases':
        navComponent= <ComingSoonPage/>;
      break;
    case 'Top Charts':
        navComponent=<ComingSoonPage/>;
      break;
    case 'Top Playlists':
        navComponent= <ComingSoonPage/>;
      break;
    case 'Podcasts':
        navComponent= <ComingSoonPage/>;
      break;
    case 'Top Artists':
    navComponent= <TopArtist/>;
    break;
    case 'Radio':
    navComponent=  <RadioStation/>;
    break;
    default:
        navComponent=<>
         <h2 className="trending">Trending Songs</h2>
        <Corrosal onCardClick={handleCardsClick}/>
        <h2 className="trending">Top Albums</h2>
        <TopAlbum/>
        <h2 className="trending">Pick Your Mood</h2>
        <PickMood/>
        </>
  }

  const renderNavCom=(e)=>{
    // console.log("e.target",e.target.innerText)
    setselectedNavCom(e.target.innerText);
  }
    return(
        <div className="maincontent">
            <div className="sidebar">
                <h4 className="brws">BROWSE</h4>
                <ul className="browse-item">
                    <li  onClick={renderNavCom}>New Releases</li>
                    <li onClick={renderNavCom}>Top Charts</li>
                    <li  onClick={renderNavCom}>Top Playlists</li>
                    <li  onClick={renderNavCom}>Podcasts</li>
                    <li  onClick={renderNavCom}>Top Artists</li>
                    <li  onClick={renderNavCom}>Radio</li>
                </ul>
                <p className="lib">LIBRARY</p>
                <div className="library-item">
                    <div><VscHistory/> <span> History</span></div>
                    <div><CgMusicNote/> <span> Songs</span></div>
                    <div><RiAlbumLine/> <span> Albums</span></div>
                    <div><MdOutlinePodcasts/> <span> Podcasts</span></div>
                    <div><LiaMicrophoneAltSolid/> <span> Artists</span></div>
                </div>

                <button className="playlist-btn"> +  New Playlist</button>
            </div>
           <div className="main-page"> 
                {/* <h2 className="trending">{selectedNavCom}</h2> */}
                {navComponent}
                {/* <TopAlbum/> */}
                {/* <Corrosal onCardClick={handleCardsClick}/> */}
                {/* <CaroSample/> */}
                {/* {<SongDetails/>} */}
                <Footer/>
                {/* <div>      
                <h2 className="trending">Trending Now</h2>
                
                </div> 
                <div>
                <h2 className="trending">TopChart</h2>
                <TopChart/>
                </div>
                <div>
                <h2 className="trending">New Releases</h2>
                <NewReleases/>
                </div>
                <div>
                <h2 className="trending">Editorial Picks</h2>
                <TopPlaylist/>
                </div>
                <div>
                <h2 className="trending">Trending Podcast</h2>
                <TrendingPodcast/>
                </div>
                <div>
                <h2 className="trending">Radio Stations</h2>
                <RadioStation/>
                </div>
                <div>
                <h2 className="trending">Recommended Artist Stations</h2>
                <TopArtist/>
                </div>
                */}
            </div> 
        </div>
    )
}

export default Maincontent;