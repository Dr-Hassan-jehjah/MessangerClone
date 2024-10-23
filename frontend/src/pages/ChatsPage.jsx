import styles from "../styles/chatsPage/chatsPage.module.css"
import Header from "../components/generalComponents/Header.jsx";
import OnlinePeople from "../components/chatsPageComponents/OnlinePeople.jsx";
import Chats from "../components/chatsPageComponents/Chats.jsx";
import Footer from "../components/generalComponents/Footer.jsx";

const ChatsPage = () => {
  return (
    <div className={styles.container}>
       <Header currentPage="Chats"></Header>
       <OnlinePeople></OnlinePeople>
       <Chats></Chats>
       <Footer></Footer>
    </div>
  )
}
export default ChatsPage;