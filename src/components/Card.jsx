import React from 'react';
import './Card.css';
import {TbPlayerPlayFilled} from 'react-icons/tb'
import { useCurrentPlayingContext } from '../context/currentlyPlayingContext'



const Card = ({item,album}) => {

  const { setSongArr,setCurrentTrackIndex} = useCurrentPlayingContext();
  
 
  const handlePlaySong=(e,id)=>{
    e.stopPropagation();
    setSongArr(album)
    const curIndex=album.findIndex(object => {
      return object.songId === id;
    });
    setCurrentTrackIndex(curIndex);
  }
  return (
    <div className="card" key={item.songId}>
      <img src={item.image}  className='card-image' alt="movie" onClick={(e)=>handlePlaySong(e,item.songId)}/>
      <div className='card-background'>
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