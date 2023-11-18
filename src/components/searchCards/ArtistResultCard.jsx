import {useCurrentPlayingContext} from '../../context/currentlyPlayingContext';
import './SearchResultSection.css';
import {TbPlayerPlayFilled} from 'react-icons/tb'
import { useNavigate } from 'react-router';
const ArtistResultCard = ({ selectedData}) => {
  const navigate=useNavigate();
  const { setSongArr,setCurrentTrackIndex,setSongPageIndex,setSongPageArr,setSongObject} = useCurrentPlayingContext();
    
    const fetchArtistData = async (artistName) => {
      try {  
        const artistSongRes =  await fetch(
          `https://academics.newtonschool.co/api/v1/music/song?limit=1000`,
          {
            headers: {
              'projectID': 'f104bi07c490',
            },
          }
        );
        const artistData = await artistSongRes.json();      
        const fetchResultFilter=artistData.data.filter(obj => {
          return obj.artist.some(item => item.name === artistName);
        });
        const searchArtistResult=fetchResultFilter.map((item) => ({
          key: item._id,
          image: item.thumbnail,
          title: item.title || "",
          audio: item.audio_url,
          artist:
            (item.artist && item.artist[0] && item.artist[0].name) || "",
          mood: item.mood || "",
          album: "",
          songId: item._id,
        }));     
        setSongArr(searchArtistResult); 
        setCurrentTrackIndex(0);        
      } 
      catch (error) {
        console.error("error:searchArtistResult:", error);   
      }
    }
    const fetchArtistSongData = async (artistName) => {
      try { 
        const artistSongRes =  await fetch(
          `https://academics.newtonschool.co/api/v1/music/song?limit=1000`,
          {
            headers: {
              'projectID': 'f104bi07c490',
            },
          }
        );
        const artistData = await artistSongRes.json();       
        const fetchResultFilter=artistData.data.filter(obj => {
          return obj.artist.some(item => item.name === artistName);
        });
        const searchArtistResult=fetchResultFilter.map((item) => ({
          key: item._id,
          image: item.thumbnail,
          title: item.title || "",
          audio: item.audio_url,
          artist:
            (item.artist && item.artist[0] && item.artist[0].name) || "",
          mood: item.mood || "",
          album: "",
          songId: item._id,
        }));      
        setSongPageArr(searchArtistResult)        
      } catch (error) {
        console.error("error:searchArtistResult:", error);   
      }
    }
    const handleArtistDetails=(e,item)=>{
      e.stopPropagation();
      fetchArtistData(item.title);
    }
    const handleSongPage=(id,song)=>{
      setSongObject(song)    
      fetchArtistSongData(song.title)    
       setSongPageIndex(0);       
       return navigate(`/songDetailPage/${id}`)
     }
return (
  <div className="searchresult-alllist" >
    {selectedData.map((item,index) => (
      <div className="roundcard" key={index}>
        <img src={item.image} alt="movie" onClick={()=>handleSongPage(item.songId,item)}/>
        <div className='roundcard-hovercontent hovercard'onClick={()=>handleSongPage(item.songId,item)}>
          <button onClick={(e)=>handleArtistDetails(e,item)} className='card-ply-btn'><TbPlayerPlayFilled className='card-ply-icon'/></button>
        </div>
        <h4>{item.title}</h4>
      </div>
    ))}     
  </div>
  
)
}
  
export default ArtistResultCard;