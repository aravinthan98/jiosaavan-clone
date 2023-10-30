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
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
      slidesToSlide: 7
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      slidesToSlide: 4
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items:2,
      slidesToSlide: 2
    }
  };
  
function WeeklyTopSongs(){
    const navigate=useNavigate();
    const {setCurrentTrackIndex,setSongArr,setSongPageIndex,setSongPageArr,setSongObject} = useCurrentPlayingContext();
    const[weeklyTop,setWeeklyTop]=useState([]);

    

    const fetchSongs=()=>{
     
        try{
            fetch('https://academics.newtonschool.co/api/v1/music/song?filter={"featured":"Top 20 of this week"}', {
              headers: {
                'projectId': 'f104bi07c490',
              },
            })
              .then((response) => response.json())
              .then((data) => {
                const weeklyTopSongData=data?.data.map((item) => ({
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
                setWeeklyTop(weeklyTopSongData); 
                
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
      setSongArr(weeklyTop)
      const curIndex=weeklyTop.findIndex(object => {
        return object.songId === id;
      });
      setCurrentTrackIndex(curIndex)
    }
    
const handleSongPage=(id,song)=>{
    setSongObject(song);
    setSongPageArr(weeklyTop);
    const curIndex=weeklyTop.findIndex(object => {
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
            {weeklyTop.length===0?(<LoaderFn/>):(
                    weeklyTop.map((item)=>(
                      
                    <div className="card" key={item.songId}>
                        <img src={item.image} alt="albumlogo" onClick={()=>handleSongPage(item.songId,item)}/>
                        <div className='card-background' onClick={()=>handleSongPage(item.songId,item)}>
                          <button onClick={(e)=>handlePlayMoods(e,item.songId)} className='card-ply-btn'><TbPlayerPlayFilled className='card-ply-icon'/></button></div>
                        <h4>{item.title}</h4>
                        <p>{item.artist}</p>
                    </div>
                    ))         
              )}
        </Carousel>
    )
}
export default WeeklyTopSongs;