import React, { createContext, useEffect, useState } from 'react';
import { useContext } from 'react';
const CurrentPlayingContext = createContext();

const CurrentPlayingProvider = ({ children }) => {
 
  const [songArr,setSongArr]=useState([])
  const [currentTrackIndex,setCurrentTrackIndex]=useState(0);
  const [selectedSong,setSelectedSong]=useState({});

  const [songeData, setSongData] = useState([]);
  const [albumData, setAlbumData] = useState([]);
  const [artistData, setArtistData] = useState([]);
  const [topSongData, setTopSongData] = useState([]);
  const [seletedResult,setSeletedResult]=useState('');
  const[searchBarClicked,setSearchBarClicked]=useState(false);
  const [login,setLogin]=useState(false);
  const[profile,setProfile]=useState({
    userName:"Aravinth",
    token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MjhlOTIxMTQ0MzI0MzQ5NTQyNmVkMSIsImlhdCI6MTY5NzE3OTkzNywiZXhwIjoxNzI4NzE1OTM3fQ.Zly7amn1_Xyg3H_DCqhtSeuEU1P30o2AQyzeq2-KHKc"
  })
  const[addSong, setAddSong]=useState(0);
  const[favoriteSongs, SetFavoriteSongs]=useState([])
  const [activateHeartId, setActivateHeartId] = useState([]);
  const [trendingSongData,setTrendingSongData]=useState([]);
  const[loginIndicator,setLoginIndicator]=useState('')
  useEffect(()=>{
    const userlog=JSON.parse(localStorage.getItem('userLogin'));
    if(userlog!==null){
      setProfile({
        ...profile,
        userName:`${userlog.userName}`,
        token:`${userlog.token}`
      })
      setLogin(true);
    }
  },[])
  return (
    <CurrentPlayingContext.Provider value={{songArr,setSongArr,currentTrackIndex,setCurrentTrackIndex,
    selectedSong,setSelectedSong,songeData, setSongData,albumData, setAlbumData,artistData, setArtistData,
    topSongData, setTopSongData,seletedResult,setSeletedResult,searchBarClicked,setSearchBarClicked,login,
    setLogin,profile,setProfile,addSong, setAddSong,favoriteSongs, SetFavoriteSongs,activateHeartId, setActivateHeartId,
    trendingSongData,setTrendingSongData,loginIndicator,setLoginIndicator}} >
      {children}
    </CurrentPlayingContext.Provider>
  );
};
export default CurrentPlayingProvider;


export const useCurrentPlayingContext = () => {
  return useContext(CurrentPlayingContext);


}