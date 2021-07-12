import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    serviceContainer: {
        display: 'flex',
        width: '95%',
        margin: '0 auto',
        paddingTop: '60px',
        marginBottom: '60px'
    },
    serviceContent: {
        "& > h3": {
            fontSize: '30px',
            color: '#1a1e66',
            marginBottom: '25px'
        },
        "& > p": {
            lineHeight: '1.5rem',
            color: '#1a1e66'
        },
        "& > h4": {
            fontSize: '24px',
            color: '#1a1e66',
            marginBottom: '20px'
        },
        "& > ul": {
            paddingLeft: '25px',
            color: '#1a1e66',
        }
    },
    [theme.breakpoints.down('sm')]: {
        serviceContainer: {
            flexDirection: 'column'
        },
        serviceContent: {
            paddingTop: '30px'
        }
    }
    
}));
export default useStyles;
