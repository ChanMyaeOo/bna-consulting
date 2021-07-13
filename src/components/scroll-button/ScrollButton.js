import React, { useState } from "react";
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    btn: {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: '1',
        display: 'block',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        border: '1px solid #ccc',
        "&:hover": {
            cursor: 'pointer'
        }
    }
}))

const ScrollButton = () => {
    const classes = useStyles();
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
            /* you can also use 'auto' behaviour
         in place of 'smooth' */
        });
    };

    window.addEventListener("scroll", toggleVisible);
    return <div>
        <button onClick={scrollToTop} style={{display: visible ? 'inline' : 'none' }} className={classes.btn}><ExpandLessIcon/></button>
    </div>;
};

export default ScrollButton;
