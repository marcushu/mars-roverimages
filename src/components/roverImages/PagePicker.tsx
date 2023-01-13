import { FunctionComponent, useEffect, useState } from "react";
import styles from './pagePicker.module.css';

interface PagePickerProps {
  numOfPages: number
  currentPage: number
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}

const PagePicker: FunctionComponent<PagePickerProps> = ({ numOfPages, currentPage, setCurrentPage }) => {
  const [pages, setpages] = useState<number[]>(); 

  useEffect(() => { 
    const numberArray = Array.from(Array(numOfPages + 1).keys()).splice(1);

    setpages(numberArray);
  }, [numOfPages]);

  return (
    <div className={styles.pagepicker} data-testid="pagepicker">
      {pages?.map(page => 
        <span 
          key={page}
          onClick={() => setCurrentPage(page)} 
          className={page === currentPage ? styles.selected : styles.pagepickernumber}>
          {page}
        </span>)}
    </div>
  );
}

export default PagePicker;