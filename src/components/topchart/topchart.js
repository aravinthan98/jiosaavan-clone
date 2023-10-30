
import React,{useState,useEffect} from 'react';
import { useCurrentPlayingContext } from '../../context/currentlyPlayingContext';

import {TbPlayerPlayFilled} from 'react-icons/tb'
import { useNavigate } from 'react-router';
function TopChart(){
    const {setCurrentTrackIndex,setSongArr,setSongPageIndex,setSongPageArr,setSongObject} = useCurrentPlayingContext();
    const [weeklyTop, setweeklyTop] = useState([])
  
    const navigate=useNavigate();


     function fetchSongs() {
        try{
        fetch('https://academics.newtonschool.co/api/v1/music/song?filter={"featured":"Top 20 of this week"}&limit=20', {
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
        <h1>Top Charts</h1>
        <div className="newrelease-caro">
            
            {weeklyTop.length!==0&& weeklyTop.map((item,index)=>(
                <div className="card" key={item.songId}>
                <img src={item.image}  className='card-image' alt="movie" onClick={()=>handleSongPage(item.songId,item)} />
                <div className='card-background' onClick={()=>handleSongPage(item.songId,item)}>
                  <button onClick={(e)=>handlePlaySong(e,item.songId)} className='card-ply-btn'><TbPlayerPlayFilled className='card-ply-icon'/></button></div>
                <h4>{item.title}</h4>
                <p>{item.artist}</p>
                </div>

             ))}
         </div>
         </div>
)      
              
}
export default TopChart;