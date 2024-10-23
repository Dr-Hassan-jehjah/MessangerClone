import styles from "../../styles/generalComponents/currentPage.module.css";

import { Camera } from 'lucide-react';
import { SquarePen } from "lucide-react";

export const CurrentPage = ({currentPage}) => {
  return (
    <div className={styles.currentPage}>
        <div className={styles.parent}>
            <div className={styles.child}>
                <img src="https://avatar.iran.liara.run/username?username=James+Taylor&background=f4d9b2&color=FF9800&size=40" alt="" />
            </div>
            <h1>
                {currentPage}
            </h1>
        </div>
        <div className={styles.parent}>
            <button><Camera/></button>
            <button><SquarePen/></button>
        </div>
    </div>
  )
}
