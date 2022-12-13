import { FunctionComponent, useContext } from "react";
import Context from "../../roverContext";

const RoverSelector: FunctionComponent = () => {
    const rover = useContext(Context);

    return ( 
        <div>
            select a rover selected is: {rover?.roverName}
            <button onClick={() => rover?.setRover('Opportunity')}>spirit</button>
        </div>
     );
}
 
export default RoverSelector;