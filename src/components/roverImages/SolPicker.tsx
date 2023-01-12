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

  const goToSol = (goto: 'NEXT' | 'PREV') => {
    if (currentSol === parseInt(inputRef.current.value)) { // go to next or prev page
        switch (goto) {
          case 'NEXT':
            if (currentSol < totalSols)
              setSol(currentSol + 1);
            break;
          case 'PREV':
            if (currentSol > 1)
              setSol(currentSol - 1);
            break;
        }
    } else {  // jump to another page
      if (!!inputRef.current.value) {  // check not empty
        setSol(parseInt(inputRef.current.value))
      } else {
        inputRef.current.value = currentSol;
      }
    }
  }

  return (
    <div className={styles.solpicker}>
      <NextBackBtn goFunction={() => goToSol('PREV')}>
        &#10094;
      </NextBackBtn>
      sol
      <input
        type="number"
        ref={inputRef} />
      of {totalSols}
      <NextBackBtn goFunction={() => goToSol('NEXT')}>
        &#10095;
      </NextBackBtn>
    </div>
  );
}

export default SolPicker;