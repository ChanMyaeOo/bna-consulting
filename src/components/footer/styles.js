import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
   footer: {
       background: '#fff',
       display: 'flex',
       justifyContent: 'space-around',
       color: '#fff',
       alignItems: 'center',
       height: '240px'
   },
   footerText: {
       color: '#000',
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
           marginBottom: '15px',
           color: '#000'
       }
   },
   contact: {
       display: 'flex',
       margin: '10px 0',
       alignItems: 'center',
       "& > p": {
           marginLeft: '10px',
           color: '#000'
       }
   },
   fSocial: {
       paddingRight: '10px',
       cursor: 'pointer',
       fontSize: '35px',
       "&:hover": {
           color: '#000 !important',
           transition: 'color 1s'
       }
   },
   footerCopyright: {
       background: '#1e415d',
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
           marginLeft: 0,
           marginBottom: '25px',
       },
       footerContactWrap: {
           width: '100%',
           marginBottom: '25px'
       },
       footerSocialWrap: {
           width: '100%'
       },
       footerText: {
           marginTop: '20px'
       }

   }
}));

export default useStyles;
