import React, { createContext, useState } from 'react';
import { useContext } from 'react';
const CurrentPlayingContext = createContext();

const CurrentPlayingProvider = ({ children }) => {
  const [selectedSong, setSelectedSong] = useState(null);
  const [genere,setGenere]=useState("Trending songs")
  const [songArr,setSongArr]=useState([])
  return (
    <CurrentPlayingContext.Provider value={{ selectedSong, setSelectedSong,genere,setGenere ,songArr,setSongArr}} >
      {children}
    </CurrentPlayingContext.Provider>
  );
};
export default CurrentPlayingProvider;


export const useCurrentPlayingContext = () => {
  return useContext(CurrentPlayingContext);


}