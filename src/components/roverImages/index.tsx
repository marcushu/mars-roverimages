import { FunctionComponent, useState } from "react";
import RoverCard from "./RoverCard";
import styles from './index.module.css';
import SolPicker from "./SolPicker";
import PagePicker from "./PagePicker";


const RoverImages: FunctionComponent = () => {
  const [page, setPage] = useState(1);

  return (
    <div>
      <div className={styles.selectors}>
        <SolPicker />
        <PagePicker numOfPages={5} currentPage={page} setCurrentPage={setPage} />
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