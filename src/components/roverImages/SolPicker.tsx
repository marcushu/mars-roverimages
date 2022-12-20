import { FunctionComponent } from "react";
import NextBackBtn from "./NextBackBtn";
import styles from './solPicker.module.css';


const SolPicker: FunctionComponent = () => {
  const nextSol = () => {
    alert("next day");
  }

  const prevSol = () => {
    alert("prev sol")
  }

  return (
    <div className={styles.solpicker}>
      <NextBackBtn goFunction={prevSol}>
        &#10094;
      </NextBackBtn>
      sol 3 of 22343
      <NextBackBtn goFunction={nextSol}>
        &#10095;
      </NextBackBtn>
    </div>
  );
}

export default SolPicker;