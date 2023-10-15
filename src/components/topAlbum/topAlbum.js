import Carousel from "react-multi-carousel";
import {useState,useEffect} from "react";
import "react-multi-carousel/lib/styles.css";
import './topAlbum.css'
import {TbPlayerPlayFilled} from 'react-icons/tb'
import { useCurrentPlayingContext } from "../../context/currentlyPlayingContext";
import LoaderFn from "../loader/Loader";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
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

function TopAlbum(){
  const{setSongArr,setCurrentTrackIndex}=useCurrentPlayingContext();
    const [album, setAlbum] = useState([]);
   
    const handleAlbumDetails=(e,song)=>{
      e.stopPropagation();
      console.log("song.album",song.album);
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
    const fetchSongs = () => {
        // Replace 'YOUR_PROJECT_ID' with your actual project ID
        fetch('https://academics.newtonschool.co/api/v1/music/album?limit=14', {
          headers: {
            'projectId': 'f104bi07c490',
          },
        })
          .then((response) => response.json())
          .then((data) => {
            // console.log("data",data);
            const albumData=data?.data.map((item) => ({
              key: item._id,
              image: item.image,
              title: item.title || "",
              audio: "",
              artist:
                (item.artists && item.artists[0] && item.artists[0].name) || "",
              mood: item.mood || "",
              album: item.songs,
              songId: item._id,
            }));
           
                setAlbum(albumData);

        })
          .catch((error) => console.error('Error:', error));
      };

      useEffect(() => {
        fetchSongs();         
      }, []);


return(
<Carousel 
responsive={responsive}
infinite={true}
className="album-list"
>
    {album.length===0?(<LoaderFn/>):(
            album.map((item)=>(
              
            <div className="card" key={item.songId}>
                <img src={item.image} alt="albumlogo"/>
                <div className='card-background'><button onClick={(e)=>handleAlbumDetails(e,item)} className='card-ply-btn'><TbPlayerPlayFilled className='card-ply-icon'/></button></div>
                <h4>{item.title}</h4>
                <p>{item.artist}</p>
            </div>
            ))         
      )}
</Carousel>
)
}
export default TopAlbum;