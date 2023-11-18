
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {useState,useEffect} from "react";
import { useCurrentPlayingContext } from "../../context/currentlyPlayingContext";
import {TbPlayerPlayFilled} from 'react-icons/tb';
import LoaderFn from '../loader/Loader';
import { useNavigate } from 'react-router';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 7,
    slidesToSlide: 7   
  },
  desktop: {
    breakpoint: { max: 3000, min: 979 },
    items: 7,
    slidesToSlide: 7
  },
  tablet: {
    breakpoint: { max: 979, min: 464 },
    items: 3,
    slidesToSlide: 3
  }, 
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items:2,
    slidesToSlide: 2
  }
};
function MelodiesSongs(){
  const navigate=useNavigate();
  const {setCurrentTrackIndex,setSongArr,setSongPageIndex,setSongPageArr,setSongObject} = useCurrentPlayingContext();
  const [melodies, setMelodies] = useState([]);

  const fetchSongs=()=>{    
    try{
      fetch('https://academics.newtonschool.co/api/v1/music/song?filter={"featured":"Evergreen melodies"}', {
        headers: {
          'projectId': 'f104bi07c490',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          const melodieSongData=data?.data.map((item) => ({
            key: item._id,
            image: item.thumbnail,
            title: item.title || "",
            audio: item.audio_url,
            artist:
              (item.artist && item.artist[0] && item.artist[0].name) || "",
            mood: item.mood || "",
            album: "",
            songId: item._id,
                  
          }))
          setMelodies(melodieSongData);     
      })
    }
    catch (error) {
      console.log("Error fetching Melodies data", error)
    }
  }
  useEffect(() => {
  fetchSongs();         
  }, []);
  
  const handlePlayMoods=(e,id)=>{
    e.stopPropagation();
    setSongArr(melodies)
    const curIndex=melodies.findIndex(object => {
      return object.songId === id;
    });
    setCurrentTrackIndex(curIndex)
  }  
  const handleSongPage=(id,song)=>{
    setSongObject(song)
    setSongPageArr(melodies);
    const curIndex=melodies.findIndex(object => {
      return object.songId === id;
    });
    setSongPageIndex(curIndex);    
    return navigate(`/songDetailPage/${id}`)
  }
return(
  <Carousel 
  responsive={responsive}
  infinite={true}
  className="album-list"
  >
    {melodies.length===0?(<LoaderFn/>):(
      melodies.map((item)=>(       
      <div className="card" key={item.songId}>
          <img src={item.image} alt="albumlogo" onClick={()=>handleSongPage(item.songId,item)}/>
          <div className='card-background hovercard' onClick={()=>handleSongPage(item.songId,item)}>
            <button onClick={(e)=>handlePlayMoods(e,item.songId)} className='card-ply-btn'><TbPlayerPlayFilled className='card-ply-icon'/></button></div>
          <h4>{item.title}</h4>
          <p>{item.artist}</p>
      </div>
      ))         
    )}
  </Carousel>
)
}
export default MelodiesSongs;