import styles from './CSS/Footer.module.css'
function Footer(){
    return(
        <footer className={styles.footer}>
<nav className={styles.nav}>
    <ul className={styles.list}>
    <li> <a className={styles.link} href="mailto:injifanotu@gmail.com.com">Send email</a></li>
    <li> <a className={styles.link} href="tel:+251962408198">+251962408198</a></li>
    <li> <a className={styles.link} href="https://github.com/Injifannoo/">Github</a></li>
    <li> <a className={styles.link} href="https://t.me/InjifannooTU">Telegram</a></li>
    <li> <a className={styles.link} href="https://www.linkedin.com/in/injifanotamiru/">Linkedn</a></li>

    </ul>
</nav> 
   <p>&copy;{new Date().getFullYear()} Injifannoo Taammiruu Urgeessaa</p>

</footer>
    );
}
export default Footer