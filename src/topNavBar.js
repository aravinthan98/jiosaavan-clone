import React,{useState} from "react";
import './topNavBar.css'
function Topnavbar(props){
  const[clog,setClog] =useState(false);
  const loginHandler=()=>{
      setClog(true);
      props.logclicked(true)
  }
    return(
      <div className="sidenav">
        <div className='navbar'>
      <div className='leftnav'>
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/JioSaavn_Logo.svg/1024px-JioSaavn_Logo.svg.png' alt="logo"/>
      <div>Music</div>
      <div>Podcasts</div>
      <div>Go Pro</div>
      </div>
      <div className='midnav'>
      <input type='text' className='searchbar' placeholder="Search here"/>
      </div>
      <div className='rightnav'>
        <div>Music Language</div>
        <div onClick={loginHandler}>Log In</div>
        <div>Sign Up</div>
      </div>
      </div>
      </div>
    )
}

export default Topnavbar;