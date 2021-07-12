import { makeStyles } from "@material-ui/core/styles";
import ServiceItem1 from '../../images/service1.jpg'

const useStyles = makeStyles((theme) => ({

   carouselItemWrap: {
        width: '95%',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center'
    },
     carouselItem: {
        background: `linear-gradient( rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.5) 100%),url(${ServiceItem1})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        padding: '40px',
        minWidth: '365px',
        maxWidth: '365px',
        margin: '20px',
        position: 'relative',
        minHeight: '230px',
        "&:hover": {
            "& $carTextWrap": {
                opacity: '1'
            }
        }
    },
    carTextWrap: {
        background: '#ad8e63',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        padding: '10px',
        opacity: 0
    },
    carItemTitle: {
        color: '#fff',
        fontSize: '20px'
    },
    carItemText: {
        color: '#fff',
        lineHeight: '1.5rem',
        padding: '25px 0'
    },
    carItemStart: {
        color: '#fff',
        fontSize: '90%'
    },
    itemReviewTitle: {
        color: '#fff',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '60px',
        background: '#ad8e63'
    },
    [theme.breakpoints.down('sm')]: {
        carouselContainer: {
            display: 'none'
        }
    }
}));

export default useStyles;
