import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Corrosal.css'
import { useEffect ,useState} from "react";


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


const Corrosal=(props)=>{
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
      
        console.log(data.data)
        // console.log("songs",songs)
      })
      .catch((error) => console.error('Error:', error));
  };
  useEffect(() => {
    // Fetch songs when the component mounts

    fetchSongs();
    
    
  }, []);
  const handleCardClick = (selectedSong) => {
    // Pass the selected song details to the parent component (App.js)
    // You can use a callback function to achieve this
    props.onCardClick(selectedSong);
  }
 const rows = [];   
  for (let i = 0; i < songs.length; i += 2) {
    rows.push(songs.slice(i, i + 2));
  }
  

return(
<Carousel 
responsive={responsive}
infinite={true}
//   autoPlay={ true}
//   autoPlaySpeed={1000}
>
 
            {/* <div className="caro">
            <div className="trending-list"> */}
  
  {rows.map((row, index) => (
        <div className="trending-list" key={index}>
          {row.map((item) => (
            <div className="card" key={item._id}>
              <img src={item.thumbnail} onClick={() => handleCardClick(item)} alt="movie"/>
              <h4>{item.title}</h4>
              <p>{item.artist[0].name}</p>
            </div>
          ))}
          
        </div>
      ))}
            {/* </div>
            </div> */}

</Carousel>
)
}
export default Corrosal;