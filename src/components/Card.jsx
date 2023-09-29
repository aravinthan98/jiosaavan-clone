import React from 'react';
import {useCurrentPlayingContext} from '../context/currentlyPlayingContext'

const Card = ({item}) => {
    const {setSelectedSong}=useCurrentPlayingContext();
  return (
    <div className="card">
              <img src={item.thumbnail} onClick={() => setSelectedSong(item)} alt="movie"/>
              <h4>{item.title}</h4>
              <p>{item.artist[0].name}</p>
    </div>
  )
}

export default Card
