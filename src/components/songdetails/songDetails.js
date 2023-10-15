
import React from "react";
import './songDetails.css';
import {AiOutlineHeart} from 'react-icons/ai';
import {FiMoreHorizontal} from 'react-icons/fi'
import {ImPlay2} from 'react-icons/im';
import {useCurrentPlayingContext} from '../../context/currentlyPlayingContext'


function SongDetails(){
    const {currentTrackIndex,songArr,setCurrentTrackIndex}=useCurrentPlayingContext()
   const handleDetailPlayButton=()=>{

   }
   const handleSongPlay=(id)=>{
    const songindex=songArr.findIndex(object => {
        return object.songId === id;

    });  
   
    setCurrentTrackIndex(songindex); 
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
                    {/* <p>No Details</p> */}
                    </div>
                    <div className="d-btn-section">
                        <div className="d-play-btn" onClick={handleDetailPlayButton}>Play</div>
                        <div className="d-favicon"><AiOutlineHeart id="d-fav"/></div>
                        <div className="d-moreicon"><FiMoreHorizontal id="d-more"/></div>
                    </div>

                </div>
            </div>
            <div className="details-section-buttom">
                {songArr.map((item,index)=>(
                <div className="d-songcard" key={item.songId}>                              
                    <div className="d-b-des">
                        <p>{index+1}</p>
                        <img src={item.length!==0?item.image:" "} alt="song-logo"/>
                        <div className='relatedsong-hovercontent' onClick={()=>handleSongPlay(item.songId)} >< ImPlay2 className='mini-ply-icon'/></div>
                        <p className="d-s-name">{item.length!==0?item.title:" "}</p>
                    </div>
                    <p className="d-s-artist">{item.length!==0 && item.artist?item.artist:" "}</p>
                    <div className="d-b-icons">
                    <div>
                        <p className="q-smpl fav"><AiOutlineHeart/></p> 
                    </div>
                    <div>
                        <p className="q-smpl more"><FiMoreHorizontal/></p>
                        <p>3:18</p>
                    </div>
                    </div>        
                </div>
                ))}
            </div>
        </div>
    )

}
export default SongDetails;