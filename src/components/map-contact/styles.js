import { makeStyles } from "@material-ui/core/styles";
import ContactImg from '../../images/home-contact.jpg'

const useStyles = makeStyles((theme) => ({
    homeContact: {
        background: `linear-gradient( rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.5) 100%),url(${ContactImg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        padding: '60px'
    },
    contactTitle: {
        fontSize: '38px',
        color: '#fff',
        marginBottom: '30px',
        fontFamily: 'Playfair Display, serif',
        "& > em": {
            color: '#ad8e63'
        }
    },
    contactText: {
        lineHeight: '1.5rem',
        color: '#fff',
        marginBottom: '15px'
    },
    contactFormText: {
        color: '#fff',
    },
    inputWrap: {
        width: '100%',
        display: 'flex'
    },
    contactForm: {
        marginTop: '10px'
    },
    formInput: {
        flex: '1',
        maxWidth: '40%',
        padding: '15px',
        margin: '5px'
    },
    submitBtn: {
        padding: '15px',
        margin: '5px',
        flex: '1',
        maxWidth: '47%',
        background: '#ad8e63',
        color: '#fff',
        border: 'none'
    },
    formAction: {
        background: '#fff',
    },

    [theme.breakpoints.down('sm')]: {
        inputWrap: {
            flexDirection: 'column'
        },
        formInput: {
            maxWidth: '100%'
        },
        submitBtn: {
            maxWidth: '100%'
        },
        homeContact: {
            padding: '40px 20px',
        },
        contactTitle: {
            marginBottom: '20px',
            fontSize: '28px'
        }
    }

}));

export default useStyles;
