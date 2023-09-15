import React,{useState} from "react"
import './musicBar.css'
import {BiRepeat} from 'react-icons/bi';
import {PiShuffle} from 'react-icons/pi';
import {TbPlayerSkipBackFilled} from 'react-icons/tb'
import {TbPlayerPlayFilled} from 'react-icons/tb'
import {TbPlayerSkipForwardFilled} from 'react-icons/tb';
import {TfiMoreAlt} from 'react-icons/tfi';
import {RiVolumeUpFill} from 'react-icons/ri';
import {CgArrowsExpandRight} from 'react-icons/cg';
import Queue from "./queuePage/queue";
import {GrContract} from 'react-icons/gr';

function LiveMusic(props){

    const[expandc,setExpand]=useState(false);
    // const[shrinkc,setShrink]=useState("shrink");

    const handleExpend=()=>{
            
        setExpand(true);
       
        props.extendclicked(true)
    }
    const handleShrink=()=>{
        setExpand(false);  
        props.extendclicked(false)
    }
   
    return(

        
        <div className="live_music">
            <div className="leftb">
                <img src="https://c.saavncdn.com/973/Vikram-Tamil-2022-20220515182605-500x500.jpg" width="50px" height="50px" alt="song_logo"/>
                <p>Porkanda Singam<br/><span className="describe">Anirudh Ravichander, Ravi G</span></p>
            </div>
            <div className="midb">
                <BiRepeat/>
                <TbPlayerSkipBackFilled/>
                <TbPlayerPlayFilled/>
                <TbPlayerSkipForwardFilled/>
                <PiShuffle/>
            </div>
            <div className="rightb">
                <p>0:00/0:00</p>
                <TfiMoreAlt/>
                <RiVolumeUpFill/>
                {expandc?
                    <GrContract onClick={handleShrink}/>:<CgArrowsExpandRight  onClick={handleExpend}/>
                }
                

               
            </div>
        </div>

    )
}
export default LiveMusic;
