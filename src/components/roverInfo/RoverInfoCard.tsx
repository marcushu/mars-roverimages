import { FunctionComponent } from "react";
import { RoverName } from "../../roverContext";
import styles from './roverInfoCard.module.css';

interface RoverInfoCardProps {
  roverName: RoverName 
  roverImage: string
  children: string
}

const RoverInfoCard: FunctionComponent<RoverInfoCardProps> = ( { roverName, roverImage, children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.textbox}>
        <div className={styles.rovertitle}>
          {roverName}
        </div>
        {children}
      </div>
      <div className={styles.imagebox}>
        <img style={{borderRadius: '20px', maxWidth: '450px'}} src={roverImage} alt="rover pic" />
      </div>
    </div>
  );
}

export default RoverInfoCard;
