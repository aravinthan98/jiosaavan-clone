
import { Link } from "react-router-dom";
import './mobileNavbar.css';
import { useState } from "react";

function MobileTopNavbar(){
    const[barclicked,setBarclicked]=useState('music');


return(
      
      <div className="mobiletopnav">
      <div className='mobiletopnav-first'>
        <Link to='/'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/JioSaavn_Logo.svg/1024px-JioSaavn_Logo.svg.png' alt="logo"/>
        </Link>  

        <Link to='/languages'><div >Language</div></Link>   
       </div>

      <div className="mobiletopnav-second">
        <Link to='/'><div className={barclicked==="music"?"m-checkbar":"m-music"} onClick={()=>setBarclicked('music')}>Music</div></Link> 
        <Link to='/original-podcasts'><div className={barclicked==="podcast"?"m-checkbar":"m-pod"} onClick={()=>setBarclicked('podcast')}>Podcasts</div></Link> 
      </div>

      </div>
  
    )
}
export default MobileTopNavbar;