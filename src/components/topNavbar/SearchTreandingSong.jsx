import {ImPlay2} from 'react-icons/im'
import { useCurrentPlayingContext } from '../../context/currentlyPlayingContext';
import './topNavBar.css'
function SearchTreandingSong(){
    const {setSongArr,trendingSongData,setCurrentTrackIndex}=useCurrentPlayingContext();

    const handlePlaySong=(id)=>{
        const getSongIndex=trendingSongData.findIndex(object => {
            return object.songId === id;
          });
        setSongArr(trendingSongData);
        setCurrentTrackIndex(getSongIndex)
    }
    return (
        <div className="treandingresultcard-container">
        
          <h5>Trending Song</h5>
        <div className='treandingcards'>
         {Array.isArray(trendingSongData) && trendingSongData?.slice(0, 10).map((item)=>(
                                                 
            <div className="searchresultcard" key={item.key}>
                <div className="q-icon">                   
                    <img src={item.image} width="40px" alt="cardimage"
                     onClick={() => handlePlaySong(item.songId)}
                     />
                    <p className="ply"><ImPlay2/></p>
                </div>

                <div className="q-des">
                    <p className="q-s-name">{item.title}</p>
                </div>
            </div>
            
              ))} 
            </div>
        </div>
    )
}
export default SearchTreandingSong;