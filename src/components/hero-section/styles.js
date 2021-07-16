import { makeStyles } from "@material-ui/core/styles";
import AboutUsImg from "../../images/hero-section.jpg";

const useStyles = makeStyles((theme) => ({
    heroSection: {
        height: "300px",
        // background: `linear-gradient( rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.5) 100%),url(${AboutUsImg})`,
        backgroundImage: `url(${AboutUsImg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundPositionY: "25%",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: '100%'
    },
    about: {
        fontSize: "55px",
        color: "#fff",
        marginLeft: "120px",
        fontFamily: 'Playfair Display, serif'
    },
    [theme.breakpoints.down('sm')]: {
        about: {
            marginLeft: 0,
            textAlign: 'center',
            fontSize: '40px'
        },
        heroSection: {
            minWidth: '100%'
        }
    },
}));

export default useStyles;
