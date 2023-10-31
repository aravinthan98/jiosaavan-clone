import React from "react";
import './mainContentPage.css'

import Corrosal from "../corrosal/Corrosal";
import TopAlbum from "../topAlbum/topAlbum";
import SadMoodSongs from "../pickMoods/SadMoodSongs";
import HappyMoodSongs from '../pickMoods/HappyMoodSongs';
import RomanticMoodSongs from "../pickMoods/RomanticSongs";
import ExcitedMoodSongs from "../pickMoods/ExcitedSongs";
import MelodiesSongs from "../pickMoods/Melodies";
import WeeklyTopSongs from "../pickMoods/weeklyTopSongs";
import SoulSootherSongs from "../pickMoods/SoulSoother";

function Maincontent(){

return(
       <div className="main-page">
        <h2 className="trending">Trending Songs</h2>     
        <Corrosal/>
        <h2 className="trending">Top Albums</h2>
        <TopAlbum/>
        <h2 className="trending">Sad Mood Songs</h2>
        <SadMoodSongs/>
        <h2 className="trending">Happy Mood Songs</h2>
        <HappyMoodSongs/>
        <h2 className="trending">Romantic Songs</h2>
        <RomanticMoodSongs/>
        <h2 className="trending">Weekly Top20 Songs</h2>
        <WeeklyTopSongs/>
        {/* <h2 className="trending">Excited Songs</h2>
        <ExcitedMoodSongs/>
        <h2 className="trending">Evergreen Melodies</h2>
        <MelodiesSongs/>
        <h2 className="trending">Weekly Top20 Songs</h2>
        <WeeklyTopSongs/>
        <h2 className="trending">SoulSoother Songs</h2>
        <SoulSootherSongs/> */}
       </div>
      
    )
}

export default Maincontent;