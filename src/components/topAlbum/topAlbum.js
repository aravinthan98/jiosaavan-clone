import Carousel from "react-multi-carousel";
import {useState,useEffect} from "react";
import "react-multi-carousel/lib/styles.css";
import './topAlbum.css'
import {TbPlayerPlayFilled} from 'react-icons/tb'
import { useCurrentPlayingContext } from "../../context/currentlyPlayingContext";
import LoaderFn from "../loader/Loader";
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
};;

function TopAlbum(){
  const navigate=useNavigate();
  const{setSongArr,setCurrentTrackIndex,setSongPageIndex,setSongPageArr,setSongObject}=useCurrentPlayingContext();
    const [album, setAlbum] = useState([]);
   
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
    const fetchSongs = () => {
      
        fetch('https://academics.newtonschool.co/api/v1/music/album?limit=14', {
          headers: {
            'projectId': 'f104bi07c490',
          },
        })
          .then((response) => response.json())
          .then((data) => {
            
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
                <img src={item.image} alt="albumlogo" onClick={()=>handleSongPage(item.songId,item)}/>
                <div className='card-background hovercard' onClick={()=>handleSongPage(item.songId,item)}>
                  <button onClick={(e)=>handleAlbumDetails(e,item)} className='card-ply-btn'><TbPlayerPlayFilled className='card-ply-icon'/></button></div>
                <h4>{item.title}</h4>
                <p>{item.artist}</p>
            </div>
            ))         
      )}
</Carousel>
)
}
export default TopAlbum;