import React,{useState} from "react";
import './topNavBar.css';
import { Link } from "react-router-dom";
function Topnavbar(){
 
    return(
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
      <div className='midnav'>
      <input type='text' className='searchbar' placeholder="Search here"/>
      </div>
      <div className='rightnav'>
        <div>Music Language</div>
        <Link to='/login'><div className="login-btn" >Log In</div></Link>
        <Link to='/login'><div className="signup-btn">Sign Up</div></Link>
      </div>
      </div>
      </div>
    )
}

export default Topnavbar;