import React from 'react';
import { useCurrentPlayingContext } from '../context/currentlyPlayingContext'

const Card = ({ item,gtype }) => {
  const { setSelectedSong ,setGenere} = useCurrentPlayingContext();
  
  const handleDetails=(id)=>{
    setSelectedSong(item);
    setGenere(gtype);
    console.log("id",id);
  }
  return (
    <div className="card">
      <img src={item.thumbnail} onClick={() => handleDetails(item._id)} alt="movie" />
      <h4>{item.title}</h4>
      <p>{item.artist[0].name}</p>
    </div>
  )
}

export default Card