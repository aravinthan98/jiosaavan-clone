import {useCurrentPlayingContext} from '../../context/currentlyPlayingContext'

import './myFavoriteSection.css';

import FavoriteSongs from './favoriteSong'
import { Link } from 'react-router-dom';
import ComingSoonPage from '../../commingSoon/commingSoon';
function FavoriteSection(){
    const{profile}=useCurrentPlayingContext();

    const{seletedResult,setSeletedResult}=useCurrentPlayingContext();

    
    let resultComponenet;

    switch (seletedResult) {
        case 'MySongs':
            resultComponenet= <FavoriteSongs/>;
          break;
        // case 'MyAlbum':
        //     resultComponenet=<ComingSoonPage/>;
        //   break;
        // case 'MyPodcast':
        //     resultComponenet= <ComingSoonPage/>;
        //   break;
        // case 'MyArtist':
        //     resultComponenet=  <ComingSoonPage/>;
        //   break;
        // case 'MyHistory':
        //     resultComponenet=  <ComingSoonPage/>;
        // break;
        default:
            resultComponenet=<ComingSoonPage/>;
      }
     return(
        <div className='searchresult-section-expand'>
            <div className='searchresult-sectiontop'>
                <div className='myprofile-section'>
                    <div className='myprofile-logo'><img src='https://staticfe.saavn.com/web6/jioindw/dist/1696482270/_i/default_images/default-user-500x500.jpg' className='profile-logo' alt='my-logo'/></div>
                    <div className='myprofile-name-section'>
                        <h2>{profile.userName&& profile.userName}</h2>
                        <p className='pro-status'>Pro Expired</p>
                        <Link to='/subscription'><button className='pro-btn'>Go Pro</button></Link>
                    </div>
                </div>
                
                <div className='searchresult-sectionbar'>
                    <p className={seletedResult==="MySongs"?"barselected":"nobar"} onClick={()=>setSeletedResult("MySongs")}>Songs</p>
                    <p className={seletedResult==="MyAlbum"?"barselected":"nobar"} onClick={()=>setSeletedResult("MyAlbum")}>Albums</p>
                    <p className={seletedResult==="MyPodcast"?"barselected":"nobar"} onClick={()=>setSeletedResult("MyPodcast")}>Podcasts</p>
                    <p className={seletedResult==="MyArtist"?"barselected":"nobar"} onClick={()=>setSeletedResult("MyArtist")}>Artists</p> 
                    <p className={seletedResult==="MyHistory"?"barselected":"nobar"} onClick={()=>setSeletedResult("MyHistory")}>History</p> 
                </div>
                <hr className='myfav-bar'></hr>
            </div>
            <div className='searchresult-detailsection'>
          
                {resultComponenet}
            </div>
        </div>
    )
}
export default FavoriteSection;