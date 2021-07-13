import { makeStyles } from "@material-ui/core/styles";
import UtrImg from '../../images/utr-number.jpg'
import SelfAssessImg from '../../images/self-assessment.jpg'
import AnnualReturnsImg from '../../images/annual-returns.jpg'
import AnnualAccountsImg from '../../images/annual-accounts.jpg'
import LimitedCompanyImg from '../../images/limited-company.jpg'
import CisImg from '../../images/cis.jpg'

const useStyles = makeStyles((theme) => ({

    carouselContainer: {
        paddingBottom: '40px'
    },
   carouselItemWrap: {
        width: '95%',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center'
    },
     carouselItem: {
        padding: '40px',
        minWidth: '365px',
        maxWidth: '365px',
        margin: '20px',
        position: 'relative',
        minHeight: '230px',
        "&:hover": {
            "& $carTextWrap": {
                transition: "opacity 2s",
                opacity: '0.9'
            },
            "& $itemReviewTitle": {
                transition: "opacity 1s",
                opacity: 0
            }
        }
    },
    carTextWrap: {
        background: '#ad8e63',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        padding: '10px',
        opacity: 0
    },
    carItemTitle: {
        color: '#fff',
        fontSize: '20px'
    },
    carItemText: {
        color: '#fff',
        lineHeight: '1.5rem',
        padding: '25px 0'
    },
    carItemStart: {
        color: '#fff',
        fontSize: '90%',
        textDecoration: 'none',
    },
    itemReviewTitle: {
        color: '#fff',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '60px',
        background: '#ad8e63',
        opacity: '0.9'
    },

    // for different backgrounds
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

    [theme.breakpoints.down('sm')]: {
        carouselContainer: {
            display: 'none'
        }
    }
}));

export default useStyles;
