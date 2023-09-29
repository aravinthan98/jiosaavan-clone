import React,{useState,useRef, useEffect} from "react"
import './musicBar.css'
import {BiRepeat} from 'react-icons/bi';
import {PiShuffle} from 'react-icons/pi';
import {TbPlayerSkipBackFilled} from 'react-icons/tb'
import {TbPlayerPlayFilled} from 'react-icons/tb'
import {TbPlayerSkipForwardFilled} from 'react-icons/tb';
import {TfiMoreAlt} from 'react-icons/tfi';
import {RiVolumeUpFill} from 'react-icons/ri';
import {CgArrowsExpandRight} from 'react-icons/cg';
import {GiPauseButton} from 'react-icons/gi'
// import Queue from "./queuePage/queue";

import {GrContract} from 'react-icons/gr';
import { Link } from "react-router-dom";
import { useCurrentPlayingContext } from "./context/currentlyPlayingContext";

function LiveMusic(){
    const {selectedSong}=useCurrentPlayingContext()

   console.log("selectedSong",selectedSong)
    const[expand,setExpand]=useState(false)
    // const[shrinkc,setShrink]=useState("shrink");

    // const handleShrink=()=>{
    //     setExpand(false);  
    //     props.extendclicked(false)
    // }
    const [playing, setPlaying] = useState(false);
    // const [expand,setExpand]=useState(false);
    // const [currentTime, setCurrentTime] = useState(0);
    // const [duration, setDuration] = useState(0);
    // const [volume, setVolume] = useState(1);
    // const [currentTrack, setCurrentTrack] = useState(0);
    // const [isLoopOn, setIsLoopOn] = useState(false);
    // const [isShuffleOn, setIsShuffleOn] = useState(false);
    // const [shuffledTracks, setShuffledTracks] = useState([]);
  

  
    const audioRef = useRef(null);

    const expandClick=()=>{
        
        setExpand(!expand);
       
    }
    const handlePlay = () => {
        audioRef.current.play();
        setPlaying(true);
      };
    
      const handlePause = () => {
        audioRef.current.pause();
        setPlaying(false);
      };
      
    useEffect(()=>{
        if(selectedSong!=null){
            handlePlay();
        }       
    },[selectedSong])
    
    return(

        
        <div className="live_music">
            <div className="leftb">
               <Link to='/songDetailPage'> <img src={selectedSong!==null?selectedSong.thumbnail:"https://c.saavncdn.com/973/Vikram-Tamil-2022-20220515182605-500x500.jpg"} width="50px" height="50px" alt="song_logo"/>
               </Link>
                <p>{selectedSong!==null?selectedSong.title:"Once upon a time"}<br/><span className="describe">{selectedSong!==null?selectedSong.artist[0].name:"Aniruth Ravichandran"}</span></p>
            </div>
            <div className="midb">
                <audio
                    ref={audioRef}
                    src={selectedSong?
                       
                        selectedSong.audio_url
                        :"https://pagalsong.in/uploads/systemuploads/mp3/Vikram/Once Upon A Time - Vikram 128 Kbps.mp3"
                    }
                    // onTimeUpdate={handleTimeUpdate}
                    // onEnded={handleNextTrack} // This triggers next track when the current one ends
                    controls
                    autoPlay
                    style={{display:"none"}}
                />
                <BiRepeat className="plyrepeat"/>
                <TbPlayerSkipBackFilled className="plyback"/>
                
            {playing ? <GiPauseButton onClick={playing ? handlePause : handlePlay}/> : <TbPlayerPlayFilled onClick={playing ? handlePause : handlePlay}/>}
                <TbPlayerSkipForwardFilled className="plyskip"/>
                <PiShuffle className="plyshuffle"/>
            </div>
            <div className="rightb">
                <p>0:00/0:00</p>
                <TfiMoreAlt/>
                <RiVolumeUpFill/>
                
                {expand?
                    (<Link to='/'><GrContract onClick={expandClick}/></Link>):(<Link to='/queue'><CgArrowsExpandRight onClick={expandClick}/></Link>)
                }            
                {/* <GrContract onClick={handleShrink}/> */}

               
            </div>
        </div>

    )
}
export default LiveMusic;
