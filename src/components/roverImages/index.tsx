import { FunctionComponent, useContext, useState } from "react";
import RoverCard from "./RoverCard";
import styles from './index.module.css';
import SolPicker from "./SolPicker";
import PagePicker from "./PagePicker";
import Context from "../../roverContext";
import useGetImages from "../../hooks/useGetImages";

const RoverImages: FunctionComponent = () => {
  const [page, setPage] = useState(1);
  const [currentSol, setcurrentSol] = useState(1);
  const rover = useContext(Context);
  const roverData = useGetImages();

  //TODO: divide image info into 'pairs' and render as a row
  return (
    <div>
      <p>{rover?.roverName}</p>
      <div style={{ padding: '90px 0px' }}>
        <SolPicker currentSol={currentSol} setSol={setcurrentSol} />
        <PagePicker numOfPages={5} currentPage={page} setCurrentPage={setPage} />
      </div>
      <div className={styles.imagerow}>



      
        {roverData?.map(rover =>
          <div key={rover.id}>
            <RoverCard
              camera={rover.camera.name}
              date={rover.earth_date}
              id={rover.id}
              roverName={rover.rover.name}
              status={rover.rover.status} />
          </div>
        )}





      {/* 
        <div>
          <RoverCard
            camera="Rear Hazard Avoidance Camera"
            date="3-11-2020"
            id={123070}
            roverName='Opportunity'
            status="complete" />
        </div>
        <div>
          <RoverCard camera="Rear Hazard Avoidance Camera" date="3-11-2020" id={123070} roverName='Opportunity' status="complete" />
        </div>
      */}

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