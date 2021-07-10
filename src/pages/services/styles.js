import { makeStyles } from "@material-ui/core/styles";
import ServiceItem1 from '../../images/service1.jpg'

const useStyles = makeStyles((theme) => ({
    serviceTextWrap: {
        marginTop: '70px',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '70px'
    },
    serviceText: {
        fontSize: '80%',
        textTransform: 'uppercase'
    },
    serviceTitle: {
        fontSize: '28px',
        margin: '20px 0'
    },
    serviceContent: {
        width: '60%',
        lineHeight: '1.5rem',
        textAlign: 'center',
        fontSize: '95%'
    },

    serviceItemWrap: {
        display: 'flex',
        width: '95%',
        margin: '0 auto',
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
    serviceItem: {
        padding: '40px',
        margin: '10px',
        background: `linear-gradient( rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.5) 100%),url(${ServiceItem1})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        maxWidth: '300px',
        minWidth: '300px',
        "& > h3": {
            fontSize: '22px',
            color: '#fff'
        },
        "& > p": {
            lineHeight: '1.5rem',
            color: '#fff',
            margin: '25px 0'
        },
        "& > div": {
            width: '40px',
            height: '40px',
            background: '#7e6a46',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#fff',
            fontSize: '20px'
        }
    },

    // service carousel
    serviceCarouselWrap: {
        background: '#f2f2f2',
        marginTop: '60px',
        paddingBottom: '60px'
    },
    carouselContentWrap: {
        padding: '70px 0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '95%',
        margin: '0 auto'
    },
    corouselTitle: {
        fontSize: '28px',
        minWidth: '450px',
        margin: '0 70px 0px 30px'
    },
    carouselContent: {
        lineHeight: '1.6rem',
        fontSize: '95%',
        padding: '0 40px'
    },

    carouselItem: {
        background: `linear-gradient( rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.5) 100%),url(${ServiceItem1})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        padding: '40px',
        minWidth: '350px',
        maxWidth: '350px',
        margin: '20px',
        position: 'relative',
        minHeight: '230px',
        "&:hover": {
            "& $carTextWrap": {
                opacity: '1'
            }
        }
    },
    carouselItemWrap: {
        width: '95%',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center'
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
    serviceContact: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100px',
        background: '#ad8e63'
    },
    requestHeader: {
        fontSize: '24px',
        padding: '0 50px',
        color: '#fff',
    },
    requestBtn: {
        display: 'block',
        background: '#fff',
        padding: '12px 25px',
        margin: '0 40px',
        borderRadius: '5px',
        textDecoration: 'none',
        "&:hover": {
            background: '#d1ae7c',
            color: '#fff'
        }
    },
    [theme.breakpoints.down('md')]: {
        carouselItem: {
            minWidth: '270px',
            maxWidth: '270px'
        },
        corouselTitle: {
            marginRight: 0
        }
    },
    [theme.breakpoints.down('sm')]: {
        serviceItem: {
            maxWidth: '250px',
            minWidth: '250px',
        },
        carouselContentWrap: {
            flexDirection: 'column',
            padding: '40px 0'
        },
        corouselTitle: {
            marginLeft: 0,
        },
        carouselContent: {
            padding: 0,
            marginTop: '25px'
        }
    },
    [theme.breakpoints.down('xs')]: {
        serviceTitle: {
            fontSize: '22px',
            textAlign: 'center'
        },
        serviceContent: {
            width: '95%'
        },
        serviceTextWrap: {
            margin: '40px 0'
        },
        corouselTitle: {
            minWidth: '100%',
            textAlign: 'center',
            fontSize: '24px'
        },
        carouselContent: {
            width: '95%'
        },
        serviceContact: {
            height: 'auto',
            flexDirection: 'column',
            textAlign: 'center',
        },
        requestHeader: {
            fontSize: '22px',
            margin: '15px'
        },
        requestBtn: {
            padding: '8px 15px',
            marginBottom: '25px'
        }
    }
}));
export default useStyles;
