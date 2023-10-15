
import {useState,useEffect} from "react";
import './pickMoods.css';
import { useCurrentPlayingContext } from "../../context/currentlyPlayingContext";
import {TbPlayerPlayFilled} from 'react-icons/tb'

function PickMood(){
  const {setCurrentTrackIndex,setSongArr,setAddSong} = useCurrentPlayingContext();
    const [sadMood, setSadMood] = useState([
      {
        thumbnail:"https://c.saavncdn.com/973/Vikram-Tamil-2022-20220515182605-500x500.jpg",
        title:"SadMood"
      
      }
    ]);
    const [happyMood, setHappyMood] = useState([{
      thumbnail:"https://c.saavncdn.com/973/Vikram-Tamil-2022-20220515182605-500x500.jpg",
        title:"happyMood"
    }]);
    const [romanticMood, setRomanticMood] = useState([{
      thumbnail:"https://c.saavncdn.com/973/Vikram-Tamil-2022-20220515182605-500x500.jpg",
        title:"romantic"
    }]);
    const [excitedMood, setExcitedMood] = useState([{
      thumbnail:"https://c.saavncdn.com/973/Vikram-Tamil-2022-20220515182605-500x500.jpg",
      title:"exited"
    }
    ]);
    const [melodies, setMelodies] = useState([{
      thumbnail:"https://c.saavncdn.com/973/Vikram-Tamil-2022-20220515182605-500x500.jpg",
      title:"exited"
    }
    ]);
    const [soulSoother, setSoulSoother] = useState([{
      thumbnail:"https://c.saavncdn.com/973/Vikram-Tamil-2022-20220515182605-500x500.jpg",
      title:"exited"
    }
    ]);
    // const[adata ,setAdata]=useState([]);

    // function handleDetails(song){
    //   const info=adata.filter(item => item.artist[0].name === song.name)
      
    //   console.log("info",info);
    // }
     function fetchSongs() {
        try{
        fetch('https://academics.newtonschool.co/api/v1/music/song?filter={"mood":"happy"}', {
          headers: {
            'projectId': 'f104bi07c490',
          },
        })
          .then((response) => response.json())
          .then((data) => {
            const happySongData=data?.data.map((item) => ({
              key: item._id,
              image: item.thumbnail,
              title: item.title || "",
              audio: item.audio_url,
              artist:
                (item.artist && item.artist[0] && item.artist[0].name) || "",
              mood: item.mood || "",
              album: "",
              songId: item._id,
                   
            }))
            setHappyMood(happySongData);
        })
      }
      catch (error) {
        console.log("Error fetching happymood data", error)
      }
      try{
        fetch('https://academics.newtonschool.co/api/v1/music/song?filter={"mood":"sad"}', {
          headers: {
            'projectId': 'f104bi07c490',
          },
        })
          .then((response) => response.json())
          .then((data) => {
            const sadSongData=data?.data.map((item) => ({
              key: item._id,
              image: item.thumbnail,
              title: item.title || "",
              audio: item.audio_url,
              artist:
                (item.artist && item.artist[0] && item.artist[0].name) || "",
              mood: item.mood || "",
              album: "",
              songId: item._id,
                   
            }))
           
            setSadMood(sadSongData); 
            // console.log("sadmood",sadMood);
        })
      }
      catch (error) {
        console.log("Error fetching sadmood data", error)
      }
      try{
        fetch('https://academics.newtonschool.co/api/v1/music/song?filter={"mood":"romantic"}', {
          headers: {
            'projectId': 'f104bi07c490',
          },
        })
          .then((response) => response.json())
          .then((data) => {
            const romanticSongData=data?.data.map((item) => ({
              key: item._id,
              image: item.thumbnail,
              title: item.title || "",
              audio: item.audio_url,
              artist:
                (item.artist && item.artist[0] && item.artist[0].name) || "",
              mood: item.mood || "",
              album: "",
              songId: item._id,
                   
            }))
           
            setRomanticMood(romanticSongData); 
            // console.log("setRomanticMood",romanticMood);
        })
      }
      catch (error) {
        console.log("Error fetching romanticMood data", error)
      }
      try{
        fetch('https://academics.newtonschool.co/api/v1/music/song?filter={"mood":"excited"}', {
          headers: {
            'projectId': 'f104bi07c490',
          },
        })
          .then((response) => response.json())
          .then((data) => {
            
            const exitedSongData=data?.data.map((item) => ({
              key: item._id,
              image: item.thumbnail,
              title: item.title || "",
              audio: item.audio_url,
              artist:
                (item.artist && item.artist[0] && item.artist[0].name) || "",
              mood: item.mood || "",
              album: "",
              songId: item._id,
                   
            }))
            setExcitedMood(exitedSongData); 
            // console.log("setExcitedMood",excitedMood);
        })
      }
      catch (error) {
        console.log("Error fetching excitedMood data", error)
      }
      try{
        fetch('https://academics.newtonschool.co/api/v1/music/song?filter={"featured":"Evergreen melodies"}', {
          headers: {
            'projectId': 'f104bi07c490',
          },
        })
          .then((response) => response.json())
          .then((data) => {
            const melodieSongData=data?.data.map((item) => ({
              key: item._id,
              image: item.thumbnail,
              title: item.title || "",
              audio: item.audio_url,
              artist:
                (item.artist && item.artist[0] && item.artist[0].name) || "",
              mood: item.mood || "",
              album: "",
              songId: item._id,
                   
            }))
            setMelodies(melodieSongData); 
            // console.log("setExcitedMood",excitedMood);
        })
      }
      catch (error) {
        console.log("Error fetching Melodies data", error)
      }
      try{
        fetch('https://academics.newtonschool.co/api/v1/music/song?filter={"featured":"Soul soother"}', {
          headers: {
            'projectId': 'f104bi07c490',
          },
        })
          .then((response) => response.json())
          .then((data) => {
            const melodieSongData=data.length!==0 &&data.data?.map((item) => ({
              key: item._id,
              image: item.thumbnail,
              title: item.title || "",
              audio: item.audio_url,
              artist:
                (item.artist && item.artist[0] && item.artist[0].name) || "",
              mood: item.mood || "",
              album: "",
              songId: item._id,
                   
            }))
           
            setSoulSoother(melodieSongData); 
            // console.log("setExcitedMood",excitedMood);
        })
        }
        catch (error) {
          console.log("Error fetching SoulSoother data", error)
        }
      };

      useEffect(() => {
        fetchSongs();         
      }, []);

      
      // console.log("sadmood",sadMood);
      // console.log("happymood",happyMood);\[i861q ]
      // console.log("romantic",romanticMood);
      // console.log("excited",excitedMood);
  const handlePlayMoods=(e,album)=>{
    e.stopPropagation();
    setSongArr(album)
    setCurrentTrackIndex(0)
  }

     

return(

        <div className="caro">
             <div className="card" >
                <img src={sadMood[0].image} alt="movie"/>
                <div className='moodscard-hovercontent'><button onClick={(e)=>handlePlayMoods(e,sadMood)} className='card-ply-btn'><TbPlayerPlayFilled className='card-ply-icon'/></button></div>
                 <h4>{sadMood[0].title}</h4>
               <p>Sad</p>
            </div>
            <div className="card" >
                <img src={happyMood[0].image} alt="movie"/>
                <div className='moodscard-hovercontent'><button onClick={(e)=>handlePlayMoods(e,happyMood)} className='card-ply-btn'><TbPlayerPlayFilled className='card-ply-icon'/></button></div>
                <h4>{happyMood[0].title}</h4>
                <p>Happy</p>
            </div>
             <div className="card">
                 <img src={romanticMood[0].image} alt="movie"/>
                 <div className='moodscard-hovercontent'><button onClick={(e)=>handlePlayMoods(e,romanticMood)} className='card-ply-btn'><TbPlayerPlayFilled className='card-ply-icon'/></button></div>
                 <h4>{romanticMood[0].title}</h4>
                 <p>Romantic</p>
             </div>
             <div className="card">
                 <img src={excitedMood[0].image} alt="movie"/>
                 <div className='moodscard-hovercontent'><button onClick={(e)=>handlePlayMoods(e,excitedMood)} className='card-ply-btn'><TbPlayerPlayFilled className='card-ply-icon'/></button></div>
                 <h4>{excitedMood[0].title}</h4>
                 <p>Excited</p>
             </div>
             <div className="card">
                 <img src={melodies[0].image} alt="movie"/>
                 <div className='moodscard-hovercontent'><button onClick={(e)=>handlePlayMoods(e,melodies)} className='card-ply-btn'><TbPlayerPlayFilled className='card-ply-icon'/></button></div>
                 <h4>{melodies[0].title}</h4>
                 <p>Evergreen melodies</p>
             </div>
             <div className="card">
                 <img src={soulSoother[0].image} alt="movie"/>
                 <div className='moodscard-hovercontent'><button onClick={(e)=>handlePlayMoods(e,soulSoother)} className='card-ply-btn'><TbPlayerPlayFilled className='card-ply-icon'/></button></div>
                 <h4>{soulSoother[0].title}</h4>
                 <p>Soul Soother</p>
             </div>
              
         </div>
           
              
          

)
}
export default PickMood;