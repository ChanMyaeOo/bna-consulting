import { makeStyles } from "@material-ui/core/styles";
import ServiceItem1 from '../../images/service1.jpg'

const useStyles = makeStyles((theme) => ({
    carouselWrapper: {
        display: 'none'
    },
   item: {
       width: '90%',
       background: `linear-gradient( rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.5) 100%),url(${ServiceItem1})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
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
       justifyContent: 'center'
   },
   [theme.breakpoints.down('sm')]: {
       carouselWrapper: {
           display: 'block'
       }
   }
}));

export default useStyles;
