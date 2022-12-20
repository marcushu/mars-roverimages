import { FunctionComponent } from "react"
import { RoverName } from "../../roverContext"
import styles from './rovercard.module.css';

// tes image
import samdivleimage from './sampleImage.jpeg';

interface RoverCarddivrodivs {
  roverName: RoverName
  camera: string
  id: number
  date: string
  status: string
}

const RoverCard: FunctionComponent<RoverCarddivrodivs> = ({ roverName, camera, id, date, status }) => {
  return (
    <div className={styles.container} >
      <div>
        <img className={styles.imagestyle} src={samdivleimage} alt="roverimage" />
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