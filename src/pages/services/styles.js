import { makeStyles } from "@material-ui/core/styles";
import UtrImg from '../../images/utr-number.jpg'
import SelfAssessImg from '../../images/self-assessment.jpg'
import AnnualReturnsImg from '../../images/annual-returns.jpg'
import AnnualAccountsImg from '../../images/annual-accounts.jpg'
import LimitedCompanyImg from '../../images/limited-company.jpg'
import CisImg from '../../images/cis.jpg'
import VatImg from '../../images/vat.jpg'
import PayrollImg from '../../images/payroll.jpg'
import BookkeepingImg from '../../images/bookkeeping.jpg'

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
        textTransform: 'uppercase',
        color: '#1a1e66'
    },
    serviceTitle: {
        fontSize: '30px',
        margin: '20px 0',
        fontFamily: 'Playfair Display, serif',
        color: '#1a1e66',
        "& > em": {
            color: '#ad8e63'
        }
    },
    serviceContent: {
        width: '60%',
        lineHeight: '1.5rem',
        textAlign: 'center',
        fontSize: '95%',
        color: '#1a1e66'
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
        maxWidth: '300px',
        minWidth: '300px',
        "& > h3": {
            fontSize: '22px',
            color: '#fff',
            "& > a": {
                color: '#fff',
                textDecoration: 'none',
                "&:hover": {
                    color: '#ad8e63'
                }
            }
        },
        "& > p": {
            lineHeight: '1.5rem',
            color: '#fff',
            margin: '25px 0'
        },
        "& > a": {
            width: '40px',
            height: '40px',
            background: '#7e6a46',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#fff',
            fontSize: '20px',
            textDecoration: 'none',
        }
    },

    // service carousel
    serviceCarouselWrap: {
        background: '#f2f2f2',
        marginTop: '60px',
        paddingBottom: '60px'
    },
    carouselContentWrap: {
        padding: '70px 0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '95%',
        margin: '0 auto'
    },
    corouselTitle: {
        fontSize: '30px',
        minWidth: '450px',
        margin: '0 70px 0px 30px',
        fontFamily: 'Playfair Display, serif',
        color: '#1a1e66',
        "& > em": {
            color: '#ad8e63'
        }
    },
    carouselContent: {
        lineHeight: '1.6rem',
        fontSize: '95%',
        padding: '0 40px',
        color: '#1a1e66'
    },

    // for different background
    utrNumber: {
        background: `linear-gradient( rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.5) 100%),url(${UtrImg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
    },
    selfAssessment: {
        background: `linear-gradient( rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.5) 100%),url(${SelfAssessImg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
    },
    annualReturns: {
        background: `linear-gradient( rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.5) 100%),url(${AnnualReturnsImg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
    },
    annualAccounts: {
        background: `linear-gradient( rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.5) 100%),url(${AnnualAccountsImg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
    },
    limitedCompany: {
        background: `linear-gradient( rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.5) 100%),url(${LimitedCompanyImg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
    },
    cis: {
        background: `linear-gradient( rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.5) 100%),url(${CisImg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
    },
    vat: {
        background: `linear-gradient( rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.5) 100%),url(${VatImg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
    },
    payroll: {
        background: `linear-gradient( rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.5) 100%),url(${PayrollImg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
    },
    bookkeeping: {
        background: `linear-gradient( rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.5) 100%),url(${BookkeepingImg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
    },

    

    
    [theme.breakpoints.down('md')]: {
        corouselTitle: {
            marginRight: 0
        },
        serviceItemWrap: {
            justifyContent: 'flex-start',
            paddingLeft: '120px'
        },
    },
    [theme.breakpoints.down('sm')]: {
        serviceItem: {
            maxWidth: '250px',
            minWidth: '250px',
        },
        carouselContentWrap: {
            flexDirection: 'column',
            padding: '40px 0'
        },
        corouselTitle: {
            marginLeft: 0,
        },
        carouselContent: {
            padding: 0,
            marginTop: '25px'
        },
        serviceItemWrap: {
            justifyContent: 'flex-start',
            paddingLeft: '25px'
        },
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
        },
        serviceItemWrap: {
            paddingLeft: 0
        },
        corouselTitle: {
            minWidth: '100%',
            textAlign: 'center',
            fontSize: '24px'
        },
        carouselContent: {
            width: '95%'
        },
    }
}));
export default useStyles;
