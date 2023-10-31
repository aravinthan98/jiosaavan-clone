
import './newRelease.css'
import React,{useState,useEffect} from 'react';
import { useCurrentPlayingContext } from '../../context/currentlyPlayingContext';

import { useNavigate } from 'react-router';

import {TbPlayerPlayFilled} from 'react-icons/tb'
function NewReleases(){
  const navigate=useNavigate();
    const {setCurrentTrackIndex,setSongArr,setSongPageIndex,setSongPageArr,setSongObject} = useCurrentPlayingContext();
    const [weeklyTop, setweeklyTop] = useState([])
  


     function fetchSongs() {
        try{
        fetch('https://academics.newtonschool.co/api/v1/music/song?filter={"featured":"Top 50 of this month"}&limit=50', {
          headers: {
            'projectId': 'f104bi07c490',
          },
        })
          .then((response) => response.json())
          .then((data) => {


            const newarray=data?.data.sort((a,b)=>{
                b=parseInt(b.dateOfRelease?.slice(0,4))
                a=parseInt(a.dateOfRelease?.slice(0,4))
                
                return  b - a;
            })
  
 
            const newRelease=newarray.map((item) => ({
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
            setweeklyTop(newRelease);

        })
        }
        catch (error) {
          console.log("Error fetching SoulSoother data", error)
        }
      };

      useEffect(() => {
        fetchSongs();         
      }, []);



const handlePlaySong=(e,id)=>{
    e.stopPropagation();
    setSongArr(weeklyTop)
    const curIndex=weeklyTop.findIndex(object => {
      return object.songId === id;
    });
    setCurrentTrackIndex(curIndex);
  }
  const handleSongPage=(id,song)=>{
 
    setSongObject(song)
    setSongPageArr(weeklyTop);
    const curIndex=weeklyTop.findIndex(object => {
      return object.songId === id;
    });
    setSongPageIndex(curIndex);
    
    return navigate(`/songDetailPage/${id}`)
  }

return(
        <div className='newRelease-page'>
        <h1>New Release</h1>
        <div className="newrelease-caro">
            
            {weeklyTop&& weeklyTop.map((item)=>(
                <div className="card" key={item.songId}>
                <img src={item.image}  className='card-image' alt="movie" onClick={()=>handleSongPage(item.songId,item)} />
                <div className='card-background hovercard' onClick={()=>handleSongPage(item.songId,item)}>
                  <button onClick={(e)=>handlePlaySong(e,item.songId)} className='card-ply-btn'><TbPlayerPlayFilled className='card-ply-icon'/></button></div>
                <h4>{item.title}</h4>
                <p>{item.artist}</p>
                </div>

             ))}
         </div>
         </div>
)      
              
}
export default NewReleases;