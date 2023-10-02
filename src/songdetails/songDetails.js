
import React from "react";
import './songDetails.css';
import {AiOutlineHeart} from 'react-icons/ai';
import {FiMoreHorizontal} from 'react-icons/fi'
import {ImPlay2} from 'react-icons/im';
import {useCurrentPlayingContext} from '../context/currentlyPlayingContext'

function SongDetails(){
    const {selectedSong}=useCurrentPlayingContext()
   

    return(
        <div className="details-section">
            <div className="details-section-top">
                <div className="d-image"><img src={selectedSong!==null?selectedSong.thumbnail:"https://c.saavncdn.com/973/Vikram-Tamil-2022-20220515182605-500x500.jpg"} alt="songImage"/></div>
                <div className="d-description">
                    <div className="d-description-top">
                    <h1>{selectedSong!==null?selectedSong.title:" "}</h1>
                    <p> by {selectedSong!==null?selectedSong.artist[0].name:" "}</p>
                    <p>No Details</p>
                    {/* <p>No Details</p> */}
                    </div>
                    <div className="d-btn-section">
                        <div className="d-play-btn">Play</div>
                        <div className="d-favicon"><AiOutlineHeart id="d-fav"/></div>
                        <div className="d-moreicon"><FiMoreHorizontal id="d-more"/></div>
                    </div>

                </div>
            </div>
            <div className="details-section-buttom">
                <div className="d-songcard">

                    <div className="d-b-des">
                        <p className="d-ply"><ImPlay2/></p>
                        <p className="d-s-name">{selectedSong!==null?selectedSong.title:" "}</p>
                        <p className="d-s-artist">{selectedSong!==null?selectedSong.artist[0].name:" "}</p>
                    </div>
                        
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
            </div>
        </div>
    )

}
export default SongDetails;