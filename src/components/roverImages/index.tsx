import { FunctionComponent } from "react";
import RoverCard from "./RoverCard";
import styles from './index.module.css';
import SolPicker from "./SolPicker";


const RoverImages: FunctionComponent = () => {

  return (
    <div>
      <div style={{padding: '90px 0px'}}>
        <SolPicker />
      </div>
      <div className={styles.imagerow}>
        <div>
          <RoverCard camera="Rear Hazard Avoidance Camera" date="3-11-2020" id={123070} roverName='Opportunity' status="complete" />
        </div>
        <div>
          <RoverCard camera="Rear Hazard Avoidance Camera" date="3-11-2020" id={123070} roverName='Opportunity' status="complete" />
        </div>
      </div>
      <div className={styles.imagerow}>
        <div>
          <RoverCard camera="Rear Hazard Avoidance Camera" date="3-11-2020" id={123070} roverName='Opportunity' status="complete" />
        </div>
        <div>
          <RoverCard camera="Rear Hazard Avoidance Camera" date="3-11-2020" id={123070} roverName='Opportunity' status="complete" />
        </div>
      </div>
      <div className={styles.imagerow}>
        <div>
          <RoverCard camera="Rear Hazard Avoidance Camera" date="3-11-2020" id={123070} roverName='Opportunity' status="complete" />
        </div>
        <div>
          <RoverCard camera="Rear Hazard Avoidance Camera" date="3-11-2020" id={123070} roverName='Opportunity' status="complete" />
        </div>
      </div>
    </div>
  );
}

export default RoverImages;