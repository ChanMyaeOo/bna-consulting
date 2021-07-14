import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    header: {
        display: 'flex',
        zIndex: '1400',
    },
    fixedHeader: {
        position: 'fixed',
        top: 0,
        width: '100%',
        background: "#fff",
        transition: 'background 0.8s ease',
        boxShadow: '0px 2px 2px rgba(0,0,0,0.5)'
    },
    headerLogoWrap: {
        width: '25%',
        display: 'flex',
        alignItems: 'center'
    },
    headerLogo: {
        width: '140px',
        height: '85px',
        marginLeft: '50px'
    },
    headerLinks: {
        width: '75%',
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 'auto',
    },
    headerTopLinks: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        background: '#000',
        height: '50px',
        color: '#fff',
        "& > li": {
            listStyle: 'none',
            display: 'flex',
            alignItems: 'center',
            fontSize: '15px'
        }
    },
    headerBtnLinks: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '65px',
        "& > li": {
            listStyle: 'none',
            fontWeight: 'bold',
            "& > a": {
                textDecoration: 'none',
                color: '#000'
            }
        }
    },

    hdIcon: {
        color: '#fff',
        fontSize: '18px',
        paddingRight: '10px'
    },
    menuIcon: {
        fontSize: '40px',
        border: '1px solid #fff',
        borderRadius: '50%',
        position: 'absolute',
        top: 0,
        left: 0,
        display: 'none',
        zIndex: '1000',
        color: '#fff'
    },

    closeMenu: {
        fontSize: '50px',
        color: '#fff',
        cursor: 'pointer'
    },

    // Responsive menu 
    resOverlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: "rgba(0,0,0,0.7)",
        display: 'none',
        zIndex: '1500',
        transition: 'all 3s ease'
    },
    resMenu: {
        background: '#000',
        height: '100%',
        width: '270px',
    },
    resLogoImgWrap: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '25px'
    },
    resLogoImg: {
        width: '190px',
        height: '100px',
    },
    contactSocial: {
        lineHeight: '14px'
    },
    resHeaderTop: {
        color: '#6b521c',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        paddingLeft: '25px',
        "& > li": {
            listStyle: 'none',
            fontSize: '14px',
            display: 'flex',
            margin: '5px 0',
        }
    },
    resHeaerIcon: {
        paddingRight: '10px'
    },
    resHeaderBottom: {
        color: '#fff',
        "& > li": {
            listStyle: 'none',
            margin: '30px',
            "& > a": {
                color: '#fff',
                textDecoration: 'none',
            }
        }
    },
    resHeaderSocials: {
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: '40px'
    },
    resSocial: {
        color: '#6b521c'
    },

    // For mobile view
    mobResMenuWrapper: {
        display: 'none'
    },
    mobResMenu: {
        height: '62px',
        width: '100%',
        background: '#000',
        display: 'flex',
        "& > div": {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }
    },
    mobLogoWrap: {
        width: '100%',
        margin: '0 auto'
    },
    mobLogoImg: {
        width: '95px',
        height: '50px',
        margin: '0 auto'
    },
    mobMenuIcon: {
        color: '#fff',
        fontSize: '40px'
    },

    active: {
        color: 'red'
    },
  
    [theme.breakpoints.down('md')]: {
        menuIcon: {
            display: 'block'
        },
        header: {
            display: 'none'
        }
    },
    [theme.breakpoints.down('xs')]: {
        menuIcon: {
            display: 'none'
        },
        mobResMenuWrapper: {
            display: 'block'
        }
    },
}));

export default useStyles;
