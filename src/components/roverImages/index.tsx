import { FunctionComponent, useContext } from "react";  
import Context from "../../roverContext";


const RoverImages: FunctionComponent = () => {
  const rover  = useContext(Context);

  return (
    <>
      <p>rover images...</p>
      <p>{rover?.roverName}</p>
    </>
  );
}

export default RoverImages;