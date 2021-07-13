import { makeStyles } from "@material-ui/core/styles";
import UtrImg from '../../images/utr-number.jpg'
import SelfAssessImg from '../../images/self-assessment.jpg'
import AnnualReturnsImg from '../../images/annual-returns.jpg'
import AnnualAccountsImg from '../../images/annual-accounts.jpg'
import LimitedCompanyImg from '../../images/limited-company.jpg'
import CisImg from '../../images/cis.jpg'


const useStyles = makeStyles((theme) => ({
    carouselWrapper: {
        display: 'none',
        paddingBottom: '60px'
    },
   item: {
       width: '90%',
        height: '260px',
        margin: '0 auto',
        position: 'relative'
   },
   itemTitle: {
       background: '#ad8e63',
       color: '#fff',
       position: 'absolute',
       bottom: 0,
       width: '100%',
       height: '60px',
       display: 'flex',
       alignItems: 'center',
       justifyContent: 'center',
       textDecoration: 'none',
       fontWeight: 'bold',
       fontSize: '18px'
   },
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
       carouselWrapper: {
           display: 'block'
       }
   }
}));

export default useStyles;
