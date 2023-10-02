import React,{useState,useEffect} from 'react';
import './topArtist.css'

function TopArtist(){
    const [artists, setArtists] = useState([]);
    // const[adata ,setAdata]=useState([]);

    // function handleDetails(song){
    //   const info=adata.filter(item => item.artist[0].name === song.name)
      
    //   console.log("info",info);
    // }
    const fetchSongs = () => {
        // Replace 'YOUR_PROJECT_ID' with your actual project ID
        try{
        fetch('https://academics.newtonschool.co/api/v1/music/song?limit=50', {
          headers: {
            'projectId': 'f104bi07c490',
          },
        })
          .then((response) => response.json())
          .then((data) => {
            // console.log("uniqueArtists",data);
           
                // setAdata(data.data);
                const uniqueArtists = [...new Set(data.data.map(item => item.artist[0].name))];
                // console.log("uniqueArtists",uniqueArtists);
                setArtists(uniqueArtists.map(name => {
                    return {
                        name: name,
                        image: data.data.find(item => item.artist[0].name === name).artist[0].image
                    }
                }));
                console.log("artist",artists);
            
        })
      }
      
      catch(error){
        console.error(error);
      }
    }

      useEffect(() => {
        fetchSongs()        
      }, []);


    //   const handleCardClick = (selectedSong) => {
 
    //     props.onCardClick(selectedSong);
    //   }
 

return(
  
         <div className="artist-caro">
           
            {artists.map((item,index)=>(
            <div className="roundcard" key={index}>
                <img src={item.image} alt="movie" />
                <h4>{item.name}</h4>
                {/* <p>Fast & Furious: The Fast Saga</p> */}
            </div>
            ))
            }
           
         </div>
          


)
}
export default TopArtist;