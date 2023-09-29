import React from "react";
import './queue.css'
import { TfiMoreAlt } from 'react-icons/tfi';
import { ImPlay2 } from 'react-icons/im';
import { useState } from 'react';
import { RxCrossCircled } from 'react-icons/rx';
import { AiOutlineHeart } from 'react-icons/ai';
import { FiMoreHorizontal } from 'react-icons/fi';
import { PiDotsSixVerticalBold } from 'react-icons/pi';
import { useCurrentPlayingContext } from "../context/currentlyPlayingContext";
function Queue() {
    const { selectedSong } = useCurrentPlayingContext();
    const [checked, setChecked] = useState(true);
    const handleChange = () => {
        setChecked(!checked)
    }
    return (
        <div className="queue-page">
            <div className="page-left">
                <div className="q-img-container">
                    <img src={selectedSong !== null ? selectedSong.thumbnail : "https://c.saavncdn.com/973/Vikram-Tamil-2022-20220515182605-500x500.jpg"} />
                    <h3 className="img-title"><a href="#">{selectedSong !== null ? selectedSong.title : "Porkanda Singam"}</a></h3>
                    <p className="img-para"><a href="#">{selectedSong !== null ? selectedSong.artist[0].name : "Anirudh Ravichander"}</a>,<a href="#">Ravi G</a></p>
                </div>
            </div>
            <div className="page-right">
                <div className="q-navbar">
                    <h3>Queue</h3>
                    <div className="q-navele">
                        <p id="qmore"><TfiMoreAlt /></p>
                        <p>
                            <span id="save"> Save</span>
                            <span id="clear">Clear</span>
                        </p>
                    </div>
                </div>
                <hr className="line"></hr>
                <div className="q-songsection">
                    <div className="q-playsection">
                        <div className="songcard">
                            <div>
                                <p><PiDotsSixVerticalBold /></p>
                            </div>
                            <div className="q-card-det">
                                <div className="q-icon">
                                    <img src="https://c.saavncdn.com/973/Vikram-Tamil-2022-20220515182605-50x50.jpg" width="40px" />
                                    <p className="ply"><ImPlay2 /></p>
                                </div>

                                <div className="q-des">
                                    <p className="q-s-name">Porkanda Singam</p>
                                    <p className="q-s-artist">Anirudh Ravichander,Ravi G</p>
                                </div>
                            </div>
                            <div>
                                <p className="q-smpl del"><RxCrossCircled /></p>
                            </div>
                            <div>
                                <p className="q-smpl fav"><AiOutlineHeart /></p>
                            </div>
                            <div>
                                <p className="q-smpl more"><FiMoreHorizontal /></p>
                                <p>3:18</p>
                            </div>


                        </div>
                    </div>
                    <div className="q-autoplay">
                        <p>Autoplay more like this.</p>
                        <label className="switch">
                            <input type="checkbox" onChange={handleChange} checked={checked} />
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <div className="q-related-section">
                        <div className="songcard">
                            <div>
                                <p><PiDotsSixVerticalBold /></p>
                            </div>
                            <div className="q-card-det">
                                <div className="q-icon">
                                    <img src="https://c.saavncdn.com/973/Vikram-Tamil-2022-20220515182605-50x50.jpg" width="40px" />
                                    <p className="ply"><ImPlay2 /></p>
                                </div>

                                <div className="q-des">
                                    <p className="q-s-name">Once Upon a Time</p>
                                    <p className="q-s-artist">Anirudh Ravichander,Ravi G</p>
                                </div>
                            </div>
                            <div>
                                <p className="q-smpl del"><RxCrossCircled /></p>
                            </div>
                            <div>
                                <p className="q-smpl fav"><AiOutlineHeart /></p>
                            </div>
                            <div>
                                <p className="q-smpl more"><FiMoreHorizontal /></p>
                                <p>3:18</p>
                            </div>


                        </div>
                        <div className="songcard">
                            <div>
                                <p><PiDotsSixVerticalBold /></p>
                            </div>
                            <div className="q-card-det">
                                <div className="q-icon">
                                    <img src="https://c.saavncdn.com/973/Vikram-Tamil-2022-20220515182605-50x50.jpg" width="40px" />
                                    <p className="ply"><ImPlay2 /></p>
                                </div>

                                <div className="q-des">
                                    <p className="q-s-name">Vikram (Title Track)</p>
                                    <p className="q-s-artist">Anirudh Ravichander</p>
                                </div>
                            </div>
                            <div>
                                <p className="q-smpl del"><RxCrossCircled /></p>
                            </div>
                            <div>
                                <p className="q-smpl fav"><AiOutlineHeart /></p>
                            </div>
                            <div>
                                <p className="q-smpl more"><FiMoreHorizontal /></p>
                                <p>3:18</p>
                            </div>


                        </div>
                        <div className="songcard">
                            <div>
                                <p><PiDotsSixVerticalBold /></p>
                            </div>
                            <div className="q-card-det">
                                <div className="q-icon">
                                    <img src="https://c.saavncdn.com/973/Vikram-Tamil-2022-20220515182605-50x50.jpg" width="40px" />
                                    <p className="ply"><ImPlay2 /></p>
                                </div>

                                <div className="q-des">
                                    <p className="q-s-name">Wasted</p>
                                    <p className="q-s-artist">Anirudh Ravichander,Ravi G</p>
                                </div>
                            </div>
                            <div>
                                <p className="q-smpl del"><RxCrossCircled /></p>
                            </div>
                            <div>
                                <p className="q-smpl fav"><AiOutlineHeart /></p>
                            </div>
                            <div>
                                <p className="q-smpl more"><FiMoreHorizontal /></p>
                                <p>3:18</p>
                            </div>


                        </div>
                        <div className="songcard">
                            <div>
                                <p><PiDotsSixVerticalBold /></p>
                            </div>
                            <div className="q-card-det">
                                <div className="q-icon">
                                    <img src="https://c.saavncdn.com/973/Vikram-Tamil-2022-20220515182605-50x50.jpg" width="40px" />
                                    <p className="ply"><ImPlay2 /></p>
                                </div>

                                <div className="q-des">
                                    <p className="q-s-name">Porkanda Singam</p>
                                    <p className="q-s-artist">Anirudh Ravichander,Ravi G</p>
                                </div>
                            </div>
                            <div>
                                <p className="q-smpl del"><RxCrossCircled /></p>
                            </div>
                            <div>
                                <p className="q-smpl fav"><AiOutlineHeart /></p>
                            </div>
                            <div>
                                <p className="q-smpl more"><FiMoreHorizontal /></p>
                                <p>3:18</p>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Queue;