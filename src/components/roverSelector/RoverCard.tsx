import { FunctionComponent, useContext } from "react";
import Context, { RoverName } from "../../roverContext";
import styles from './RoverCard.module.css';

interface RoverCardProps {
  roverName: RoverName
  launchDate: string 
  landingDate: string
  lastDate: string
  totalSols: number
  imageCount: number
}

const RoverCard: FunctionComponent<RoverCardProps> = (
  { roverName, launchDate, landingDate, lastDate, totalSols, imageCount }) => {
  const rover = useContext(Context);

  return (
    <div className={styles.container} onClick={() => rover?.setRover(roverName)}>
      {roverName === rover?.roverName && <hr />}
      <div className={styles.textbox}>
        <div className={styles.roverName}>{roverName}</div>
        <table>
          <tbody>
            <tr>
              <td>Lauch Date</td>
              <td>{launchDate}</td>
            </tr>
            <tr>
              <td>Landing Date</td>
              <td>{landingDate}</td>
            </tr>
            <tr>
              <td>End Date</td>
              <td>{lastDate}</td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <td>Total sols</td>
              <td>{totalSols}</td>
            </tr>
            <tr>
              <td>Image count</td>
              <td>{imageCount}</td>
            </tr>
          </tbody>
        </table>
      </div>
      {roverName === rover?.roverName && <hr />}
    </div>
  );
}

export default RoverCard;