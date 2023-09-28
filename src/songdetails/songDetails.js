
import React from "react";
import './songDetails.css';
import {AiOutlineHeart} from 'react-icons/ai';
import {FiMoreHorizontal} from 'react-icons/fi'
import {ImPlay2} from 'react-icons/im';
import {RxCrossCircled} from 'react-icons/rx';


function SongDetails(){

    return(
        <div className="details-section">
            <div className="details-section-top">
                <div className="d-image"><img src="https://c.saavncdn.com/973/Vikram-Tamil-2022-20220515182605-500x500.jpg"/></div>
                <div className="d-description">
                    <div className="d-description-top">
                    <h1>Porkanda Singam</h1>
                    <p>Vikram  by Anirudh Ravichander, Ravi G</p>
                    <p>Song  ·  4,368,540 Plays  ·  3:18  ·  Tamil</p>
                    <p>(P) 2022 Sony Music Entertainment India Pvt. Ltd.</p>
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
                        <p className="d-s-name">Once Upon a Time</p>
                        <p className="d-s-artist">Anirudh Ravichander,Ravi G</p>
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