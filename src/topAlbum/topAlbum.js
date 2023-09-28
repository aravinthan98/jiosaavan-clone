import Carousel from "react-multi-carousel";
import {useState,useEffect} from "react";
import "react-multi-carousel/lib/styles.css";
import './topAlbum.css'
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 7,
   
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    
  }
};
function TopAlbum(){
    const [album, setAlbum] = useState([]);
    // const[adata ,setAdata]=useState([]);

    // function handleDetails(song){
    //   const info=adata.filter(item => item.artist[0].name === song.name)
      
    //   console.log("info",info);
    // }
    const fetchSongs = () => {
        // Replace 'YOUR_PROJECT_ID' with your actual project ID
        fetch('https://academics.newtonschool.co/api/v1/music/album?limit=14', {
          headers: {
            'projectId': 'f104bi07c490',
          },
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("data",data);
           
                setAlbum(data.data);

        })
          .catch((error) => console.error('Error:', error));
      };

      useEffect(() => {
        fetchSongs();         
      }, []);


return(
<Carousel 
responsive={responsive}
infinite={true}

>

            {album.map((item,index)=>(
              
            <div className="card" key={index}>
                <img src={item.image} alt="movie"/>
                <h4>{item.title}</h4>
                <p>{item.artists[0].name}</p>
            </div>
            ))
            }

</Carousel>
)
}
export default TopAlbum;