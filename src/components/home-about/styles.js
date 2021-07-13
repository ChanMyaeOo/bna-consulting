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
        width: '70%',
        fontFamily: 'Playfair Display, serif',
        "& > em": {
            color: '#ad8e63'
        }
    },
    askQus: {
        color: '#000',
        "&:hover": {
            color: '#ad8e63'
        }
    },
    phTxt: {
        fontSize: '18px',
        textDecoration: 'underline'
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
    },
    [theme.breakpoints.down('sm')]: {
        title: {
            fontSize: '24px',
            width: '80%'
        },
        aboutImg: {
            width: '354px',
            height: '236px'
        },
        status: {
            height: '50%',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
        },
        contentWrap: {
            flexDirection: 'column'
        },
        bottomContent: {
            marginLeft: 0
        }
    },
    [theme.breakpoints.down('xs')]: {
        about: {
            flexDirection: 'column'
        },
        content: {
            paddingRight: 0
        },
        title: {
            width: '100%'
        },
        aboutRight: {
            marginTop: '30px'
        },
        status: {
            margin: '35px 0',
            height: '340px',
        }
    }
}));

export default useStyles;
