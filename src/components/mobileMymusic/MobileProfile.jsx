import React from "react";
import { useCurrentPlayingContext } from "../../context/currentlyPlayingContext";
import './MobileMyMusic.css'
import { Link } from "react-router-dom";

function MobileProfile(){  
    const{profile,login,setLogin}=useCurrentPlayingContext();
    const handleLogOut=()=>{
        if(login){
        localStorage.clear();
        setLogin(false)
        }
    }
return(
    <div className='mobile-mymusic-section'>
        <div className='mobile-mymusic-sectiontop'>
            <div className='myprofile-section'>
                <div className='myprofile-logo'><img src='https://staticfe.saavn.com/web6/jioindw/dist/1696482270/_i/default_images/default-user-500x500.jpg' className='profile-logo' alt='my-logo'/></div>
                <div className='myprofile-name-section'>
                    <h2>{profile.userName&& profile.userName}</h2>
                    <p className='pro-status'>Pro Expired</p>
                    <Link to='/subscription'><button className='pro-btn'>Go Pro</button></Link>
                </div>
            </div>           
            <div className='mobile-navlist'>
                <Link to='/change-password'><div className="my-list">Change Password</div></Link>
                <Link to='/subscription'><div className="my-list"> Subscription</div></Link>           
                <Link to='/'><div className="settings my-list" onClick={handleLogOut}> Log Out</div></Link> 
            </div>
        </div>   
    </div>
)

}
export default MobileProfile;