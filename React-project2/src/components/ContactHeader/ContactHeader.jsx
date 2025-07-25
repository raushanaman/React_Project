import styles from "./ContactHeader.module.css";

const ContactHeader = () =>{
    return(

        <div className={`container ${styles.Contactsection}`}>
            <h1>Contact Us</h1>
            <p>We would love to hear from you! Please fill out the form below to get in touch with us.</p>

       </div>

    );
};
export default ContactHeader;