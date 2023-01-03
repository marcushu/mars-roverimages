import { FunctionComponent } from "react";
import styles from './PageFooter.module.css';


const PageFooter: FunctionComponent = () => {
    return ( 
        <div className={styles.footerbox}>
            All images &copy; NASA
        </div>
     );
}
 
export default PageFooter;