import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Corrosal.css'
import { useCurrentPlayingContext } from "../../context/currentlyPlayingContext";
import { useEffect ,useState} from "react";
import Card from "../Card";
import {TbPlayerPlayFilled} from 'react-icons/tb';
import LoaderFn from '../loader/Loader'


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 7,
    slidesToSlide: 7
    
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7,
    slidesToSlide: 7
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
    slidesToSlide: 4
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items:2,
    slidesToSlide: 2
  }
};


const Corrosal=()=>{
  const {setSongArr,trendingSongData,setTrendingSongData}=useCurrentPlayingContext()


//   const [currentSong, setCurrentSong] = useState(null);

  const fetchSongs = () => {

    fetch('https://academics.newtonschool.co/api/v1/music/song?filter={"featured":"Trending songs"}', {
      headers: {
        'projectId': 'f104bi07c490',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const trendingSongs=data?.data.map((item) => ({
          key: item._id,
          image: item.thumbnail,
          title: item.title || "",
          audio: item.audio_url,
          artist:
            (item.artist && item.artist[0] && item.artist[0].name) || "",
          mood: item.mood || "",
          album: "",
          songId: item._id,
        }));
        setTrendingSongData(trendingSongs)
        // setSongArr(trendingSongsData)
      })
      .catch((error) => console.error('Error:', error));
  };
  useEffect(() => {
    fetchSongs();
    
  }, []);

 const rows = [];   
  for (let i = 0; i < trendingSongData.length; i += 2) {
    rows.push(trendingSongData.slice(i, i + 2));
  }
  

return(


<Carousel 
responsive={responsive}
infinite={true}
 className="corrosal-card"
>
{rows.length === 0 ? (
    <LoaderFn/>
  ) : (
  rows.map((row, index) => (
        <div className="trending-list" key={index}>
          {row.map((item) => (
            // <Link to={`/${item._id}`} key={item._id}>
        
              <Card key={item.key} item={item} album={trendingSongData}  />
             
          ))}
          
        </div>
      )))}
</Carousel>

)

}
export default Corrosal;
