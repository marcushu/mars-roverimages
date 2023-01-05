import { FunctionComponent } from "react";
import RoverCard from "./RoverCard";
import styles from './index.module.css';
import { roverData } from "./roverDataStatic";
import { RoverName } from "../../roverContext";

const RoverSelector: FunctionComponent = () => {

  return (
    <div className={styles.infobox}>
      {roverData.map(rData => <RoverCard 
        roverName={rData.name as RoverName} 
        landingDate={rData.landingDate}
        lastDate={rData.lastDate}
        launchDate={rData.launchDate}
        totalSols={rData.totalSols}
        imageCount={rData.imageCount}
        key={rData.name} />)}
    </div>
  );
}

export default RoverSelector;