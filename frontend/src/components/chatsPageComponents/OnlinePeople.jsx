import styles from "../../styles/chatsPage/chatsPage.module.css";
import { Plus } from 'lucide-react';

const OnlinePeople = () => {
  return (
    <div className={styles.onlinePeople}>
        <div className={styles.story}>
            <div className={styles.icon}>
                <Plus ></Plus>
            </div>
            <p>Your Story</p>
        </div>
        <div className={styles.person}>
            <img src="https://avatar.iran.liara.run/username?username=James+Taylor&background=f4d9b2&color=FF9800&size=40" alt="" />
            <p>Person</p>
        </div>
        <div className={styles.person}>
            <img src="https://avatar.iran.liara.run/username?username=James+Taylor&background=f4d9b2&color=FF9800&size=40" alt="" />
            <p>Person</p>
        </div>
        <div className={styles.person}>
            <img src="https://avatar.iran.liara.run/username?username=James+Taylor&background=f4d9b2&color=FF9800&size=40" alt="" />
            <p>Person</p>
        </div>
        <div className={styles.person}>
            <img src="https://avatar.iran.liara.run/username?username=James+Taylor&background=f4d9b2&color=FF9800&size=40" alt="" />
            <p>Person</p>
        </div>
        <div className={styles.person}>
            <img src="https://avatar.iran.liara.run/username?username=James+Taylor&background=f4d9b2&color=FF9800&size=40" alt="" />
            <p>Person</p>
        </div>
    </div>
  )
}

export default OnlinePeople