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
    [theme.breakpoints.down('sm')]: {
        serviceItem: {
            maxWidth: '250px',
            minWidth: '250px',
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
        }
    }
}));
export default useStyles;
