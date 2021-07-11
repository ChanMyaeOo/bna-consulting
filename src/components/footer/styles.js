import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
   footer: {
       background: '#000',
       display: 'flex',
       justifyContent: 'space-around',
       color: '#fff',
       alignItems: 'center',
       height: '240px'
   },
   footerText: {
       color: '#fff',
       lineHeight: '1.5rem',
       fontSize: '14px'
   },
   socialIcon: {
       color: '#b78b4b'
   },
   footerTextWrap: {
       width: '40%',
       marginLeft: '35px',
       "& > img": {
           marginBottom: '25px'
       }
   },
   footerContactWrap: {
       width: '35%',
       fontSize: '14px'
   },
   footerSocialWrap: {
       width: '25%',
       "& > p": {
           marginBottom: '10px'
       }
   },
   contact: {
       display: 'flex',
       margin: '10px 0',
       "& > p": {
           marginLeft: '10px',
       }
   },
   fSocial: {
       padding: '6px',
       color: '#fff !important',
       "& > p": {
           fontSize: '14px'
       }
   },
   footerCopyright: {
       background: '#272727',
       display: 'flex',
       justifyContent: 'center',
       alignItems: 'center',
       height: '40px',
       color: '#fff',
       fontSize: '14px'
   },
   [theme.breakpoints.down('sm')]: {
       footer: {
           flexDirection: 'column',
           alignItems: 'flex-start',
           height: 'auto',
           padding: '40px 30px'
       },
       footerTextWrap: {
           width: '100%',
           marginLeft: 0
       },
       footerContactWrap: {
           width: '100%'
       },
       footerSocialWrap: {
           width: '100%'
       }

   }
}));

export default useStyles;
