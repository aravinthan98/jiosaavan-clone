import React from 'react';
import './Card.css';
import {TbPlayerPlayFilled} from 'react-icons/tb'
import { useCurrentPlayingContext } from '../context/currentlyPlayingContext';
import { useNavigate } from 'react-router';



const Card = ({item,album}) => {

  const navigate =useNavigate();
  const { setSongArr,setCurrentTrackIndex,setSongPageIndex,setSongPageArr,setSongObject} = useCurrentPlayingContext();
  
 
  const handlePlaySong=(e,id)=>{
    e.stopPropagation();
    setSongArr(album)
    const curIndex=album.findIndex(object => {
      return object.songId === id;
    });
    setCurrentTrackIndex(curIndex);
  }
  const handleSongPage=(id,song)=>{
    setSongObject(song);
    setSongPageArr(album);
    const curIndex=album.findIndex(object => {
      return object.songId === id;
    });
    setSongPageIndex(curIndex);
    
    return navigate(`/songDetailPage/${id}`)
  }
  return (
    <div className="card" key={item.songId}>
      <img src={item.image}  className='card-image' alt="movie" onClick={()=>handleSongPage(item.songId,item)}/>
      <div className='card-background' onClick={()=>handleSongPage(item.songId,item)}>
        <button onClick={(e)=>handlePlaySong(e,item.songId)} className='card-ply-btn'>
          <TbPlayerPlayFilled className='card-ply-icon'/>
        </button>
      </div>
      <h4>{item.title}</h4>
      <p>{item.artist}</p>
    </div>
  )
}

export default Card