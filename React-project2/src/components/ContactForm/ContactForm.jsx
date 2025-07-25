import styles from './ContactForm.module.css';
import Button from '../Button/Button';
import { MdOutlineMessage } from "react-icons/md";
import { CiPhone } from "react-icons/ci";

const ContactForm = () => {
    return (
        <section className={styles.container}>

            <div className= {styles.contact_form}>
                <h2>Get In Touch</h2>
                <div className={styles.top_buttons}>
                <Button 
                //using props (properties) to pass data to the Button component
                text="VIA SUPPORT CHAT" icon={<MdOutlineMessage fontSize="24px" />}
                
                />

                <Button 
                //using props (properties) to pass data to the Button component
                
                text="VIA CALL" icon={<CiPhone fontSize="24px" />}
                
                />
                </div>
                <Button 
                //using props (properties) to pass data to the Button component
                isOutline={true}
                text="VIA EMAIL FORM" icon={<MdOutlineMessage fontSize="24px" />}
                
                />
                <form>
                    <div className={styles.form_group}>
                        <label htmlFor='name'>Name</label>
                        <input type='text' id="name" placeholder='Enter your name' />
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' placeholder='Enter your email' />
                        <label htmlFor='message'>Message</label>
                        <textarea name="message" id="message" placeholder='Enter Your Message' rows={3}></textarea>
                        <Button 
                        //using props (properties) to pass data to the Button component
                        text="SEND MESSAGE" icon={<MdOutlineMessage fontSize="24px" />}/>
                        
                    </div>
                </form>
            </div>

            <div className={styles.contact_img}></div>

        </section>

    );
};
export default ContactForm;