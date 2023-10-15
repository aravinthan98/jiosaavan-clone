import {VscHistory} from 'react-icons/vsc';
import {CgMusicNote} from 'react-icons/cg';
import {RiAlbumLine} from 'react-icons/ri';
import {MdOutlinePodcasts} from 'react-icons/md';
import {LiaMicrophoneAltSolid} from 'react-icons/lia';
import { Link } from 'react-router-dom';
import './sideNavbar.css'
function SideNavbar(){
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
           <Link to='/my-music' ><div><CgMusicNote/> <span> Songs</span></div></Link>
           <Link to='/my-music' ><div><RiAlbumLine/> <span> Albums</span></div></Link>
           <Link to='/my-music' ><div><MdOutlinePodcasts/> <span> Podcasts</span></div></Link>
           <Link to='/my-music' ><div><LiaMicrophoneAltSolid/> <span> Artists</span></div></Link>
            
        </div>

        <button className="playlist-btn"> +  New Playlist</button>
    </div>
    )
}

export default SideNavbar;