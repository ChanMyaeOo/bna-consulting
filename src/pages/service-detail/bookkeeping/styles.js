import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    serviceContainer: {
        display: 'flex',
        width: '95%',
        margin: '0 auto',
        paddingTop: '60px',
        marginBottom: '60px'
    },

    serviceNav: {
        minWidth: '250px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    }
}));
export default useStyles;
