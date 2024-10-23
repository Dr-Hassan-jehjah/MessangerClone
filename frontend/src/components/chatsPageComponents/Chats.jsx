import styles from "../../styles/chatsPage/chatsPage.module.css";
import { ChatItem } from "./ChatItem";
const Chats = () => {
  return (
    <div className={styles.chats}>
        <ul>
            <ChatItem></ChatItem>
            <ChatItem></ChatItem>
            <ChatItem></ChatItem>
            <ChatItem></ChatItem>
            <ChatItem></ChatItem>

        </ul>
    </div>
  )
}

export default Chats;
