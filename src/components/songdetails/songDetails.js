
import React from "react";
import './songDetails.css';
import {AiOutlineHeart} from 'react-icons/ai';
import {FiMoreHorizontal} from 'react-icons/fi'
import {ImPlay2} from 'react-icons/im';
import {AiFillHeart} from 'react-icons/ai'

import {useCurrentPlayingContext} from '../../context/currentlyPlayingContext'


function SongDetails(){
    const {currentTrackIndex,songArr,setCurrentTrackIndex,profile,login,setAddSong,favoriteSongs,
        SetFavoriteSongs,activateHeartId,setActivateHeartId,setLoginIndicator}=useCurrentPlayingContext()
   const handleDetailPlayButton=()=>{

   }
   const handleSongPlay=(id)=>{
    const songindex=songArr.findIndex(object => {
        return object.songId === id;

    });  
   
    setCurrentTrackIndex(songindex); 
   }
   const favoriteFetch=(songId)=>{
    var myHeaders = new Headers();
    myHeaders.append("projectId", "f104bi07c490");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${profile.token}`);

    var raw = JSON.stringify({
    "songId": `${songId}`
    });

    var requestOptions = {
    method: 'PATCH',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch("https://academics.newtonschool.co/api/v1/music/favorites/like", requestOptions)
    .then(response => response.json())
    .then((result) => {
        if(result.status==='success'){
            setAddSong((prev)=>prev+1);
        }
      
    })
    .catch(error => console.log('error', error));        
}

   const handleFavorite=(item,id)=>{
    
    if(login){
    const idCheck = activateHeartId.includes(id);
    
    if (idCheck) {
        const newIdArray=activateHeartId.filter((item)=>item!==id)
        const newObjectArray=favoriteSongs.filter((song)=>song.songId!==id)
        setActivateHeartId(newIdArray)
        SetFavoriteSongs(newObjectArray)
    } else {    
        const newIdArray=[...activateHeartId,id]
        const newObjectArray=[...favoriteSongs,item]
        setActivateHeartId(newIdArray)
        SetFavoriteSongs(newObjectArray)   
    }
   
    favoriteFetch(id) 
    
    }
    else{
        setLoginIndicator('pre-login')
    }
}
    return(
        <div className="details-section">
            <div className="details-section-top">
                <div className="d-image"><img src={songArr.length!==0?songArr[currentTrackIndex].image:"https://c.saavncdn.com/973/Vikram-Tamil-2022-20220515182605-500x500.jpg"} alt="songImage"/></div>
                <div className="d-description">
                    <div className="d-description-top">
                    <h1>{songArr.length!==0?songArr[currentTrackIndex].title:" "}</h1>
                    <p> by {songArr.length!==0?songArr[currentTrackIndex].artist:" "}</p>
                    <p>No Details</p>
                  
                    </div>
                    <div className="d-btn-section">
                        <div className="d-play-btn" onClick={handleDetailPlayButton}>Play</div>
                        <div className="d-favicon" onClick={()=>handleFavorite(songArr[currentTrackIndex],songArr[currentTrackIndex]?.songId)}>{activateHeartId.includes(songArr[currentTrackIndex]?.songId)?<AiFillHeart className="favorite-fill"/>:<AiOutlineHeart id="d-fav"/>}</div>
                     
                    </div>

                </div>
            </div>
            <div className="details-section-buttom">
                {songArr.map((item,index)=>(
                <div className="d-songcard" key={item.songId}>                              
                    <div className="d-b-des">
                        <p>{index+1}</p>
                        <img src={item.length!==0?item.image:" "} alt="song-logo" onClick={()=>handleSongPlay(item.songId)}/>
                        <div className='relatedsong-hovercontent' onClick={()=>handleSongPlay(item.songId)} >< ImPlay2 className='mini-ply-icon'/></div>
                        <p className="d-s-name">{item.length!==0?item.title:" "}</p>
                    </div>
                    <p className="d-s-artist">{item.length!==0 && item.artist?item.artist:" "}</p>
                    <div className="d-b-icons">
                    <div>
                        <p className="q-smpl fav"onClick={()=>handleFavorite(item,item?.songId)}>{activateHeartId.includes(item?.songId)?<AiFillHeart className="favorite-song"/>:<AiOutlineHeart/>}</p> 
                    </div>
                    <div>
                        <p className="q-smpl more"><FiMoreHorizontal/></p>
                        <p>0:20</p>
                    </div>
                    </div>        
                </div>
                ))}
            </div>
        </div>
    )

}
export default SongDetails;