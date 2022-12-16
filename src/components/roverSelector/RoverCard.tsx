import { FunctionComponent, useContext } from "react";
import Context, { RoverName } from "../../roverContext";
import styles from './RoverCard.module.css';

interface RoverCardProps {
  roverName: RoverName
}

//TODO: retrieve stats from api?
const RoverCard: FunctionComponent<RoverCardProps> = ({ roverName }) => {
  const rover = useContext(Context);

  return (
    <div className={styles.container} onClick={() => rover?.setRover(roverName)}>
      {roverName === rover?.roverName && <hr />}
      <div className={styles.textbox}>
        <div className={styles.roverName}>{roverName}</div>
        <table>
          <tr>
            <td>Lauch Date</td>
            <td>11-02-2021</td>
          </tr>
          <tr>
            <td>Lauch Date</td>
            <td>2012-01-26</td>
          </tr>
          <tr>
            <td>End Date</td>
            <td>2021-03-08</td>
          </tr>
        </table>
        <table>
          <tr>
            <td>Total sols</td>
            <td>1123</td>
          </tr>
          <tr>
            <td>Image count</td>
            <td>65433</td>
          </tr>
        </table>
      </div>
      {roverName === rover?.roverName && <hr />}
    </div>
  );
}

export default RoverCard;