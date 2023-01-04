import { FunctionComponent } from "react";
import RoverCard from "./RoverCard";
import styles from './index.module.css';

const RoverSelector: FunctionComponent = () => {

  return (
    <div className={styles.infobox}>
      <RoverCard roverName='Spirit' />
      <RoverCard roverName='Opportunity' />
      <RoverCard roverName='Curiosity' />
    </div>
  );
}

export default RoverSelector;