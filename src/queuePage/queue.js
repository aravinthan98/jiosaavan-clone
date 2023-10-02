import React, {useState, useEffect } from "react";
import './queue.css'
import {TfiMoreAlt} from 'react-icons/tfi';
import {ImPlay2} from 'react-icons/im';
import {RxCrossCircled} from 'react-icons/rx';
import {AiOutlineHeart} from 'react-icons/ai';
import {FiMoreHorizontal} from 'react-icons/fi';
import {PiDotsSixVerticalBold} from 'react-icons/pi';
import { useCurrentPlayingContext } from "../context/currentlyPlayingContext";
function Queue(){
    const { selectedSong,genere,setSelectedSong,songArr,setSongArr  } = useCurrentPlayingContext();
    const { } = useCurrentPlayingContext();
    const[checked,setChecked]=useState(true);
    
  

    const handleDetails=(item)=>{
        
        setSelectedSong(item); 
      }
    
    // const songdet='Trending songs'
    const fetchSongs=(genere,setSongArr)=> {
        try{
            
        fetch(`https://academics.newtonschool.co/api/v1/music/song?filter={"featured":"${genere}"}`, {
          headers: {
            'projectId': 'f104bi07c490',
          },
        })
          .then((response) => response.json())
          .then((data) => {
            // console.log("queue",data);
            setSongArr(data.data);   
            
            //  console.log("songArr",songArr);
        })
        }
        catch(error){
            console.error(error);
        }
    }
    
 
    // const[stype,setType]=useState("Trending songs")
    
    // if(stype!==genere){
    //     setType(genere)
    // }
    const handleChange=()=>{
        setChecked(!checked)
    }
  
    useEffect(()=>{
        fetchSongs(genere,setSongArr)
        
    },[genere])
    return (
        <div className="queue-page">
            <div className="page-left">
                <div className="q-img-container">
                <img src={selectedSong!==null?selectedSong.thumbnail:"https://c.saavncdn.com/973/Vikram-Tamil-2022-20220515182605-500x500.jpg"} alt="songimage"/>    
                <h3 className="img-title"><a href="#">{selectedSong!==null?selectedSong.title:"Porkanda Singam"}</a></h3>
                <p className="img-para"><a href="#">{selectedSong!==null?selectedSong.artist[0].name:"Anirudh Ravichander"}</a>,<a href="#">Ravi G</a></p>
                </div>
            </div>
            <div className="page-right"> 
                <div className="q-navbar">
                    <h3>Queue</h3>
                    <div className="q-navele">
                        <p id="qmore"><TfiMoreAlt/></p>
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
                                <p><PiDotsSixVerticalBold/></p>
                            </div>
                            <div className="q-card-det">
                            <div className="q-icon">                   
                                <img src={selectedSong?selectedSong.thumbnail:"https://c.saavncdn.com/973/Vikram-Tamil-2022-20220515182605-50x50.jpg"} width="40px" alt="songicon"/>
                                <p className="ply"><ImPlay2/></p>
                            </div>

                            <div className="q-des">
                                <p className="q-s-name">{selectedSong?selectedSong.title:"Porkanda Singam"}</p>
                                <p className="q-s-artist">{selectedSong?selectedSong.artist[0].name:"Anirudh Ravichander,Ravi G"}</p>
                            </div>
                            </div>
                            <div>
                               <p className="q-smpl del"><RxCrossCircled/></p>
                            </div>
                            <div>
                               <p className="q-smpl fav"><AiOutlineHeart/></p> 
                            </div>
                            <div>
                               <p className="q-smpl more"><FiMoreHorizontal/></p>
                               <p>3:18</p>
                            </div>
                            

                        </div>
                    </div>
                    <div className="q-autoplay">
                            <p>Autoplay more like this.</p>
                            <label className="switch">
                            <input type="checkbox" onChange={handleChange} checked={checked}/>
                            <span className="slider round"></span>
                            </label>
                    </div>
                    <div className="q-related-section">
                    {songArr.map((item,index)=>(
                        <div className="songcard" key={index}>
                                <div>
                                    <p><PiDotsSixVerticalBold/></p>
                                </div>
                                <div className="q-card-det">
                                <div className="q-icon">                   
                                    <img src={item.thumbnail?item.thumbnail:"https://c.saavncdn.com/973/Vikram-Tamil-2022-20220515182605-50x50.jpg"} width="40px" onClick={()=>handleDetails(item)} alt="cardimage"/>
                                    <p className="ply"><ImPlay2/></p>
                                </div>

                                <div className="q-des">
                                    <p className="q-s-name">{item.title?item.title:"Once Upon a Time"}</p>
                                    <p className="q-s-artist">{item.artist[0].name?item.artist[0].name:"Anirudh Ravichander,Ravi G"}</p>
                                </div>
                                </div>
                                <div>
                                <p className="q-smpl del"><RxCrossCircled/></p>
                                </div>
                                <div>
                                <p className="q-smpl fav"><AiOutlineHeart/></p> 
                                </div>
                                <div>
                                <p className="q-smpl more"><FiMoreHorizontal/></p>
                                <p>3:18</p>
                                </div>
                                

                        </div>
                    ))
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Queue;