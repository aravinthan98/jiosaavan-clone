import React, { useState} from "react";
import './topNavBar.css';
import { Link } from "react-router-dom";
import {TfiSearch} from 'react-icons/tfi';
import {AiFillCloseCircle} from 'react-icons/ai'
import  SearchSection  from "../searchSection/SearchSection";
import {useCurrentPlayingContext} from '../../context/currentlyPlayingContext'
import SearchTreandingSong from "./SearchTreandingSong";
import {RxCross2} from 'react-icons/rx';
import { useNavigate } from "react-router-dom";

function Topnavbar(){
  const navigate=useNavigate();
  const[inputValue,setInputValue]=useState('')
  const{searchBarClicked,setSearchBarClicked,login,setLogin,profile,setSeletedResult}=useCurrentPlayingContext();
  const[profileClicked,setProfileClicked]=useState(false);
  const[musicClicked,setMusicClicked]=useState(false);
  
  const debounceSearch = (e) => {
    setInputValue(e.target.value); 
  }

  const handleLogOut=()=>{  
    if(login){
      localStorage.clear();
      setLogin(false);
      setProfileClicked(!profileClicked);
    }
  }
  const handleMusicClicked=(value,nav)=>{
    setMusicClicked(false);
    setSeletedResult(value);
    return navigate(`${nav}`)
  }
return(
  <>
    <div className="sidenav">
      <div className='navbar'>
        <div className='leftnav'>
          <Link to='/'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/JioSaavn_Logo.svg/1024px-JioSaavn_Logo.svg.png' alt="logo"/>
          </Link>
          <div id="mus-pod">
            <div className="music" onClick={()=>setMusicClicked(!musicClicked)}>Music</div>
            <Link to='/original-podcasts'><div className="pod">Podcasts</div></Link> 
          </div>
          <Link to='/subscription'>
          <div className="gopro">Go Pro</div>
          </Link> 
        </div>
        <div className='midnav' onClick={()=>setSearchBarClicked(true)}>
          <p>Search</p>       
        </div>
        <div className='rightnav'>
          <Link to='/languages'><div className="languages-sec">Music Language</div></Link> 
          {login?(<div className='myprofile-section-top'>
            <div className='myprofile-logo-top' onClick={()=>setProfileClicked(!profileClicked)}><img src='https://staticfe.saavn.com/web6/jioindw/dist/1696482270/_i/default_images/default-user-500x500.jpg' className='profile-logo' alt='my-logo'/></div>
              <div className='myprofile-name-top'>
                  <h5>{profile.userName&& profile.userName}</h5>
              </div>
            </div>)
          :(<div className="login-signup">
          <Link to='/login'><div className="login-btn" >Log In</div></Link>
          <Link to='/signup'><div className="signup-btn">Sign Up</div></Link>
          </div>)}
        </div>
      </div>
    </div>
    <div className={searchBarClicked?"searchbox-container":"hideSearchBar"}>
      <div className="searchbox-btns">
        <TfiSearch id="searchbox-srch-btn"/>
        <div className="searchbox-input">
          <input type="text" value={inputValue} onChange={debounceSearch}/>
        </div>
        <div className="searchbox-closebtn">Clear<span>
        <AiFillCloseCircle onClick={()=>setSearchBarClicked(false)}/></span>
        </div>
      </div> 
      <div className="searchbox-results">
        {inputValue?(<SearchSection val={inputValue}/>):(<SearchTreandingSong/>)}     
      </div>
    </div>
    <aside className={profileClicked?"profile-dropedown":"noprofile"}>
      <div className="profile-dropedown-section">
      <Link to='/listening-history'><p onClick={()=>setProfileClicked(!profileClicked)}>My Music</p></Link> 
        <Link to='/subscription'><p onClick={()=>setProfileClicked(!profileClicked)}>Subscription</p></Link> 
        <Link to="/change-password"><p onClick={()=>setProfileClicked(!profileClicked)}>Change Password</p></Link>
        <p onClick={handleLogOut}>Log Out</p>
      </div>
    </aside>
    <aside className={musicClicked?"musicbox-container":"hideSearchBar"} >
      <div className="musicbox-top">
          <h2>What's Hot on jiosaavn</h2>
          <RxCross2 onClick={()=>setMusicClicked(false)} className="m-close-bar"/>           
      </div>
      <div className="musicbox-results">  
        <p onClick={()=>handleMusicClicked('NewSongs','/new-releases')}>New Releases</p>
        <p onClick={()=>handleMusicClicked('TopPlaylist','/featured-playlists')}>Top PlayList</p>
        <p onClick={()=>handleMusicClicked('TopCharts','/charts')}>Top Charts</p>
        <p onClick={()=>handleMusicClicked('TopArtists','/top-artists')}>Top Artist</p>
      </div>
    </aside>
  </> 
)
}
 
 

export default Topnavbar;