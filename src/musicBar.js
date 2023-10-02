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
import {GiPauseButton} from 'react-icons/gi';
import {MdVolumeOff} from 'react-icons/md';
// import Queue from "./queuePage/queue";

import {GrContract} from 'react-icons/gr';
import { Link } from "react-router-dom";
import { useCurrentPlayingContext } from "./context/currentlyPlayingContext";

function LiveMusic(){
    const {selectedSong,setSelectedSong,songArr}=useCurrentPlayingContext()

    const[expand,setExpand]=useState(false) 
    const [playing, setPlaying] = useState(false); 
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);
    const [currentTrack, setCurrentTrack] = useState(0);

  
    const audioRef = useRef(null);

   
    const expandClick=()=>{
        
        setExpand(true);
       
    }
    const handleshrink=()=>{
        setExpand(false);
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

    const handleTimeUpdate = () => {
        setCurrentTime(audioRef.current.currentTime);
        setDuration(audioRef.current.duration);
      };

      const handleVolumeChange = (e) => {
        const newVolume = e.target.value;
        setVolume(newVolume);
        audioRef.current.volume = newVolume;
       
      };
      
      const handleMute=()=>{   
        setVolume(0);
        audioRef.current.volume = 0;
      }

    //   const handleSeek = (e) => {
    //     const newTime = e.target.value;
    //     setCurrentTime(newTime);
    //     audioRef.current.currentTime = newTime;
    //   };

    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = Math.floor(timeInSeconds % 60);
        return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
          2,
          "0"
        )}`;
      };

      useEffect(() => {
    // Handle automatic playback of the next track when current track ends
    audioRef.current.addEventListener("ended", handleNextTrack);

    // Cleanup the event listener when the component unmounts
    return () => {
      audioRef.current.removeEventListener("ended", handleNextTrack);
    };
  }, [currentTrack]);
      const handleNextTrack = () => {
        // if (isShuffleOn) {
        //   const nextShuffledIndex = Math.floor(
        //     Math.random() * shuffledTracks.length
        //   );
        //   setCurrentTrack(nextShuffledIndex);
        // } 
      
        if (currentTrack < songArr.length - 1) {
          setCurrentTrack((prevTrack) => prevTrack + 1);
          setSelectedSong(songArr[currentTrack])
        }
        //  else if (isLoopOn) {
        //   setCurrentTrack(0);
        // }
      };
    
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
                    onTimeUpdate={handleTimeUpdate}
                    // onEnded={handleNextTrack} // This triggers next track when the current one ends
                    controls
                    autoPlay
                    style={{display:"none"}}
                />
                <BiRepeat className="plyrepeat"/>
                <TbPlayerSkipBackFilled className="plyback"/>
                
            {playing ? <GiPauseButton onClick={playing ? handlePause : handlePlay}/> : <TbPlayerPlayFilled onClick={playing ? handlePause : handlePlay}/>}
                <TbPlayerSkipForwardFilled className="plyskip" onClick={handleNextTrack}/>
                <PiShuffle className="plyshuffle"/>
            </div>
            <div className="rightb">
                <p>{formatTime(currentTime)}/{formatTime(duration)}</p>
                <TfiMoreAlt/>
               
                <div className="volume-sec"
                //  onMouseEnter={handleMouseEnter}
                    // onMouseLeave={handleMouseLeave}
                    >
                <input
                    className='volume-hovered' 
                    type="range"
                    min={0}
                    max={1}
                    step={0.01}
                    value={volume}
                    onChange={handleVolumeChange}
                />
                 {volume!=0?<RiVolumeUpFill className="volum-btn" onClick={handleMute}/>
                 :<MdVolumeOff className="volum-btn"/>}
                </div>
                {expand?
                    (<Link to='/'><GrContract onClick={handleshrink} style={{color:"#3e3e3e"}}/></Link>):(<Link to='/queue'><CgArrowsExpandRight onClick={expandClick} style={{color:"#3e3e3e"}}/></Link>)
                }            
                {/* <GrContract onClick={handleShrink}/> */}

               
            </div>
        </div>

    )
}
export default LiveMusic;
