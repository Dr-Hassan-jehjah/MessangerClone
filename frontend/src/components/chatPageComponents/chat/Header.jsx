import { Video } from "lucide-react"
import { Phone } from "lucide-react"
import { ChevronLeft } from "lucide-react"
import styles from "../../../styles/chatPage/chat.module.css"

const Header = () => {
  return (
    <div className={styles.header}>
        <div className="options">
            <ChevronLeft></ChevronLeft>
            <img src="" alt="" />
        </div>
        <div className="options">
            <Phone></Phone>
            <Video></Video>
        </div>
        
    </div>
  )
}

export default Header