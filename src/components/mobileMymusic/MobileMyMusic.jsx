import React from "react";
import { useCurrentPlayingContext } from "../../context/currentlyPlayingContext";
import{CgMusicNote} from 'react-icons/cg';
import {RiAlbumLine} from 'react-icons/ri';
import {MdOutlinePodcasts} from 'react-icons/md'
import {LiaMicrophoneAltSolid} from 'react-icons/lia';
import {VscHistory} from 'react-icons/vsc'
import './MobileMyMusic.css'
import { Link } from "react-router-dom";
function MobileMyMusic(){
    const{profile}=useCurrentPlayingContext();
    return(
        <div className='searchresult-section-expand'>
        <div className='searchresult-sectiontop'>
            <div className='myprofile-section'>
                <div className='myprofile-logo'><img src='https://staticfe.saavn.com/web6/jioindw/dist/1696482270/_i/default_images/default-user-500x500.jpg' className='profile-logo' alt='my-logo'/></div>
                <div className='myprofile-name-section'>
                    <h2>{profile.userName&& profile.userName}</h2>
                    <p className='pro-status'>Pro Expired</p>
                    <button className='pro-btn'>Go Pro</button>
                </div>
            </div>
            
            <div className='mobile-navlist'>
            <Link to='/my-music/songs'><div className="my-list"><CgMusicNote/> <span>Liked Songs</span></div></Link>
            {/* <div className="my-list"><RiAlbumLine/> <span> Albums</span></div>
            <div className="my-list"><MdOutlinePodcasts/> <span> Podcasts</span></div>
            <div className="my-list"><LiaMicrophoneAltSolid/> <span> Artists</span></div>
            <div className="my-list"><VscHistory/> <span> History</span></div> */}
            <Link to='/my-music-sec/my-profile-m'><div className="settings my-list"> <span>Settings</span></div></Link>
            </div>
        </div>
       
    </div>
    )

}
export default MobileMyMusic;