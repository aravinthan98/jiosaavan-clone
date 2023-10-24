import {useCurrentPlayingContext} from '../../context/currentlyPlayingContext';
import './SearchResultSection.css';
import {AiOutlineHeart} from 'react-icons/ai';
import {FiMoreHorizontal} from 'react-icons/fi';
import {ImPlay2} from 'react-icons/im'
const SongResultCard = ({ selectedData}) => {
    const { setSongArr,setCurrentTrackIndex} = useCurrentPlayingContext();
    
    const handleSongPlay=(id)=>{
      setSongArr(selectedData)
      // setSelectedSong(item);
      const curIndex=selectedData.findIndex(object => {
        return object.songId === id;
      });
      setCurrentTrackIndex(curIndex);
    }
    return (
        <div className="searchresult-songlist" >
          {selectedData.map((item,index) => (
            <div className="d-songcard" key={item.songId}>
              
              <div className="d-b-des">
                <p>{index+1}</p>
                  <p className="d-ply"><img src={item?item.image:""} alt="song-logo"/></p>
                  <div className='relatedsong-hovercontent' onClick={()=>handleSongPlay(item.songId)} >< ImPlay2 className='mini-ply-icon'/></div>
                  <p className="d-s-name">{item?item.title:" "}</p>
                               
              </div>
              <p className="d-s-artist">{item?item.artist:" "}</p>
                  
              <div className="d-b-icons">
              {/* <div>
                  <p className="q-smpl fav"><AiOutlineHeart/></p> 
              </div> */}
              <div>
                  <p className="q-smpl more"><FiMoreHorizontal/></p>
                  <p>0:20</p>
              </div>
              </div>        
          </div>
          ))}
          
        </div>
      
    )
  }
  
  export default SongResultCard;