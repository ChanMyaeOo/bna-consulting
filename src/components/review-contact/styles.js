import { makeStyles } from "@material-ui/core/styles";
import ServiceItem1 from '../../images/service1.jpg'

const useStyles = makeStyles((theme) => ({

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
    [theme.breakpoints.down('xs')]: {
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
