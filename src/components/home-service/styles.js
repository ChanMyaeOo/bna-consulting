import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    homeServiceWrap: {
        width: '100%',
        margin: '0 auto',
        marginTop: '40px',
        background: '#f2f2f2',
        paddingBottom: '60px'
    },

    headerWrap: {
        width: '40%',
        textAlign: 'center',
        marginBottom: '100px',
        paddingTop: '60px',
        margin: '0 auto'
    },
    homeService: {
        display: 'flex',
        justifyContent: 'space-around'
    },
    serviceSecton: {
        textTransform: 'uppercase',
        fontSize: '80%'
    },
    serviceTitle: {
        fontSize: '30px',
        margin: '10px 0 30px 0',
        fontFamily: 'Playfair Display, serif',
        "& > em": {
            color: '#ad8e63'
        }
    },

    // Servie Section
    serviceSubTitle: {
        fontSize: '18px',
        fontWeight: 'bold',
        marginBottom: '5px',
        fontFamily: 'Playfair Display, serif',
    },

    serviceSubContent: {
        lineHeight: '1.5rem'
    },

    serviceSubTitle2: {
        textAlign: 'center',
        margin: '20px 0',
        fontSize: '18px',
        fontWeight: 'bold'
    },

    serviceSubContent2: {
        textAlign: 'center'
    },

    // left service 
    leftServiceWrap: {
        maxWidth: '350px'
    },

    // bookkeeper
    bookkeepingSection: {
        background: '#fff',
        padding: '30px',
        display: 'flex',
    },

    bookLogoWrap: {
        background: '#ad8e63',
        height: 'fit-content',
        marginRight: '20px',
        "& > img": {
            padding: '5px 5px 0 5px'
        }
    },

    // Annual Account
    annualAccountSection: {
        background: '#fff',
        padding: '30px',
        display: 'flex',
        margin: '30px 0'
    },
    annualLogoWrap: {
        background: '#ad8e63',
         height: 'fit-content',
        marginRight: '20px',
        "& > img": {
            padding: '5px 5px 0 5px'
        }
    },

    // VAT
    vatSection: {
        background: '#fff',
        padding: '30px',
        marginTop: '50px'
    },
    vatLogoWrap: {
        background: '#ad8e63',
        width: 'fit-content',
        borderRadius: '50%',
        margin: '0 auto',
        marginTop: '-60px',
        "& > img": {
            padding: '10px 10px 0 10px',
        }
    },

    // Annual Returns
    annualReturnSection: {
        background: '#fff',
        padding: '30px',
        margin: '30px 0',
        display: 'flex'
    },
    annualReturnLogoWrap: {
        background: '#ad8e63', height: 'fit-content',
        marginRight: '20px',
        "& > img": {
            padding: '5px 5px 0 5px'
        }

    },

    // middle service
    middleServiceWrap: {
        maxWidth: '400px',
    },

    // payroll
    payrollSection: {
        background: '#fff',
        padding: '30px',
    },
    payrollLogoWrap: {
        background: '#ad8e63',
        width: 'fit-content',
        borderRadius: '50%',
        margin: '0 auto',
        marginTop: '-60px',
        "& > img": {
            padding: '10px 10px 0 10px',
        }
    },

    // sefl assessment
    assessmentSection: {
        background: '#fff',
        padding: '30px',
        margin: '30px 0',
        display: 'flex'
    },
    assesLogoWrap: {
        background: '#ad8e63',
         height: 'fit-content',
        marginRight: '20px',
        "& > img": {
            padding: '5px 5px 0 5px'
        }
    },


    // CIS
    cisSection: {
        background: '#fff',
        padding: '30px',
        marginTop: '50px'
    },
    cisLogoWrap: {
        background: '#ad8e63',
        width: 'fit-content',
        borderRadius: '50%',
        margin: '0 auto',
        marginTop: '-60px',
        "& > img": {
            padding: '10px 10px 0 10px',
        }
    },



    // right service
    rightServiceWrap: {
        maxWidth: '298px'
    },

    // experience service
    serviceExp: {
        marginTop: '-80px',
        display: 'flex',
        justifyContent: 'center'
    },

    // limited company
    limitedSection: {
        background: '#fff',
        padding: '30px',
        margin: '30px 0',
        marginTop: '50px'
    },
    limitedLogoWrap: {
        background: '#ad8e63',
        width: 'fit-content',
        borderRadius: '50%',
        margin: '0 auto',
        marginTop: '-60px',
        "& > img": {
            padding: '10px 10px 0 10px',
        }
    },

     // documents
    documentSection: {
        background: '#fff',
        padding: '30px',
        display: 'flex'
    },
    documentLogoWrap: {
        background: '#ad8e63',
        height: 'fit-content',
        marginRight: '20px',
        "& > img": {
            padding: '5px 5px 0 5px'
        }
    },

    serviceBtnWrap: {
        width: '100%',
        minHeight: '200px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '30px'
    },

    serviceBtn: {
        padding: '17px',
        background: '#ad8e63',
        borderRadius: '30px',
        border: 'none',
        color: '#fff',
        height: 'fit-content',
        textDecoration: 'none',
        "&:hover": {
            opacity: '0.9'
        }
    },


    [theme.breakpoints.down('md')]: {
        leftServiceWrap: {
            maxWidth: '300px'
        },
        middleServiceWrap: {
            maxWidth: '300px'
        },
        rightServiceWrap: {
            maxWidth: '300px'
        }
    },
    [theme.breakpoints.down('sm')]: {
        leftServiceWrap: {
            maxWidth: '90%',
            margin: '0 auto'
        },
        middleServiceWrap: {
            maxWidth: '90%',
            margin: '0 auto'
        },
        rightServiceWrap: {
            maxWidth: '90%',
            margin: '0 auto'
        },
        homeService: {
            flexDirection: 'column',
        },
        headerWrap: {
            width: '80%',
            marginBottom: '60px'
        },
        serviceTitle: {
            fontSize: '18px'
        },
        serviceExp: {
            marginTop: 0,
            margin: '0 auto'
        }
    }
}));

export default useStyles;
