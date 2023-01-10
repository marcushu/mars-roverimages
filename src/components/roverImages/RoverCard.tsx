import { FunctionComponent, useState } from "react"
import { RoverName } from "../../roverContext"
import ImageSpinner from "./ImageSpinner";
import styles from './rovercard.module.css';

interface RoverCardProps {
  roverName: RoverName
  camera: string
  id: number
  date: string
  status: string
  imageUrl: string
}

const RoverCard: FunctionComponent<RoverCardProps> = ({ roverName, camera, id, date, status, imageUrl }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className={styles.container} >
      <div style={{ display: imageLoaded ? 'unset' : 'none' }}>
        <a href={imageUrl} target='_blank' rel="noreferrer">
          <img
            className={styles.imagestyle}
            src={imageUrl}
            alt="roverimage"
            onLoad={() => setImageLoaded(true)} />
        </a>
      </div>
      <div style={{ display: imageLoaded ? 'none' : 'unset' }}>
        <ImageSpinner />
      </div>
      <div className={styles.statistics}>
        <div>
          <div className={styles.rovername}>{roverName}</div>
          <div className={styles.camera}>{camera}</div>
          <div className={styles.roverid}>id: {id}</div>
        </div>
        <div>
          <div className={styles.date}>taken: {date}</div>
          <div className={styles.status}>status: {status}</div>
        </div>
      </div>
    </div>
  );
}

export default RoverCard;