import React, {useState, useEffect } from "react";
import './queue.css'
import {TfiMoreAlt} from 'react-icons/tfi';
import {ImPlay2} from 'react-icons/im';
import {RxCrossCircled} from 'react-icons/rx';
import {AiOutlineHeart} from 'react-icons/ai';
import {FiMoreHorizontal} from 'react-icons/fi';
import {PiDotsSixVerticalBold} from 'react-icons/pi';
import { useCurrentPlayingContext } from "../../context/currentlyPlayingContext";
import {AiFillHeart} from 'react-icons/ai'



function Queue(){
    const {currentTrackIndex,setCurrentTrackIndex,songArr,profile,login,setAddSong,favoriteSongs,
         SetFavoriteSongs,activateHeartId, setActivateHeartId} = useCurrentPlayingContext();
    
    
    const[checked,setChecked]=useState(true);
    const[relatedSong,setRelatedSong]=useState(songArr);
    const favoriteFetch=(songId)=>{
            var myHeaders = new Headers();
            myHeaders.append("projectId", "f104bi07c490");
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Authorization", `Bearer ${profile.token}`);
    
            var raw = JSON.stringify({
            "songId": `${songId}`
            });
    
            var requestOptions = {
            method: 'PATCH',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
            };
    
            fetch("https://academics.newtonschool.co/api/v1/music/favorites/like", requestOptions)
            .then(response => response.json())
            .then((result) => {
                if(result.status==='success'){
                    setAddSong((prev)=>prev+1);
                }
                console.log("result",result)
            })
            .catch(error => console.log('error', error));        
    }
    
    useEffect(()=> {
        if(login){
       const arr= favoriteSongs.map(obj => obj.songId);
        setActivateHeartId(arr);
        }
      }, [])

    // const handleFavorite=(id)=>{
    //     if(login){
    //     const idCheck = arr.includes(id);
    //     console.log("idCheck", idCheck)
    //     if (idCheck) {
    //         arr=arr.filter((item)=>item!==id)
    //     } else {    
    //         arr.push(id);     
    //     }
    //     favoriteFetch(id) 
    //     setActivateHeartId(arr)
    //     }
    // }
    const handleFavorite=(item,id)=>{
        console.log("id",id)
        console.log("item",item)
        if(login){
        const idCheck = activateHeartId.includes(id);
        console.log("idCheck", idCheck)
        if (idCheck) {
            const newIdArray=activateHeartId.filter((item)=>item!==id)
            const newObjectArray=favoriteSongs.filter((song)=>song.songId!==id)
            setActivateHeartId(newIdArray)
            SetFavoriteSongs(newObjectArray)
        } else {    
            const newIdArray=[...activateHeartId,id]
            const newObjectArray=[...favoriteSongs,item]
            setActivateHeartId(newIdArray)
            SetFavoriteSongs(newObjectArray)   
        }
       
        favoriteFetch(id) 
        
        }
    }
    const handleSongPlay=(id)=>{  
        // console.log("songArr",songArr) 
        // console.log("songArr",id) 
        const songindex=songArr.findIndex(object => {
            return object.songId === id;

        });  
       
        setCurrentTrackIndex(songindex); 
    }
  
    useEffect(()=>{
        if(songArr){             
        setRelatedSong(songArr.slice(currentTrackIndex+1,songArr.length));          
        }
    },[currentTrackIndex])
    const handleChange=()=>{
        setChecked(!checked)
    }
  
    return (
        <div className="queue-page">
            <div className="page-left">
                <div className="q-img-container">
                <img src={songArr.length!==0?songArr[currentTrackIndex].image:"https://c.saavncdn.com/973/Vikram-Tamil-2022-20220515182605-500x500.jpg"} alt="songimage"/>    
                <h3 className="img-title"><a href="#">{songArr.length!==0?songArr[currentTrackIndex].title:"Porkanda Singam"}</a></h3>
                <p className="img-para"><a href="#">{songArr.length!==0?songArr[currentTrackIndex].artist:"Anirudh Ravichander"}</a></p>
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
                                <img src={songArr!=0?songArr[currentTrackIndex].image:"https://c.saavncdn.com/973/Vikram-Tamil-2022-20220515182605-50x50.jpg"} width="40px" alt="songicon"/>
                                <p className="ply"><ImPlay2/></p>
                            </div>

                            <div className="q-des">
                                <p className="q-s-name">{songArr!=0?songArr[currentTrackIndex].title:"Porkanda Singam"}</p>
                                <p className="q-s-artist">{songArr!=0?songArr[currentTrackIndex].artist:"Anirudh Ravichander,Ravi G"}</p>
                            </div>
                            </div>
                            <div>
                               <p className="q-smpl del"><RxCrossCircled/></p>
                            </div>
                            <div>
                               <p className="q-smpl fav" onClick={()=>handleFavorite(songArr[currentTrackIndex],songArr[currentTrackIndex]?.songId)}>{activateHeartId.includes(songArr[currentTrackIndex]?.songId)?<AiFillHeart className="favorite-song"/>:<AiOutlineHeart />}</p> 
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
                    {relatedSong && relatedSong.map((item,index)=>(
                        <div className="songcard" key={index}>
                                <div>
                                    <p><PiDotsSixVerticalBold/></p>
                                </div>
                                <div className="q-card-det">
                                <div className="q-icon">                   
                                    <img src={item.image?item.image:"https://c.saavncdn.com/973/Vikram-Tamil-2022-20220515182605-50x50.jpg"} width="40px"  alt="cardimage"/>
                                    <div className='queuesong-hovercontent' onClick={()=>handleSongPlay(item.songId)} >< ImPlay2 className='mini-ply-icon'/></div>
                                </div>

                                <div className="q-des">
                                    <p className="q-s-name">{item.title?item.title:"Once Upon a Time"}</p>
                                    <p className="q-s-artist">{item.artist?item.artist:"Anirudh Ravichander,Ravi G"}</p>
                                </div>
                                </div>
                                <div>
                                <p className="q-smpl del"><RxCrossCircled/></p>
                                </div>
                                <div>
                                <p className="q-smpl fav" onClick={()=>handleFavorite(item,item?.songId)}>{activateHeartId.includes(item?.songId)?<AiFillHeart className="favorite-song"/>:<AiOutlineHeart />}</p> 
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