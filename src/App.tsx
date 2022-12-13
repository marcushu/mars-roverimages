import React, { useState } from 'react';
import RoverImages from './components/roverImages';
import RoverInfo from './components/roverInfo';
import RoverSelector from './components/roverSelector';
import Context, { RoverName } from './roverContext';

function App() {
  const [currentRover, setCurrentRover] = useState<RoverName>('Spirit')
  
  return (
    <Context.Provider value={{roverName: currentRover, setRover: setCurrentRover}}>
      <RoverSelector />
      <RoverInfo />
      <RoverImages />
    </Context.Provider>
  );
}

export default App;
