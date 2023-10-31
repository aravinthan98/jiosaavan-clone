import { useEffect } from "react";
import { useCurrentPlayingContext } from "../../context/currentlyPlayingContext";
import {AiFillHeart} from 'react-icons/ai';
import {FiMoreHorizontal} from 'react-icons/fi'
import {ImPlay2} from 'react-icons/im'
function FavoriteSongs(){
    const {setSongArr,profile,login,favoriteSongs, SetFavoriteSongs,
         setActivateHeartId,setCurrentTrackIndex}=useCurrentPlayingContext() 
    
    const getFavoriteSongs=()=>{
        var myHeaders = new Headers();
        myHeaders.append("projectID", "f104bi07c490");
        myHeaders.append("Authorization", `Bearer ${profile.token}`);
        
        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };
        
        fetch("https://academics.newtonschool.co/api/v1/music/favorites/like", requestOptions)
          .then(response => response.json())
          .then((result) =>{ 
           
            const favArray=result.data.songs.map((item)=>({
                key: item._id,
                image: item.thumbnail,
                title: item.title || "",
                audio: item.audio_url,
                artist: "",
                mood: item.mood || "",
                album: "",
                songId: item._id,
            }))
            SetFavoriteSongs(favArray);
            const newFavId=favArray.map(item=>item.songId)
            setActivateHeartId(newFavId);
           })
          .catch(error => console.log('error', error));
    }

    useEffect(()=>{  
        getFavoriteSongs()
        
    },[])

    const handleSongPlay=(id)=>{
        const songindex=favoriteSongs.findIndex(object => {
            return object.songId === id;
        }); 
        setSongArr(favoriteSongs);
        setCurrentTrackIndex(songindex)
        
    }
    return(
       <div className="favoritesong-section">
        <h2 className="m-mysongs-title">My Music Songs</h2>
        <div className="details-section-buttom">
       {login &&favoriteSongs?.map((item,index)=>(
        <div className="d-songcard" key={item.songId}>

             <div className="d-b-des">
                <p>{index+1}</p>
                 <p className="d-ply"><img src={item?item.image:""} alt="song-logo" onClick={()=>handleSongPlay(item.songId)}/></p>
                 <div className='relatedsong-hovercontent hovercard' onClick={()=>handleSongPlay(item.songId)} >< ImPlay2 className='mini-ply-icon'/></div>
                 <p className="d-s-name">{item?item.title:" "}</p>                
             </div>
              
             <div className="d-b-icons">
             <div>
                 <p className="q-smpl fav"><AiFillHeart className="favorite-song"/></p> 
             </div>
             <div>
                 <p className="q-smpl more"><FiMoreHorizontal/></p>
                 <p>0:20</p>
             </div>
             </div>        
        </div>
       ))

       }     
       
    </div>
</div>
    )
}
export default FavoriteSongs;