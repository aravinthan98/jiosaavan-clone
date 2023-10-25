import React,{useState,useEffect} from 'react';
import './topArtist.css'
import {TbPlayerPlayFilled} from 'react-icons/tb'
import { useCurrentPlayingContext } from '../../context/currentlyPlayingContext';

function TopArtist(){
  const {setCurrentTrackIndex,setSongArr} = useCurrentPlayingContext();
    const [artists, setArtists] = useState([]);
 
    const fetchSongs = () => {

        try{
        fetch('https://academics.newtonschool.co/api/v1/music/artist?limit=30', {
          headers: {
            'projectId': 'f104bi07c490',
          },
        })
          .then((response) => response.json())
          .then((data) => {        
              setArtists(data.data)
              
        })
      }
      catch(error){
        console.error(error);
      }
    }
      useEffect(() => {
        fetchSongs()        
      }, []);
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
          
        } catch (error) {
          console.error("error:searchArtistResult:", error);
     
        }
      }
      const handleArtistDetails=(e,item)=>{
        e.stopPropagation();
       
        fetchArtistData(item.name) 
        
      }

return(
        <div className='artist-container'>
          <h1>Top Artist</h1>
         <div className="artist-caro">
            {artists.map((item,index)=>(
            <div className="roundcard" key={index}>
                <img src={item.image} alt="movie" onClick={(e)=>handleArtistDetails(e,item)}/>
                <div className='roundcard-hovercontent'><button onClick={(e)=>handleArtistDetails(e,item)} className='card-ply-btn'><TbPlayerPlayFilled className='card-ply-icon'/></button></div>
                <h4>{item.name}</h4>
            </div>
            ))
            }
           
         </div>
        </div>


)
}
export default TopArtist;