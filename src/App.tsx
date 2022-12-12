import React from 'react';
import RoverImages from './components/roverImages';
import RoverInfo from './components/roverInfo';
import RoverSelector from './components/roverSelector';

function App() {
  return (
    <>
      <h1>hello from react</h1>
      <p>
        put your stuff here
      </p>
      <RoverSelector />
      <RoverInfo />
      <RoverImages />
    </>
  );
}

export default App;
