import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    about: {
        marginTop: '35px',
        display: 'flex',
        maxWidth: '95%',
        margin: '0 auto'
    },
    page: {
        textTransform: 'uppercase',
        fontSize: '80%'
    },
    title: {
        fontSize: '32px',
        margin: '15px 0',
        width: '70%'
    },
    contentWrap: {
        display: 'flex',
        marginBottom: '25px'
    },
    content: {
        lineHeight: '1.5rem',
        paddingRight: '20px'
    },
   
    bottomContent: {
        marginLeft: '60px'
    },
    aboutRight: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    aboutImg: {
        borderRadius: '30px'
    },
    status: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '30px'
    },
    statusNumber: {
        fontSize: '30px',
        color: '#6a592f',
        fontWeight: 'bold'
    },
    statusName: {
        fontWeight: 'bold'
    }
}));

export default useStyles;
