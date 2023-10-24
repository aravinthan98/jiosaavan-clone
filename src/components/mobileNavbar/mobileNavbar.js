import React, { useState } from "react";
import './mobileNavbar.css';
import {GrHomeRounded} from 'react-icons/gr';
import {BiSearch} from 'react-icons/bi';
import {ImCompass2} from 'react-icons/im';
import {PiUser} from 'react-icons/pi'
import { Link } from "react-router-dom";
import { useCurrentPlayingContext } from "../../context/currentlyPlayingContext";
import {RxCross2} from 'react-icons/rx'

function MobileNavbar(){
    const{login,setSearchBarClicked,searchBarClicked}=useCurrentPlayingContext();
    const[browseBarClicked,setBrowseBarClicked]=useState(false);

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
                {login?(<Link to='/my-music-sec'><span>My Music</span></Link> ):(<Link to='/login'><span>Login</span></Link>)}
               
                </div>
                
                <aside className={browseBarClicked?"browsebox-container":"hideSearchBar"} onScroll = {(e)=>e.stopPropagation()}>
                     <div className="browsebox-top">
                        <h2>What's Hot on jiosaavn</h2>
                        <RxCross2 onClick={()=>setBrowseBarClicked(false)} className="m-close-bar"/>           
                    </div>
          
                    <div className="browsebox-results">  
                    <Link to='/newrelease'><p onClick={()=>setBrowseBarClicked(false)}>New Releases</p></Link>
                    <Link to='/topplaylist'><p onClick={()=>setBrowseBarClicked(false)}>Top PlayList</p></Link>
                    <Link to='/topchart'><p onClick={()=>setBrowseBarClicked(false)}>Top Charts</p></Link>
                    <Link to='/topartist'><p onClick={()=>setBrowseBarClicked(false)}>Top Artist</p></Link>
                    </div>
                </aside>
            </div>
        </div>
    )
}

export default MobileNavbar;