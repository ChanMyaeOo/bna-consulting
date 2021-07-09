import { makeStyles } from "@material-ui/core/styles";
import BusinessImg from '../../images/business.jpg'
const useStyles = makeStyles((theme) => ({
    aboutContentWrap: {
        margin: '70px 0'
    },
    aboutTitle: {
        fontSize: '90%',
        textAlign: 'center'
    },
    aboutHeader: {
        fontSize: '30px',
        width: '35%',
        margin: '0 auto',
        padding: '30px 0 50px 0',
        textAlign: 'center'
    },
    aboutContent: {
        display: 'flex',
        width: '95%',
        margin: '0 auto',
    },
    contentWrap: {
        paddingLeft: '40px'
    },


    // about item section
    itemWrapper: {
        width: '100%',
        height: '450px',
        background: `linear-gradient( rgba(0, 0, 0, 0.7) 100%, rgba(0, 0, 0, 0.7) 100%),url(${BusinessImg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
    },
    aboutItemWrap: {
        padding: '20px',
        textAlign: "center",
    },
    itemLogo: {
        width: '60px'
    },
    itemTitle: {
        fontSize: '28px',
        color: '#fff',
        margin: '30px 0',
    },
    itemContent: {
        color: '#fff',
        lineHeight: '1.5rem',
        fontSize: '90%'
    },
    [theme.breakpoints.down('md')]: {
        aboutHeader: {
            width: '50%'
        }
    },
    [theme.breakpoints.down('sm')]: {
        aboutHeader: {
            width: '70%'
        },
        aboutContent: {
            flexDirection: 'column'
        },
        imgWrap: {
            margin: '0 auto',
            marginBottom: '30px'
        },
        contentWrap: {
            paddingLeft: 0
        },
        aboutImg: {
            width: '320px'
        },

        itemWrapper: {
            height: 'auto',
            flexDirection: 'column',
            padding: '30px 0'
        },
        aboutItemWrap: {
            width: '80%'
        }
    }
}));
export default useStyles;
