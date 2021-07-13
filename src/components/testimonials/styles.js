import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    testiWrapper: {
        background: '#f2f2f2',
        paddingBottom: '30px'
    },
    consultWrap: {
        background: "rgba(0, 0, 0, 0.9)",
        width: '100%',
        height: '100px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    consultTitle: {
        fontSize: '30px',
        color: '#fff',
        fontFamily: 'Playfair Display, serif',
        "& > em": {
            color: '#ad8e63'
        }
    },
    consultBtn: {
        textDecoration: 'none',
        height: 'fit-content',
        padding: '10px 20px',
        borderRadius: '30px',
        border: 'none',
        background: '#ad8e63',
        color: '#fff',
        fontSize: '16px'
    },

    // Testimonials
    testimonialWrap: {
        background: '#f2f2f2'
    },
    testimonialHeaderWrap: {
        width: '30%',
        textAlign: 'center',
        margin: '0 auto',
        padding: '60px 0'
    },
    testimonialText: {
        textTransform: 'uppercase',
        fontSize: '80%'
    },
    testimonialTitle: {
        fontSize: '30px',
        marginTop: '15px',
        fontFamily: 'Playfair Display, serif',
        "& > em": {
            color: '#ad8e63'
        }
    },

    leftTestimonial: {
        display: 'flex',
        justifyContent: 'space-around',
        marginBottom: '60px'
    },

    testi1Wrap: {
        width: '45%',
        background: '#fff',
        padding: '25px',
        "& > p": {
            lineHeight: '1.5rem'
        }
    },

    testLogo1: {
        maxWidth: '75px',
        maxHeight: '75px',
        margin: '15px 0 25px 0'
    },

    testLogo2: {
        maxWidth: '75px',
        maxHeight: '75px'
    },

    testi2Wrap: {
        width: '45%',
        background: '#fff',
        padding: '25px',
         "& > p": {
            lineHeight: '1.5rem'
        }
    },

    testiText: {
        margin: '20px 0'
    },
    testiName: {
        fontSize: '20px',
        fontWeight: 'bold'
    },
    testiPosition: {
        color: '#9c9c9c'
    },

    caroselRes: {
        display: 'none'
    },
    [theme.breakpoints.down('sm')]: {
        carouselNormal: {
            display: 'none'
        }, 
        caroselRes: {
            display: 'block',
        },
        testimonialTitle: {
            fontSize: '20px'
        },
        testimonialHeaderWrap: {
            width: '80%'
        },
        testi1Wrap: {
            width: '95%',
            margin: '0 auto',
            marginBottom: '60px'
        },
        testi2Wrap: {
            width: '95%',
            margin: '0 auto',
            marginBottom: '60px'
        },
        consultWrap: {
            flexDirection: 'column',
        },
        consultTitle: {
            fontSize: '18px'
        },
        consultBtn: {
            padding: '10px 20px'
        }
    }
}));
export default useStyles;
