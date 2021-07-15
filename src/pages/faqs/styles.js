import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    faqsWrapper: {
        paddingTop: '70px',
        width: '95%',
        margin: '0 auto',
        paddingBottom: '60px'
    },
    faqsHeaderWrap: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '50px'
    },
    faqsTitle: {
        fontSize: '80%',
        color: '#1a1e66'
    },
    faqsHeader: {
        fontSize: '30px',
        color: '#1a1e66',
        margin: '15px 0 20px 0',
        textAlign: 'center',
        fontFamily: 'Playfair Display, serif',
        "& > em": {
            color: '#ad8e63'
        }
    },
    faqsContentWrapper: {
        // display: 'flex',
    },
    faqsFormWrapper: {
        padding: '0 30px',
        background: '#7E6A46',
        maxHeight: '585px'
    },
    formTitleWrap: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    formTitle: {
        fontSize: '30px',
        color: '#fff',
        textAlign: 'center',
        width: '65%',
        margin: '25px 0 30px 0'
    },
    formText: {
        color: '#fff',
        width: '80%',
        textAlign: 'center',
        marginBottom: '25px'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        margin: '0 auto',
        "& > input": {
            padding: '10px 5px',
            margin: '10px 0'
        }
    },
    formTextArea: {
        padding: '10px 5px',
        margin: '10px 0',
        maxWidth: '100%',
        maxHeight: '45px',
        fontFamily: 'Arial',
        minHeight: '40px'
    },
    formSubmit: {
        margin: '30px 0 40px 0',
        padding: '12px 0',
        width: '40%',
        color: '#7E6A46',
        fontSize: '16px',
        cursor: 'pointer'
    },
    [theme.breakpoints.down('md')]: {
        faqsFormWrapper: {
            maxHeight: '620px'
        },
        formTitle: {
            width: '100%'
        },
        formText: {
            width: '100%'
        }
    },
    [theme.breakpoints.down('sm')]: {
        faqsFormWrapper: {
            marginTop: '50px'
        }
    }
}));
export default useStyles;
