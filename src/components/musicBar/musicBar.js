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
import { useLocation } from "react-router";


import {GrContract} from 'react-icons/gr';
import { Link } from "react-router-dom";
import { useCurrentPlayingContext } from "../../context/currentlyPlayingContext";

function LiveMusic(){
  const {pathname}=useLocation();
    const {currentTrackIndex,setCurrentTrackIndex,songArr}=useCurrentPlayingContext()

    const[expand,setExpand]=useState(false) 
    const [playing, setPlaying] = useState(false); 
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);
    const [isLoopOn, setIsLoopOn] = useState(false);
    const [isShuffleOn, setIsShuffleOn] = useState(false);
  const [shuffledTracks, setShuffledTracks] = useState([]);

  const path=useRef('/');

    const audioRef = useRef(null);


 
    useEffect(() => {
      const shuffled = shuffleArray(songArr);
      setShuffledTracks(shuffled);
    }, [songArr]);
  
    function shuffleArray(array) {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    }


  
    const handlePlay = () => {
        audioRef.current.play();
        setPlaying(true);
      };

   
    
      const handlePause = () => {
        audioRef.current.pause();
        setPlaying(false);
      };
     

  
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


    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = Math.floor(timeInSeconds % 60);
        return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
          2,
          "0"
        )}`;
      };

      useEffect(() => {
          setPlaying(true)
      }, [currentTrackIndex]);
    const handleNextTrack = () => {
      if (isShuffleOn) {
        const nextShuffledIndex = Math.floor(
          Math.random() * shuffledTracks.length
        );
        setCurrentTrackIndex(nextShuffledIndex);
      }
      else if (currentTrackIndex < songArr.length - 1) {
        setCurrentTrackIndex((prevTrack) => prevTrack + 1);  
      }
      else if (isLoopOn) {
        setCurrentTrackIndex(0);
      }
    };

    const handlePrevTrack = () => {
      if (currentTrackIndex > 0) {
        setCurrentTrackIndex((prevTrack) => prevTrack - 1);
       
      }
    };
   

  const handleToggleLoop = () => {
    setIsLoopOn(!isLoopOn);
    audioRef.current.loop = !isLoopOn;
  };

  const handleToggleShuffle = () => {
    setIsShuffleOn(!isShuffleOn);
  };
 
  const handleExpand=()=>{
    setExpand(true)
    path.current=pathname;
    
  }
  const handleShrink=()=>{
      setExpand(false)
  }
    return(

        
        <div className="live_music">
            <div className="leftb">
               <Link to={`/songDetailPage/${songArr.length!=0?songArr[currentTrackIndex].songId:"13a"}`}> <img src={songArr.length!=0?songArr[currentTrackIndex].image:"https://c.saavncdn.com/973/Vikram-Tamil-2022-20220515182605-500x500.jpg"} width="50px" height="50px" alt="song_logo"/>
               </Link>
                <p>{songArr.length!=0?songArr[currentTrackIndex].title:"Once upon a time"}<br/><span className="describe">{songArr.length!=0?songArr[currentTrackIndex].artist:"Aniruth Ravichandran"}</span></p>
            </div>
            <div className="midb">
                <audio
                    ref={audioRef}
                    src={songArr.length!=0?
                       
                      songArr[currentTrackIndex].audio
                        :"https://pagalsong.in/uploads/systemuploads/mp3/Vikram/Once Upon A Time - Vikram 128 Kbps.mp3"
                    }
                    onTimeUpdate={handleTimeUpdate}
                    onEnded={handleNextTrack} 
                    controls
                    autoPlay
                    style={{display:"none"}}
                />
                <BiRepeat className="plyrepeat" id={isLoopOn?"plyRepeat":"noRepeat"} onClick={handleToggleLoop}/>
                <TbPlayerSkipBackFilled className="plyback" onClick={handlePrevTrack}/>
                
            {playing ? <GiPauseButton onClick={handlePause}/> : <TbPlayerPlayFilled onClick={ handlePlay}/>}
                <TbPlayerSkipForwardFilled className="plyskip" onClick={handleNextTrack}/>
                <PiShuffle className="plyshuffle" id={isShuffleOn ? "shuffle" : "noShuffle"} onClick={handleToggleShuffle}/>
            </div>
            <div className="rightb">
                <p>{formatTime(currentTime)}/{formatTime(duration)}</p>
                <Link to={`/songDetailPage/${songArr.length!=0?songArr[currentTrackIndex].songId:"13a"}`}>  <TfiMoreAlt className="more-btn"/>
                    </Link>
                <div className="volume-sec">
                  <div className="volume-range-input">    
                <input
                    className='volume-hovered' 
                    type="range"
                    min={0}
                    max={1}
                    step={0.01}
                    value={volume}
                    onChange={handleVolumeChange}
                />
                </div>
                 {volume!=0?<RiVolumeUpFill className="volum-btn" onClick={handleMute}/>
                 :<MdVolumeOff className="volum-btn"/>}
                </div>
                {expand?
                    (<Link to={`${path.current}`}><GrContract onClick={handleShrink} style={{color:"#3e3e3e"}}/></Link>):(<Link to='/queue'><CgArrowsExpandRight onClick={handleExpand} style={{color:"#3e3e3e"}}/></Link>)
                }            
             
               
            </div>
        </div>

    )
}
export default LiveMusic;
