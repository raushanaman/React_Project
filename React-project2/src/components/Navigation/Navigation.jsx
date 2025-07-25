import styles from "./Navigation.module.css";

const Navigation = () => {
    return (
        <nav className={styles.navigation}>
            <div className={styles.logo}>
                <img 
                    src="https://digitalsynopsis.com/wp-content/uploads/2019/04/beautiful-gradient-logo-designs-1.jpg" 
                    alt="Company Logo"
                />
            </div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Login</a></li>
            </ul>
        </nav>
    );
}

export default Navigation;