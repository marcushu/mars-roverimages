import { FunctionComponent, useContext } from "react";
import Context from "../../roverContext";
import RoverCard from "./RoverCard";

const RoverSelector: FunctionComponent = () => {
  const rover = useContext(Context);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {rover && <RoverCard roverName={'Spirit'} />}
      {rover && <RoverCard roverName={'Opportunity'} />}
      {rover && <RoverCard roverName={'Curiosity'} />}
    </div>
  );
}

export default RoverSelector;