import styles from './CSS/Header.module.css'
function Header(){
    return(
        <header className={styles.header}>
            <h1 className={styles.title}>ITU</h1> 
            <ul className={styles.list}>
                <li> <a className={styles.link} href="#">Home</a></li>
                <li> <a className={styles.link} href="#">Services</a></li>
                <li> <a className={styles.link} href="#">Qualification</a></li>
                <li> <a className={styles.link} href="#">Projects</a></li>
                <li> <a className={styles.link} href="#">Contact</a></li>
                <li> <a className={styles.link} href="#">About</a></li>
                <li> <img height='50px' className={styles.profileImage} src="../images/gada.jpg" alt="Profile" /> </li>
                <li><a className={styles.link} href="#">ITU</a></li>
            </ul>
            
        
            
        </header>
    );
}
export default Header