
import {useState,useEffect} from "react";

import './topPlaylist.css'
import {TbPlayerPlayFilled} from 'react-icons/tb'
import { useCurrentPlayingContext } from "../../context/currentlyPlayingContext";
import LoaderFn from "../loader/Loader";

function TopPlayList(){
  const{setSongArr,setCurrentTrackIndex}=useCurrentPlayingContext();
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
    const fetchSongs = () => {
        // Replace 'YOUR_PROJECT_ID' with your actual project ID
        fetch('https://academics.newtonschool.co/api/v1/music/album?limit=24', {
          headers: {
            'projectId': 'f104bi07c490',
          },
        })
          .then((response) => response.json())
          .then((data) => {

            const newarray=data?.data.sort((a,b)=>{
                b=parseInt(b.release?.slice(0,4))
                a=parseInt(a.release?.slice(0,4))
                
                return  b - a;
            })
            const albumData=newarray?.map((item) => ({
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
    <div className="topplaylist-section">
    <h1>Top PlayList</h1>
    <div className="topplaylist-container">
    {album.length===0?(<LoaderFn/>):(
            album.map((item)=>(
              
            <div className="card" key={item.songId}>
                <img src={item.image} alt="albumlogo" onClick={(e)=>handleAlbumDetails(e,item)}/>
                <div className='card-background'><button onClick={(e)=>handleAlbumDetails(e,item)} className='card-ply-btn'><TbPlayerPlayFilled className='card-ply-icon'/></button></div>
                <h4>{item.title}</h4>
                <p>{item.artist}</p>
            </div>
            ))         
      )}
    </div>
    </div>
)
}
export default TopPlayList;