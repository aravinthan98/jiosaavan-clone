
import {useState,useEffect} from "react";
import './pickMoods.css';


function PickMood(){
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
           
            setHappyMood(data.data); 
            
        })

        fetch('https://academics.newtonschool.co/api/v1/music/song?filter={"mood":"sad"}', {
          headers: {
            'projectId': 'f104bi07c490',
          },
        })
          .then((response) => response.json())
          .then((data) => {
           
            setSadMood(data.data); 
            // console.log("sadmood",sadMood);
        })

        fetch('https://academics.newtonschool.co/api/v1/music/song?filter={"mood":"romantic"}', {
          headers: {
            'projectId': 'f104bi07c490',
          },
        })
          .then((response) => response.json())
          .then((data) => {
           
            setRomanticMood(data.data); 
            // console.log("setRomanticMood",romanticMood);
        })

        fetch('https://academics.newtonschool.co/api/v1/music/song?filter={"mood":"excited"}', {
          headers: {
            'projectId': 'f104bi07c490',
          },
        })
          .then((response) => response.json())
          .then((data) => {
           
            setExcitedMood(data.data); 
            // console.log("setExcitedMood",excitedMood);
        })
        fetch('https://academics.newtonschool.co/api/v1/music/song?filter={"featured":"Evergreen melodies"}', {
          headers: {
            'projectId': 'f104bi07c490',
          },
        })
          .then((response) => response.json())
          .then((data) => {
           
            setMelodies(data.data); 
            // console.log("setExcitedMood",excitedMood);
        })
        fetch('https://academics.newtonschool.co/api/v1/music/song?filter={"featured":"Soul soother"}', {
          headers: {
            'projectId': 'f104bi07c490',
          },
        })
          .then((response) => response.json())
          .then((data) => {
           
            setSoulSoother(data.data); 
            // console.log("setExcitedMood",excitedMood);
        })
        }
        catch (error) {
          console.log("Error fetching data", error)
        }
      };

      useEffect(() => {
        fetchSongs();         
      }, []);

      
      // console.log("sadmood",sadMood);
      // console.log("happymood",happyMood);\[i861q ]
      // console.log("romantic",romanticMood);
      // console.log("excited",excitedMood);


     

return(

        <div className="caro">
             <div className="card" >
                <img src={sadMood[0].thumbnail} alt="movie"/>
                 <h4>{sadMood[0].title}</h4>
               <p>Sad</p>
            </div>
            <div className="card" >
                <img src={happyMood[0].thumbnail} alt="movie"/>
                <h4>{happyMood[0].title}</h4>
                <p>Happy</p>
            </div>
             <div className="card">
                 <img src={romanticMood[0].thumbnail} alt="movie"/>
                 <h4>{romanticMood[0].title}</h4>
                 <p>Romantic</p>
             </div>
             <div className="card">
                 <img src={excitedMood[0].thumbnail} alt="movie"/>
                 <h4>{excitedMood[0].title}</h4>
                 <p>Excited</p>
             </div>
             <div className="card">
                 <img src={melodies[0].thumbnail} alt="movie"/>
                 <h4>{melodies[0].title}</h4>
                 <p>Evergreen melodies</p>
             </div>
             <div className="card">
                 <img src={soulSoother[0].thumbnail} alt="movie"/>
                 <h4>{soulSoother[0].title}</h4>
                 <p>Soul Soother</p>
             </div>
         </div>
           
              
          

)
}
export default PickMood;