import React,{useState,useEffect} from 'react';
import './topArtist.css'
import {TbPlayerPlayFilled} from 'react-icons/tb'
import { useCurrentPlayingContext } from '../../context/currentlyPlayingContext';
import { useNavigate } from 'react-router';

function TopArtist(){
  const navigate=useNavigate();
  const {setCurrentTrackIndex,setSongArr,setSongPageIndex,setSongPageArr,setSongObject} = useCurrentPlayingContext();
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
            console.log("data.artist",data.data);  
             
              const artistSongsData=data.data?.map((item) => ({
                key: item._id,
                image: item.image,
                title: item.name || "",
                audio: "",
                artist:
                item.artist|| "",
                mood: item.mood || "",
                album: "",
                songs:item.songs||"",
                songId: item._id,
              }));
              setArtists(artistSongsData)
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
       
        fetchArtistData(item.title) 
        
      }
      
    const handleSongPage=(id,song)=>{
      console.log("artistsong",song)
     setSongObject(song)
    
     fetchArtistSongData(song.title)
    
      setSongPageIndex(0);
      
      return navigate(`/songDetailPage/${id}`)
    }

return(
        <div className='artist-container'>
          <h1>Top Artist</h1>
         <div className="artist-caro">
            {artists.length!==0&&artists.map((item,index)=>(
            <div className="roundcard" key={index}>
                <img src={item.image} alt="movie" onClick={()=>handleSongPage(item.songId,item)}/>
                <div className='roundcard-hovercontent hovercard' onClick={()=>handleSongPage(item.songId,item)}>
                  <button onClick={(e)=>handleArtistDetails(e,item)} className='card-ply-btn'><TbPlayerPlayFilled className='card-ply-icon'/></button></div>
                <h4>{item.title}</h4>
            </div>
            ))
            }
           
         </div>
        </div>


)
}
export default TopArtist;