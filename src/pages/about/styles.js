import { makeStyles } from "@material-ui/core/styles";

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
    imgWrap: {
        // width: '60%'
    },
    contentWrap: {
        paddingLeft: '40px'
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
        }
    }
}));
export default useStyles;
