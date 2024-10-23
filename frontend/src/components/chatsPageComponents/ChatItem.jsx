import styles from "../../styles/chatsPage/chatsPage.module.css"
import { Circle } from "lucide-react"
import { Check } from "lucide-react"
export const ChatItem = () => {
  return (
    <li>
        <div className={styles.info}>
            <div className={styles.infoImg}>
                <img src="https://avatar.iran.liara.run/username?username=James+Taylor&background=f4d9b2&color=FF9800&size=40" alt="" />
            </div>
            <div className={styles.infoDetails}>
                <p className={styles.detailsName}>Hassanoviskie Sh</p>
                <p className={styles.detailsMsg}>You: hey bro - Fri</p>
            </div>
        </div>
        <div className={styles.lstMsgStatus}>
            <div className={styles.statusCircle}>
                <Check className={styles.statusTick} size={13}></Check>
            </div>
        </div>
    </li>
  )
}
