import {useCurrentPlayingContext} from '../../context/currentlyPlayingContext'

import './TopCategories.css';
import TopArtist from '../topArtist/topArtist';
import NewReleases from '../newReleases/newRelease';
import TopPlayList from '../editorialPick/topPlaylist';
import TopChart from '../topchart/topchart';
import ComingSoonPage from '../../commingSoon/commingSoon';
import { Link } from 'react-router-dom';
function TopCategories(){
    const{seletedResult,setSeletedResult}=useCurrentPlayingContext();

    
    let resultComponenet;

    switch (seletedResult) {
        case 'TopArtists':
            resultComponenet= <TopArtist/>;
          break;
        case 'NewSongs':
            resultComponenet=<NewReleases/>;
          break;
        case 'TopPlaylist':
            resultComponenet= <TopPlayList/>;
          break;
        case 'TopCharts':
            resultComponenet=  <TopChart/>;
          break;
        default:
            resultComponenet=<ComingSoonPage/>;
      }
    return(
        <div className='topcategories-section'>
            <div className='mobilenav-logo'>
                <Link to='/'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/JioSaavn_Logo.svg/1024px-JioSaavn_Logo.svg.png' alt="logo"/>
                </Link>  
            </div>
            <div className='searchresult-sectiontop'>
                <div className='searchresult-sectionbar'>
                        <p className={seletedResult==="NewSongs"?"barselected":"nobar"} onClick={()=>setSeletedResult("NewSongs")}>New Releases</p>
                        <p className={seletedResult==="TopCharts"?"barselected":"nobar"} onClick={()=>setSeletedResult("TopCharts")}>Charts</p>
                        <p className={seletedResult==="TopPlaylist"?"barselected":"nobar"} onClick={()=>setSeletedResult("TopPlaylist")}>Top Playlists</p>
                        <p className={seletedResult==="TopArtists"?"barselected":"nobar"} onClick={()=>setSeletedResult("TopArtists")}>Top Artists</p>
                </div>
            </div>
            <hr className='cat-bar'></hr>
            <div className='topcategories-detailsection'>
                {resultComponenet}
            </div>
        </div>
    )
}
export default TopCategories;