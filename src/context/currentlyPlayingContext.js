import React, { createContext, useState } from 'react';
import { useContext } from 'react';
const CurrentPlayingContext = createContext();

const CurrentPlayingProvider = ({ children }) => {
  const [selectedSong, setSelectedSong] = useState(null);

  return (
    <CurrentPlayingContext.Provider value={{ selectedSong, setSelectedSong }}>
      {children}
    </CurrentPlayingContext.Provider>
  );
};
export default CurrentPlayingProvider;


export const useCurrentPlayingContext = () => {
  return useContext(CurrentPlayingContext);


}