import { FunctionComponent } from "react";
import styles from './imageSpinner.module.css';

const ImageSpinner: FunctionComponent = () => {
  return (
    <div className={styles.spinnerbox}>
      <span className={styles.loader} />
    </div>
  );
}

export default ImageSpinner;