import { useEffect, useState } from "react";
import { debounce } from "../../utills";
import '../searchSection/SearchSection.css'
import {ImPlay2} from 'react-icons/im'
import {useCurrentPlayingContext} from '../../context/currentlyPlayingContext'
import { Link } from "react-router-dom";
 const SearchSection = ({val}) => {

  const [loading, setLoading] = useState(false);
  
  const{songeData, setSongData,albumData, setAlbumData,artistData, setArtistData,
    topSongData, setTopSongData,setSearchBarClicked,setSeletedResult,setSongArr,setCurrentTrackIndex}=useCurrentPlayingContext()

  const handleSubSearchBar=(e)=>{
    setSearchBarClicked(false);
    setSeletedResult(e.target.value)
  }

  const handleDetails=(id,album)=>{
    setSongArr(album)
    const curIndex=album.findIndex(object => {
      return object.songId === id;
    });
    setCurrentTrackIndex(curIndex);
    setSearchBarClicked(false);
  }

  const handleAlbumDetails=(song)=>{
    const albumSongsData=song.album?.map((item) => ({
      key: item._id,
      image: item.thumbnail,
      title: item.title || "",
      audio: item.audio_url,
      artist:
        song.artist|| "",
      mood: item.mood || "",
      album: "",
      songId: item._id,
    }));
    setSongArr(albumSongsData)
    

    setCurrentTrackIndex(0);
    setSearchBarClicked(false);
  }
  const fetchArtistData = async (artistName) => {

    try {

      const artistSongRes =  await fetch(
        `https://academics.newtonschool.co/api/v1/music/song?limit=1000`,
        {
          headers: {
            'projectID': 'f104bi07c490',
          },
        }
      );
      const artistData = await artistSongRes.json();
     
      const fetchResultFilter=artistData.data.filter(obj => {
        return obj.artist.some(item => item.name === artistName);
      });
      const searchArtistResult=fetchResultFilter.map((item) => ({
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
    
      setSongArr(searchArtistResult); 
      setCurrentTrackIndex(0);
     
    } catch (error) {
      console.error("error:searchArtistResult:", error);
 
    }
  }
  const handleArtistDetails=(item)=>{
    fetchArtistData(item.title)
    
    setSearchBarClicked(false);
  }
  const fetchData = async () => {
   
    setLoading(true);
    try {

      const songRes =  await fetch(
        `https://academics.newtonschool.co/api/v1/music/song?search={"title":"${val}"}`,
        {
          headers: {
            'projectID': 'f104bi07c490',
          },
        }
      );
      const searchsongData = await songRes.json();
      const searchsongDataResult=searchsongData?.data.map((item) => ({
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
    
      setSongData(searchsongDataResult); 
      
    } catch (error) {
      console.error("error:searchsongData:", error);
 
    }
    try {

      const topRes =  await fetch(
        `https://academics.newtonschool.co/api/v1/music/song?search={"featured":"Top 20 of this week"}`,
        {
          headers: {
            'projectID': 'f104bi07c490',
          },
        }
      );
      const searchTopSongData = await topRes.json();
        const topArray=searchTopSongData?.data.filter((object,index)=>{     
            if(object.title.includes(val)){
              return object;
            }
          
        });
            const topTrendingSongsData=topArray.map((item) => ({
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
    
      setTopSongData(topTrendingSongsData); 
    } catch (error) {
      console.error("error:searchsongData:", error);
 
    }
    try {

      const albumRes =  await fetch(
        `https://academics.newtonschool.co/api/v1/music/album?search={"title":"${val}"}`,
        {
          headers: {
            'projectID': 'f104bi07c490',
          },
        }
      );
      const searchAlbumData = await albumRes.json();
  
      
      
        const searchAlbumDataResult=searchAlbumData?.data.map((item) => ({
        key: item._id,
        image: item.image,
        title: item.title || "",
        audio: "",
        artist:
          (item.artists && item.artists[0] && item.artists[0].name) || "",
        mood: item.mood || "",
        album: item.songs,
        songId: item._id,
      }));
      setAlbumData(searchAlbumDataResult);
     
    } catch (error) {
      console.error("error:searchAlbumData:", error);
   
    }
    try {

      const artistRes =  await fetch(
        `https://academics.newtonschool.co/api/v1/music/artist?search={"name":"${val}"}`,
        {
          headers: {
            'projectID': 'f104bi07c490',
          },
        }
      );
      const searchArtistData = await artistRes.json();
      
        const searchArtistDataResult=searchArtistData?.data.map((item) => ({
        key: item._id,
        image: item.image,
        title: item.name || "",
        audio: item.audio_url||"",
        artist: "",
        mood: item.mood || "",
        album: "",
        songId: item._id,
      }));
     
      setArtistData(searchArtistDataResult);
    } catch (error) {
      console.error("error:searchArtistData:", error);
      
    } finally {
      setLoading(false);
    }
  };

  const handleTypeHead = () => {  
    if (val) {
     
      fetchData(val);
    } 
    else{
      setSongData([])
      setAlbumData([])
      setArtistData([])
      setTopSongData([])
    }

  };
  const doDebouce= debounce(handleTypeHead, 1000);
  useEffect(()=>{
    doDebouce()
  },[val])

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
      <div className="searchbox-results-container">
         <div className="searchresultcard-container">
          <h5>Top Results</h5>
         {Array.isArray(topSongData) && topSongData?.map((item)=>(
                                                 
            <div className="searchresultcard" key={item.key}>
                <div className="q-icon">                   
                    <img src={item.image} width="40px" alt="cardimage" onClick={() => handleDetails(item.songId,topSongData)}
                    
                    />
                    <div className='searchresult-hovercontent hovercard' onClick={() => handleDetails(item.songId,topSongData)} >< ImPlay2 className='mini-ply-icon'/></div>
                </div>

                <div className="q-des">
                    <p className="q-s-name">{item.title}</p>
                    <p className="q-s-artist">{ item.artist?item.artist:""}</p>
                </div>
            </div>
            
              ))} 
        </div>
      <div className="searchresultcard-container">
        <div className="searchresult-btn">
        <h5>songs</h5>
        <Link to='/search/songs'><button value="Songs"  onClick={handleSubSearchBar}>View All</button></Link>
        </div>
      
         {Array.isArray(songeData) && songeData?.map((item)=>(
                                                 
            <div className="searchresultcard" key={item.key}>
                <div className="q-icon">                   
                    <img src={item.image} width="40px" alt="cardimage" onClick={() => handleDetails(item.songId,songeData)}
                     
                     />
                    <div className='searchresult-hovercontent hovercard' onClick={() => handleDetails(item.songId,songeData)} >< ImPlay2 className='mini-ply-icon'/></div>
                </div>

                <div className="q-des">
                    <p className="q-s-name">{item.title}</p>
                    <p className="q-s-artist">{ item.artist?item.artist:""}</p>
                </div>
            </div>
            
              ))} 
        </div>
        <div className="searchresultcard-container">
        <div className="searchresult-btn">
          <h5>Album</h5>
          <Link to='/search/album'><button value="Albums" onClick={handleSubSearchBar}>View All</button></Link>
        </div>
         {Array.isArray(albumData) && albumData?.map((item)=>(
                                                 
            <div className="searchresultcard" key={item.key}>
                <div className="q-icon">                   
                    <img src={item.image} width="40px" alt="cardimage" onClick={() => handleAlbumDetails(item)}
                    
                    />
                    <div className='searchresult-hovercontent hovercard' onClick={() => handleAlbumDetails(item)} >< ImPlay2 className='mini-ply-icon'/></div>
                </div>

                <div className="q-des">
                    <p className="q-s-name">{item.title}</p>
                    <p className="q-s-artist">{ item.artists?item.artists:""}</p>
                </div>
            </div>
            
              ))} 
        </div>
        <div className="searchresultcard-container">
        <div className="searchresult-btn">
          <h5>Artist</h5>
          <Link to='/search/artist'><button value="Artists" onClick={handleSubSearchBar}>View All</button></Link>
        </div>
         {Array.isArray(artistData) && artistData?.map((item)=>(
                                                 
            <div className="searchresultcard" key={item.key}>
                <div className="q-icon">                   
                    <img src={item.image} width="40px" alt="cardimage" onClick={()=>handleArtistDetails(item)}/>
                    <div className='searchresult-hovercontent hovercard' onClick={()=>handleArtistDetails(item)} >< ImPlay2 className='mini-ply-icon'/></div>
                </div>

                <div className="q-des">
                    <p className="q-s-name" >{item.title}</p>
                </div>
            </div>
            
              ))} 
        </div>
      </div>
  )
 
};
export default SearchSection;
