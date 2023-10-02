import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Corrosal.css'
import { useEffect ,useState} from "react";
import Card from "../components/Card";



const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 7,
    slidesToSlide: 1
    
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items:2,
    slidesToSlide: 1
  }
};


const Corrosal=()=>{
    const [songs, setSongs] = useState([]);

//   const [currentSong, setCurrentSong] = useState(null);

  const fetchSongs = () => {
    // Replace 'YOUR_PROJECT_ID' with your actual project ID
    fetch('https://academics.newtonschool.co/api/v1/music/song?filter={"featured":"Trending songs"}', {
      headers: {
        'projectId': 'f104bi07c490',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        
        // console.log("data",data.data[0].thumbnail);
        setSongs(data.data)
      
        // console.log(data.data)
        // console.log("songs",songs)
      })
      .catch((error) => console.error('Error:', error));
  };
  useEffect(() => {
    // Fetch songs when the component mounts

    fetchSongs();
    
    
  }, []);

 const rows = [];   
  for (let i = 0; i < songs.length; i += 2) {
    rows.push(songs.slice(i, i + 2));
  }
  

return(
<Carousel 
responsive={responsive}
infinite={true}

>
 
 
  {rows.map((row, index) => (
        <div className="trending-list" key={index}>
          {row.map((item) => (
            // <Link to={`/${item._id}`} key={item._id}>
              <Card key={item._id} item={item} gtype="Trending song"/>
            //  </Link>
          ))}
          
        </div>
      ))}

</Carousel>
)
}
export default Corrosal;
