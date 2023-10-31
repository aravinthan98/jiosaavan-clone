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

    const{login,setLoginIndicator,setSeletedResult}=useCurrentPlayingContext();


    const handleMymusicSection=(nav,component)=>{
        if(login){
            setSeletedResult(component)
            return navigate(`${nav}`)
        }
        else{
            setLoginIndicator('pre-login')
        }
    }
    
    return(
        <div className="sidebar">
        <h4 className="brws">BROWSE</h4>
        <ul className="browse-item">
            <Link to='/new-releases'><li  onClick={()=>setSeletedResult('NewSongs')}>New Releases</li></Link>
            <Link to='/charts'><li value='TopCharts' onClick={()=>setSeletedResult('TopCharts')}>Top Charts</li></Link>
            <Link to='/featured-playlists'><li onClick={()=>setSeletedResult('TopPlaylist')}>Top Playlists</li></Link>
            <Link to='/original-podcasts'><li onClick={()=>setSeletedResult('TopPodcast')}>Podcasts</li></Link>
            <Link to='/top-artists'><li onClick={()=>setSeletedResult('TopArtists')}>Top Artists</li></Link>
            <Link to='/radio'><li  onClick={(e)=>setSeletedResult('Radio')}>Radio</li></Link>
        </ul>
        <p className="lib">MY LIBRARY</p>
        <div className="library-item">
            <div onClick={()=>handleMymusicSection("/listening-history","MyHistory")}><VscHistory/> <span> History</span></div>
            <div onClick={()=>handleMymusicSection("/my-music/songs","MySongs")}><CgMusicNote/> <span>Liked Songs</span></div>
            <div onClick={()=>handleMymusicSection("/my-music/albums","MyAlbum")}><RiAlbumLine/> <span> Albums</span></div>
            <div onClick={()=>handleMymusicSection("/my-music/podcasts","MyPodcast")}><MdOutlinePodcasts/> <span> Podcasts</span></div>
            <div onClick={()=>handleMymusicSection("/my-music/artists","MyArtist")}><LiaMicrophoneAltSolid/> <span> Artists</span></div>
            
        </div>

     
    </div>
    )
}

export default SideNavbar;