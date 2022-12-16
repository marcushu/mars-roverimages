import React, { useState } from 'react';
import RoverImages from './components/roverImages';
import RoverInfo from './components/roverInfo';
import RoverSelector from './components/roverSelector';
import SplashHead from './components/SplashHead';
import Context, { RoverName } from './roverContext';

function App() {
  const [currentRover, setCurrentRover] = useState<RoverName>('Curiosity')
  
  return (
    <Context.Provider value={{roverName: currentRover, setRover: setCurrentRover}}>
      <SplashHead />
      <RoverSelector />
      <RoverInfo />
      <RoverImages />
    </Context.Provider>
  );
}

export default App;
