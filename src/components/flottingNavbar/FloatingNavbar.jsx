import React, {useState, useEffect } from "react";
import './FloatingNavbar.css'
import {TfiMoreAlt} from 'react-icons/tfi';
import {ImPlay2} from 'react-icons/im';
import {RxCrossCircled} from 'react-icons/rx';
import {AiOutlineHeart} from 'react-icons/ai';
import {FiMoreHorizontal} from 'react-icons/fi';
import {PiDotsSixVerticalBold} from 'react-icons/pi';
import { useCurrentPlayingContext } from "../../context/currentlyPlayingContext";
import {AiFillHeart} from 'react-icons/ai';
import { Link } from "react-router-dom";

function FloatingNavbar(){
    const {currentTrackIndex,setCurrentTrackIndex,songArr,profile,login,setAddSong,favoriteSongs,
         SetFavoriteSongs,activateHeartId, setActivateHeartId,setLoginIndicator} = useCurrentPlayingContext();
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
        })
        .catch(error => console.log('error', error));        
    }
    useEffect(()=> {
        if(login){
       const arr= favoriteSongs.map(obj => obj.songId);
        setActivateHeartId(arr);
        }
      }, [])

    const handleFavorite=(item,id)=>{     
        if(login){
            const idCheck = activateHeartId.includes(id);  
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
        else{
            setLoginIndicator('pre-login')
        }
    }
    const handleSongPlay=(id)=>{      
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
return (
    <aside className="floatingNav">
        <div className="float-content"> 
            <div className="floatq-navbar">
                <h3>Queue</h3>
                <Link to={`/songDetailPage/${songArr.length!=0?songArr[currentTrackIndex]?.songId:"13a"}`}><p id="qmore"><TfiMoreAlt className="more-btn"/></p>
                </Link>     
            </div>
            <div className="float-q-songsection">
                <div className="q-playsection">
                    <div className="songcard">                   
                        <div className="q-card-det">
                            <div className="q-icon">                   
                                <img src={songArr!=0?songArr[currentTrackIndex].image:"https://c.saavncdn.com/973/Vikram-Tamil-2022-20220515182605-50x50.jpg"} width="40px" alt="songicon"/>
                                <div className='f-queuesong-oncontent'>< ImPlay2 className='mini-ply-icon'/></div>                        
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
                            <p>0:20</p>
                        </div>
                    </div>
                </div>
                <div className="q-autoplay">
                    <p>Autoplay more like this.</p>

                </div>
                <div className="q-related-section">
                {relatedSong && relatedSong.map((item,index)=>(
                    <div className="songcard" key={index}>                   
                        <div className="q-card-det">
                            <div className="q-icon">                   
                                <img src={item.image?item.image:"https://c.saavncdn.com/973/Vikram-Tamil-2022-20220515182605-50x50.jpg"} width="40px"  alt="cardimage" onClick={()=>handleSongPlay(item.songId)}/>
                                <div className='f-queuesong-hovercontent' onClick={()=>handleSongPlay(item.songId)} >< ImPlay2 className='mini-ply-icon'/></div>
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
                            <p>0:20</p>
                        </div>
                    </div>
                ))
                }
                </div>
            </div>
        </div>
    </aside>
)
}
export default FloatingNavbar;