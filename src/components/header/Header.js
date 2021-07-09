import React from "react";
import { Link } from 'react-router-dom'
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import LogoImg from "../../images/bnatp.png";
import ResLogoImg from "../../images/bna.png";
import useStyles from "./styles";

const Header = () => {
    const classes = useStyles();
    const handleCloseMenu = () => {
        const resOverlay = document.getElementById("res-overlay");
        resOverlay.style.display = "none";
    };

    const handleOpenMenu = () => {
        const resOverlay = document.getElementById("res-overlay");
        resOverlay.style.display = "block";
    };
    return (
        <>
            {/* For iPad View */}
            <MenuIcon className={classes.menuIcon} onClick={handleOpenMenu} />
            <div className={classes.resOverlay} id="res-overlay">
                <div className={classes.resMenu}>
                    <CloseIcon
                        className={classes.closeMenu}
                        onClick={handleCloseMenu}
                    />
                    <div className={classes.resLogoImgWrap}>
                        <img
                            src={ResLogoImg}
                            alt="logo"
                            className={classes.resLogoImg}
                        />
                    </div>

                    <ul className={classes.resHeaderTop}>
                        <li>
                            <PhoneAndroidIcon fontSize="small" />
                            0208889991012
                        </li>
                        <li>
                            <PhoneIcon fontSize="small" />
                            0208889991012
                        </li>
                        <li>
                            <EmailIcon fontSize="small" />
                            info@bnaconsulting.co.uk
                        </li>
                    </ul>

                    <ul className={classes.resHeaderBottom}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about-us">About Us</Link></li>
                        <li>Services</li>
                        <li>Faqs</li>
                        <li>Contact</li>
                    </ul>

                    <div className={classes.resHeaderSocials}>
                        <FacebookIcon className={classes.resSocial} />
                        <LinkedInIcon className={classes.resSocial} />
                        <InstagramIcon className={classes.resSocial} />
                        <EmailIcon className={classes.resSocial} />
                    </div>
                </div>
            </div>

            {/* For mobile view */}
            <div className={classes.mobResMenuWrapper}>
                <div className={classes.mobResMenu}>
                    <div>
                        <MenuIcon className={classes.mobMenuIcon} onClick={handleOpenMenu} />
                    </div>

                    <div className={classes.mobLogoWrap}>
                    <img
                        src={ResLogoImg}
                        alt="logo"
                        className={classes.mobLogoImg}
                    />
                    </div>
                </div>
            </div>

            {/* For Laptop View */}
            <div className={classes.header}>
                <div className={classes.headerLogoWrap}>
                    <img
                        src={LogoImg}
                        alt="logo"
                        className={classes.headerLogo}
                    />
                </div>

                <div className={classes.headerLinks}>
                    <ul className={classes.headerTopLinks}>
                        <li>info@bnaconsulting.co.uk</li>
                        <li>0208889991012</li>
                        <li>1 Kingdom Street, Paddington, W2 6BD</li>
                    </ul>

                    <ul className={classes.headerBtnLinks}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about-us">About Us</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/faqs">Faqs</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Header;
