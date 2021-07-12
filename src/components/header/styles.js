import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    header: {
        display: 'flex',
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
            listStyle: 'none'
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
    },
    resMenu: {
        background: '#000',
        height: '100%',
        width: '250px',
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
        alignItems: 'center',
        "& > li": {
            listStyle: 'none',
            fontSize: '14px'
        }
    },
    resHeaderBottom: {
        color: '#fff',
        "& > li": {
            listStyle: 'none',
            margin: '30px'
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
