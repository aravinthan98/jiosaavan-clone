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
            <li >Top Charts</li>
            <li  >Top Playlists</li>
            <li  >Podcasts</li>
            <li  >Top Artists</li>
            <li  >Radio</li>
        </ul>
        <p className="lib">LIBRARY</p>
        <div className="library-item">
            <div><VscHistory/> <span> History</span></div>
            <div><CgMusicNote/> <span> Songs</span></div>
            <div><RiAlbumLine/> <span> Albums</span></div>
            <div><MdOutlinePodcasts/> <span> Podcasts</span></div>
            <div><LiaMicrophoneAltSolid/> <span> Artists</span></div>
        </div>

        <button className="playlist-btn"> +  New Playlist</button>
    </div>
    )
}

export default SideNavbar;