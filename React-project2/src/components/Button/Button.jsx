
import styles from './Button.module.css';
const Button = (props) => {
    //props destructuring in below line
    //props is an object that contains all the properties passed to the Button component

    const {isOutline, text, icon} = props;
    return (
        
        <button className={isOutline ? styles.sec_button : styles.primary_button}>
        
            {props.icon}
            {props.text}
        </button>

    );
};
export default Button;