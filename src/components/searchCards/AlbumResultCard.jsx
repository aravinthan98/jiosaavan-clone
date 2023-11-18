import {useCurrentPlayingContext} from '../../context/currentlyPlayingContext';
import './SearchResultSection.css';
import {TbPlayerPlayFilled} from 'react-icons/tb';
import { useNavigate } from 'react-router';
const AlbumResultCard = ({ selectedData}) => {
  const navigate=useNavigate();
  const { setSongArr,setCurrentTrackIndex,setSongPageIndex,setSongPageArr,setSongObject} = useCurrentPlayingContext();
    
  const handleAlbumDetails=(e,song)=>{
    e.stopPropagation();    
    const albumSongsData=song.album?.map((item) => ({
      key: item._id,
      image: item.thumbnail,
      title: item.title || "",
      audio: item.audio_url,
      artist:
        song.artist|| "",
      mood: item.mood || "",
      album: "",
      songId: item._id,
    }));
    setSongArr(albumSongsData)

    setCurrentTrackIndex(0);
  
  }
  const handleSongPage=(id,song)=>{
    setSongObject(song);
    const albumSongsData=song.album?.map((item) => ({
      key: item._id,
      image: item.thumbnail,
      title: item.title || "",
      audio: item.audio_url,
      artist:
        song.artist|| "",
      mood: item.mood || "",
      album: "",
      songId: item._id,
    })); 
    setSongPageArr(albumSongsData);   
    setSongPageIndex(0);      
    return navigate(`/songDetailPage/${id}`)
  }
return (
  <div className="searchresult-alllist" >
    {selectedData.map((item,index) => (
      <div className="card" key={index}>
        <img src={item.image}  alt="movie" onClick={()=>handleSongPage(item.songId,item)}/>
        <div className='card-background hovercard' onClick={()=>handleSongPage(item.songId,item)}>
          <button onClick={(e)=>handleAlbumDetails(e,item)} className='card-ply-btn'><TbPlayerPlayFilled className='card-ply-icon'/></button>
        </div>
        <h4>{item.title}</h4>
        <p>{item.artist}</p>
      </div>
    ))}   
  </div> 
)
}
  
export default AlbumResultCard;