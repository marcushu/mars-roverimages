import { FunctionComponent, useEffect, useMemo, useState } from "react";
import RoverCard from "./RoverCard";
import styles from './index.module.css';
import SolPicker from "./SolPicker";
import PagePicker from "./PagePicker";
import { RoverName } from "../../roverContext";
import useGetImages from "../../hooks/useGetImages";
import { roverData } from '../../roverDataStatic';
import useGetMaifest from "../../hooks/useGetManifest";
import NoImage from "./NoImage";

interface RoverImagesProps {
  currentRover: RoverName
}

const RoverImages: FunctionComponent<RoverImagesProps> = ({ currentRover }) => {
  const [page, setPage] = useState(1);
  const [currentSol, setcurrentSol] = useState(1);
  const { imageData /*, loading */ } = useGetImages(currentRover, currentSol, page);
  const { roverManifest } = useGetMaifest(currentRover);
  const cRoverData = roverData.find(({ name }) => name === currentRover);
  // Static info, this data is no longer being updated.

  useEffect(() => {
    setcurrentSol(1);
    setPage(1);
  }, [currentRover]);


  const newSol = (sol: number) => {
    setcurrentSol(sol);
    setPage(1);
  }


  const numImagesThisSol = useMemo(() => {
    const totalPhotos = roverManifest.find(({ sol }) => sol === currentSol)?.total_photos;
    const IMAGESPERPAGE = 25;
    // the api limits the response to 25 image entries.

    if (totalPhotos) {
      if (totalPhotos <= IMAGESPERPAGE) {
        return 1;
      } else {
        return Math.ceil(totalPhotos / IMAGESPERPAGE);
      }
    } else {
      return 0;
    }
  }, [currentSol, roverManifest]);


  return (
    <div>
      <div className={styles.selectors}>
        <SolPicker 
          currentSol={currentSol}
          totalSols={cRoverData?.totalSols ? cRoverData.totalSols : 0}
          setSol={newSol} />
      </div>
      {(numImagesThisSol > 1) &&
        <PagePicker numOfPages={numImagesThisSol} currentPage={page} setCurrentPage={setPage} />}
      {imageData?.length ?
        imageData?.map((roverPair) =>
          <div className={styles.imagerow} key={roverPair[0].id}>
            {roverPair.map(roverx =>
              <div key={roverx.id + 'rc'}>
                <RoverCard
                  camera={roverx.camera.name}
                  date={roverx.earth_date}
                  id={roverx.id}
                  roverName={roverx.rover.name}
                  status={roverx.rover.status}
                  imageUrl={roverx.img_src} />
              </div>
            )}
          </div>
        ) :
        <NoImage sol={currentSol} />
      }
      {(numImagesThisSol > 1) &&
        <PagePicker numOfPages={numImagesThisSol} currentPage={page} setCurrentPage={setPage} />}
    </div>
  );
}

export default RoverImages;