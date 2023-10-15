import {useCurrentPlayingContext} from '../../context/currentlyPlayingContext';
import './SearchResultSection.css';
import {TbPlayerPlayFilled} from 'react-icons/tb'

const ArtistResultCard = ({ selectedData}) => {
    const { setSongArr,setCurrentTrackIndex} = useCurrentPlayingContext();
    
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
        console.log("searchArtistfetchResult",artistData);
        console.log("artistName",artistName);
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
        console.log("searchArtistResult",searchArtistResult);
      } catch (error) {
        console.error("error:searchArtistResult:", error);
   
      }
    }
    const handleArtistDetails=(e,item)=>{
      e.stopPropagation();
      fetchArtistData(item.title)
      
      
    }
    return (
        <div className="searchresult-alllist" >
          {selectedData.map((item,index) => (
           <div className="card" key={index}>
           <img src={item.image} alt="movie" />
           <div className='moodscard-hovercontent'><button onClick={(e)=>handleArtistDetails(e,item)} className='card-ply-btn'><TbPlayerPlayFilled className='card-ply-icon'/></button></div>
           <h4>{item.title}</h4>
           <p></p>
         </div>
          ))}
          
        </div>
      
    )
  }
  
  export default ArtistResultCard;