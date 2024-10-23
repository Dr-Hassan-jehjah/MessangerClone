import styles from "../../styles/generalComponents/header.module.css"
import { CurrentPage } from "./CurrentPage.jsx"
import { SearchBar } from "./SearchBar.jsx"
const Header = ({currentPage}) => {
  return (
    <div className={styles.header}>
        <CurrentPage currentPage={currentPage}></CurrentPage>
        <SearchBar></SearchBar>
    </div>
  )
}

export default Header