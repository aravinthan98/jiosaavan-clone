import {useCurrentPlayingContext} from '../../context/currentlyPlayingContext'
import AlbumResultCard from './AlbumResultCard';
import ArtistResultCard from './ArtistResultCard';
import SongResultCard from './SongResultCard';
import './SearchResultSection.css';
function SearchResultSection(){
    const{songeData,albumData,artistData ,seletedResult,setSeletedResult}=useCurrentPlayingContext();
   
    let resultComponenet;
    switch (seletedResult) {
        case 'Artists':
            resultComponenet= <ArtistResultCard selectedData={artistData}/>;
          break;
        case 'Songs':
            resultComponenet=<SongResultCard selectedData={songeData}/>;
          break;
        case 'Albums':
            resultComponenet= <AlbumResultCard selectedData={albumData}/>;
          break;
        case 'Podcasts':
            resultComponenet=  <div>No Result Found</div>;
          break;
        default:
            resultComponenet=<div>No Result Found</div>;
      }
    return(
        <div className='searchresult-section-expand'>
            <div className='searchresult-sectiontop'>
                <h1>Search results</h1>
                <p></p>
                <div className='searchresult-sectionbar'>
                        <p className={seletedResult==="Playlists"?"barselected":"nobar"} onClick={()=>setSeletedResult("Playlists")}>Playlists</p>
                        <p className={seletedResult==="Songs"?"barselected":"nobar"} onClick={()=>setSeletedResult("Songs")}>Songs</p>
                        <p className={seletedResult==="Albums"?"barselected":"nobar"} onClick={()=>setSeletedResult("Albums")}>Albums</p>
                        <p className={seletedResult==="Podcasts"?"barselected":"nobar"} onClick={()=>setSeletedResult("Podcasts")}>Podcasts</p>
                        <p className={seletedResult==="Artists"?"barselected":"nobar"} onClick={()=>setSeletedResult("Artists")}>Artists</p>
                </div>
            </div>
            <div className='searchresult-detailsection'>
                {resultComponenet}
            </div>
        </div>
    )
}
export default SearchResultSection;