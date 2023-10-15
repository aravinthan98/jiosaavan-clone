import {useCurrentPlayingContext} from '../../context/currentlyPlayingContext'

import './myFavoriteSection.css';
import {PiUserBold} from 'react-icons/pi'
import FavoriteSongs from './favoriteSong'
function FavoriteSection(){
    const{profile}=useCurrentPlayingContext();

    
    // let resultComponenet;

    // switch (seletedResult) {
    //     case 'Artists':
    //         resultComponenet= <ArtistResultCard selectedData={artistData}/>;
    //       break;
    //     case 'Songs':
    //         resultComponenet=<SongResultCard selectedData={songeData}/>;
    //       break;
    //     case 'Albums':
    //         resultComponenet= <AlbumResultCard selectedData={albumData}/>;
    //       break;
    //     case 'Podcasts':
    //         resultComponenet=  <div>No Result Found</div>;
    //       break;
    //     default:
    //         resultComponenet=<div>No Result Found</div>;
    //   }
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
                
                <div className='searchresult-sectionbar'>
                        <p >Playlists</p>
                        <p >Songs</p>
                        <p >Albums</p>
                        <p >Podcasts</p>
                        <p>Artists</p>
                        <p >Artists</p> 
                </div>
            </div>
            <div className='searchresult-detailsection'>
                {/* {resultComponenet} */}
                <FavoriteSongs/>
            </div>
        </div>
    )
}
export default FavoriteSection;