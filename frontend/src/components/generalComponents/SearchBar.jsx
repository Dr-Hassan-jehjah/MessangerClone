import styles from "../../styles/generalComponents/searchBar.module.css";
import { Search } from "lucide-react";

export const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
        <input type="text" placeholder="Search"/>
        <Search size={20} className={styles.icon}></Search>
    </div>
  )
}
