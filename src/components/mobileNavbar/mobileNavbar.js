import React, { useState } from "react";
import './mobileNavbar.css';
import {GrHomeRounded} from 'react-icons/gr';
import {BiSearch} from 'react-icons/bi';
import {ImCompass2} from 'react-icons/im';
import {PiUser} from 'react-icons/pi'
import { Link } from "react-router-dom";
import { useCurrentPlayingContext } from "../../context/currentlyPlayingContext";
import {RxCross2} from 'react-icons/rx';
import { useNavigate } from "react-router-dom";

function MobileNavbar(){
    const navigate=useNavigate();
    const{login,setSearchBarClicked,searchBarClicked,setSeletedResult}=useCurrentPlayingContext();
    const[browseBarClicked,setBrowseBarClicked]=useState(false);

    const handleBarClicked=(value,nav)=>{
        setSeletedResult(value);

        setBrowseBarClicked(false);
        return navigate(`${nav}`);

    }

    return(
        <div className="mobile-nav-container"> 
            <div className="mobile-nav">
                <div className="m-home">
                <p><GrHomeRounded/></p>
               <Link to='/'><span>Home</span></Link> 
                </div>
                <div className="m-serch" onClick={()=>setSearchBarClicked(!searchBarClicked)}>             
                <p><BiSearch/></p>
                <span>Search</span>
                </div>
                <div className="m-brws" onClick={()=>setBrowseBarClicked(!browseBarClicked)}>
                <p><ImCompass2 /></p>
                <span>Browse</span>
                </div>
                <div className="m-log">
                <p><PiUser/></p>
                {login?(<Link to="/my-profile-section"><span>My Music</span></Link> ):(<Link to='/login'><span>Login</span></Link>)}
               
                </div>
                
                <aside className={browseBarClicked?"browsebox-container":"hideSearchBar"} onScroll = {(e)=>e.stopPropagation()}>
                     <div className="browsebox-top">
                        <h2>What's Hot on jiosaavn</h2>
                        <RxCross2 onClick={()=>setBrowseBarClicked(false)} className="m-close-bar"/>           
                    </div>
          
                    <div className="browsebox-results">  
                   <p onClick={()=>handleBarClicked('NewSongs','/new-releases')}>New Releases</p>
                   <p onClick={()=>handleBarClicked('TopPlaylist','/featured-playlists')}>Top PlayList</p>
                    <p onClick={()=>handleBarClicked('TopCharts','/charts')}>Top Charts</p>
                    <p onClick={()=>handleBarClicked('TopArtists','/top-artists')}>Top Artist</p>
                    </div>
                </aside>
            </div>
        </div>
    )
}

export default MobileNavbar;