import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    serviceContainer: {
        display: 'flex',
        width: '95%',
        margin: '0 auto',
        paddingTop: '60px',
        marginBottom: '60px'
    },
    [theme.breakpoints.down('sm')]: {
        serviceContainer: {
            flexDirection: 'column'
        }
    }
    
}));
export default useStyles;
