import React, { useState ,useEffect} from "react";
import './topNavBar.css';
import { Link } from "react-router-dom";
import {TfiSearch} from 'react-icons/tfi';
import {AiFillCloseCircle} from 'react-icons/ai'
import Corrosal from "../corrosal/Corrosal";
import  SearchSection  from "../searchSection/SearchSection";
import {useCurrentPlayingContext} from '../../context/currentlyPlayingContext'
import SearchTreandingSong from "./SearchTreandingSong";

function Topnavbar(){
 
  const[inputValue,setInputValue]=useState('')
  const{searchBarClicked,setSearchBarClicked,login,profile}=useCurrentPlayingContext();

  
  const debounceSearch = (e) => {
    setInputValue(e.target.value);
    // console.log("work")
    
  }

    return(
      <>
      <div className="sidenav">
        <div className='navbar'>
      <div className='leftnav'>
      <Link to='/'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/JioSaavn_Logo.svg/1024px-JioSaavn_Logo.svg.png' alt="logo"/>
      </Link>
      <div id="mus-pod">
      <div className="mus">Music</div>
      <div  className="pod">Podcasts</div>
      </div>
      <Link to='/subscription'>
      <div className="gopro">Go Pro</div>
       </Link>
      
      </div>
      <div className='midnav' onClick={()=>setSearchBarClicked(true)}>
        <p>Search</p>
      {/* <input type='text' className='searchbar' placeholder="Search here" /> */}
      </div>
      <div className='rightnav'>
        <div>Music Language</div>
        {login?(<div className='myprofile-section-top'>
                    <div className='myprofile-logo-top'><img src='https://staticfe.saavn.com/web6/jioindw/dist/1696482270/_i/default_images/default-user-500x500.jpg' className='profile-logo' alt='my-logo'/></div>
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
            {inputValue?(<SearchSection val={inputValue}/>):(<SearchTreandingSong/>)

            }
          

              
          </div>
        </div>
        </> 
    )
}
 
 

export default Topnavbar;