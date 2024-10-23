import { MessageCircle } from "lucide-react"
import { UsersRound } from "lucide-react"
import { Compass } from "lucide-react"


import styles from "../../styles/generalComponents/footer.module.css"
const Footer = () => {
  return (
    <div className={styles.footer}>
        <MessageCircle className={styles.selected}></MessageCircle>
        <UsersRound className={styles.notSelected}></UsersRound>
        <Compass size={24} className={styles.notSelected}></Compass>
    </div>
  )
}

export default Footer