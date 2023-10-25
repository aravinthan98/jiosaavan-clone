import {VscHistory} from 'react-icons/vsc';
import {CgMusicNote} from 'react-icons/cg';
import {RiAlbumLine} from 'react-icons/ri';
import {MdOutlinePodcasts} from 'react-icons/md';
import {LiaMicrophoneAltSolid} from 'react-icons/lia';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useCurrentPlayingContext } from '../../context/currentlyPlayingContext';
import './sideNavbar.css'
function SideNavbar(){
    const navigate=useNavigate();

    const{login,setLoginIndicator}=useCurrentPlayingContext();


    const handleMymusicSection=()=>{
        if(login){
            return navigate('/my-music')
        }
        else{
            setLoginIndicator('pre-login')
        }
    }
    return(
        <div className="sidebar">
        <h4 className="brws">BROWSE</h4>
        <ul className="browse-item">
            <Link to='/newrelease'><li>New Releases</li></Link>
            <Link to='/topchart'><li >Top Charts</li></Link>
            <Link to='/topplaylist'><li  >Top Playlists</li></Link>
            <Link to='/podcast'><li  >Podcasts</li></Link>
            <Link to='/topartist'><li  >Top Artists</li></Link>
            <Link to='/radio'><li  >Radio</li></Link>
        </ul>
        <p className="lib">LIBRARY</p>
        <div className="library-item">
            <div><VscHistory/> <span> History</span></div>
            <div onClick={handleMymusicSection}><CgMusicNote/> <span> Songs</span></div>
            <div onClick={handleMymusicSection}><RiAlbumLine/> <span> Albums</span></div>
            <div onClick={handleMymusicSection}><MdOutlinePodcasts/> <span> Podcasts</span></div>
            <div onClick={handleMymusicSection}><LiaMicrophoneAltSolid/> <span> Artists</span></div>
            
        </div>

     
    </div>
    )
}

export default SideNavbar;