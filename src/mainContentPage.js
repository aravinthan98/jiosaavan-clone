import React from "react";
import './mainContentPage.css'
import Corrosal from "./corrosal/Corrosal";
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
function Maincontent(){


    return(
        <div className="maincontent">
            <div className="sidebar">
                <h4 className="brws">BROWSE</h4>
                <ul className="browse-item">
                    <li>New Releases</li>
                    <li>Top Charts</li>
                    <li>Top Playlists</li>
                    <li>Podcasts</li>
                    <li>Top Artists</li>
                    <li>Radio</li>
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
                <div>      
                <h2 className="trending">Trending Now</h2>
                <Corrosal/>
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
               
            </div> 
        </div>
    )
}

export default Maincontent;