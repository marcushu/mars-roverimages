import { FunctionComponent, useState } from "react";
import NextBackBtn from "./NextBackBtn";
import styles from './solPicker.module.css';


const SolPicker: FunctionComponent = () => {
  const [solValue, setSolValue] = useState(1);

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const num = parseInt(evt.target.value);
    //if solValue !== currentSol
    //  hide next/back buttons
    //  display GoTo button
    //willl require a handler (prop) to set new page
    setSolValue(num);
  }

  const goToSol = () => {
    alert('go to ' + solValue.toString());
  }

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
      sol <input type="number" value={solValue} onChange={e => handleChange(e)} /> of 2341
      <NextBackBtn goFunction={solValue === 3 ? goToSol : nextSol}>
        &#10095;
      </NextBackBtn>
    </div>
  );
}

export default SolPicker;