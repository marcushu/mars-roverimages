import { FunctionComponent } from "react";
import RoverCard from "./RoverCard";

const RoverSelector: FunctionComponent = () => {

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <RoverCard roverName='Spirit' />
      <RoverCard roverName='Opportunity' />
      <RoverCard roverName='Curiosity' />
    </div>
  );
}

export default RoverSelector;