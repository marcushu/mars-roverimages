import { FunctionComponent, useEffect, useRef } from "react";
import NextBackBtn from "./NextBackBtn";
import styles from './solPicker.module.css';

interface SolPickerProps {
  currentSol: number
  totalSols: number
  setSol: (n: number) => void
}

const SolPicker: FunctionComponent<SolPickerProps> = ({ currentSol, totalSols, setSol }) => {
  const inputRef = useRef(null) as any;

  useEffect(() => {
    inputRef.current.value = currentSol;
  }, [currentSol]);

  const nextSol = () => {
    if (currentSol === parseInt(inputRef.current.value)) {
      if (currentSol < totalSols)
        setSol(currentSol + 1);
    } else {
      //TODO: check for valid input vvvv
      setSol(parseInt(inputRef.current.value));
    }
  }

  const prevSol = () => {
    if (currentSol === parseInt(inputRef.current.value)) {
      if (currentSol > 1)
        setSol(currentSol - 1);
    } else {
      setSol(parseInt(inputRef.current.value));
    }
  }

  return (
    <div className={styles.solpicker}>
      <NextBackBtn goFunction={prevSol}>
        &#10094;
      </NextBackBtn>
      sol
      <input
        type="number"
        ref={inputRef} />
      of {totalSols}
      <NextBackBtn goFunction={nextSol}>
        &#10095;
      </NextBackBtn>
    </div>
  );
}

export default SolPicker;