import { makeStyles } from "@material-ui/core/styles";
import ContactImg from '../../images/contact.jpg'

const useStyles = makeStyles((theme) => ({
    contactWrapper: {
        width: '87%',
        margin: '70px auto',
        marginBottom: '-500px',
        zIndex: '1200',
        position: 'relative',
        background: '#fff',
        padding: '25px 0 70px 0',
        boxShadow: "3px 3px 5px 2px rgba(0,0,0,0.5)"
    },
    contactTitle: {
        width: '80%',
        margin: '0 auto',
        fontSize: '30px',
        color: '#1a1e66',
        textAlign: 'center',
        padding: '50px 0'
    },
    contactIntro: {
        color: '#1a1e66',
        lineHeight: '1.6rem',
        marginBottom: '30px',
        width: '85%'
    },
    contactAddress: {
        color: '#1a1e66',
        margin: '15px 0'
    },
    contactContainer: {
        width: '90%',
        margin: '0 auto',
        display: 'flex'
    },
    formWrapper: {
        display: 'flex',
        flexDirection: 'column',
        "& > label": {
            color: '#1a1e66'
        },
        "& > input": {
            padding: '13px 7px',
            marginBottom: '20px',
            border: 'none',
            background: '#eef1f5',   
            "&:focus" : {
                outline: '1px solid #ad8e63'    
            }
        }
    },
    messageInput: {
        padding: '13px 7px',
        marginBottom: '20px',
        border: 'none',
        background: '#eef1f5',
        minHeight: '90px',
        maxWidth: '100%',
        "&:focus": {
            outline: '1px solid #ad8e63'
        }
    },
    sendInput: {
        padding: '13px 7px',
        fontSize: '16px',
        width: '30%',
        margin: '25px 0',
        background: '#ad8e63',
        border: 'none',
        color: '#fff'
    },
    contactCarousel: {
        width: '100%',
        height: '450px',
        background: `linear-gradient( rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.5) 100%),url(${ContactImg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
    },
    [theme.breakpoints.down('xs')]: {
        contactWrapper: {
            width: '90%'
        },
        contactTitle: {
            width: '90%',
            textAlign: 'left',
            fontSize: '26px',
            padding: '25px 0'
        },
        formWrapper: {
            marginTop: '35px'
        }
    }
}));
export default useStyles;
