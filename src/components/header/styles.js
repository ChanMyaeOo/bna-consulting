import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    header: {
        display: 'flex',
    },
    fixedHeader: {
        zIndex: '1400',
        position: 'fixed',
        top: 0,
        width: '100%',
        background: "#fff",
        boxShadow: '0px 2px 2px rgba(0,0,0,0.5)'
    },
    headerLogoWrap: {
        width: '28%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerLogo: {
    
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
        color: '#fff',
    },

    closeMenu: {
        fontSize: '50px',
        color: '#ad8e63',
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
        background: '#fff',
        height: '100%',
        width: '310px',
    },
    resLogoImgWrap: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '25px'
    },
    resLogoImg: {
        
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
                color: '#000',
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
        display: 'none',
    },
    mobResMenu: {
        // height: '62px',
        height: 'auto',
        width: '100%',
        background: '#fff',
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
        // width: '95px',
        // height: '50px',
        margin: '0 auto'
    },
    mobMenuIcon: {
        color: '#ad8e63',
        fontSize: '40px'
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
