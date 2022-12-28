import { FunctionComponent, useState } from "react";
import RoverCard from "./RoverCard";
import styles from './index.module.css';
import SolPicker from "./SolPicker";
import PagePicker from "./PagePicker";
import { RoverName } from "../../roverContext";
import useGetImages from "../../hooks/useGetImages";

interface RoverImagesProps {
  currentRover: RoverName
}

const RoverImages: FunctionComponent<RoverImagesProps> = ({ currentRover }) => {
  const [page, setPage] = useState(1);
  const [currentSol, setcurrentSol] = useState(1);
  const { imageData /*, loading */ } = useGetImages(currentRover, currentSol);

  return (
    <div>
      <p>{currentRover}</p>
      <div style={{ padding: '90px 0px' }}>
        <SolPicker currentSol={currentSol} setSol={setcurrentSol} />
        <PagePicker numOfPages={5} currentPage={page} setCurrentPage={setPage} />
      </div>
      {imageData?.map((roverPair) =>
        <div className={styles.imagerow}>
          {roverPair.map(roverx =>
            <div key={roverx.id}>
              <RoverCard
                camera={roverx.camera.name}
                date={roverx.earth_date}
                id={roverx.id}
                roverName={roverx.rover.name}
                status={roverx.rover.status} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default RoverImages;