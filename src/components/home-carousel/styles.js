import { makeStyles } from "@material-ui/core/styles";
import HeroImg1 from '../../images/hero1.jpg'
import HeroImg2 from '../../images/hero2.jpg'

const useStyles = makeStyles((theme) => ({
    
    carouselItem1: {
        background: `linear-gradient( rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.5) 100%),url(${HeroImg1})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        height: '500px'
    },
    carouselItem2: {
        background: `linear-gradient( rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.5) 100%),url(${HeroImg2})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        height: '500px'
    },

    headerWrapper: {
        maxWidth: '70%',
        margin: '0 auto'
    },

    headerIntro: {
        color: "#d1ae7c",
        letterSpacing: '5px',
        wordSpacing: '3px',
        textTransform: "uppercase",
        padding: '20px'
    },
    headerTitle: {
        fontFamily: 'Playfair Display',
        fontSize: '60px',
        color: '#fff',
        width: '60%',
        margin: '0 auto'
    },

    headerContent: {
        color: '#fff',
        padding: '20px 0 30px 0',
        lineHeight: '1.5rem',
        width: '50%',
        margin: '0 auto'
    },
    headerBtn: {
        padding: '12px 25px',
        borderRadius: '10px',
        outline: 'none',
        border: 'none',
        background: '#7e6a46',
        color: '#fff',
        opacity: '0.9',
        marginBottom: "30px",
        textDecoration: 'none',
        "&:hover": {
            opacity: '1'
        }
    },
    [theme.breakpoints.down('md')]: {
        headerWrapper: {
            width: '100%'
        },
        headerTitle: {
            width: '100%'
        },
        headerContent: {
            width: '100%'
        }
    },
    [theme.breakpoints.down("xs")]: {
        headerWrapper: {
            width: '100%'
        },
        headerIntro: {
            letterSpacing: 0,
            wordSpaing: 0,
            fontSize: '15px'
        },
        headerTitle: {
            fontSize: '20px',
            width: '100%'
        },
        headerContent: {
            fontSize: '16px',
            width: '100%'
        },
        carouselItem1: {
            height: 'auto',
            paddingBottom: '45px'
        },
        carouselItem2: {
            height: 'auto',
            paddingBottom: '45px'
        }
    }
}));

export default useStyles;
