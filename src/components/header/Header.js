import React from "react";
import { Link, NavLink } from 'react-router-dom'
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import RoomIcon from '@material-ui/icons/Room';
import LogoImg from "../../images/bnatp.png";
import ResLogoImg from "../../images/bna.png";
import useStyles from "./styles";
import './style.css'

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

    // to handle header fixed on scroll
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        const headerElement = document.getElementById("header")
        if (scrolled > 300) {
            headerElement.classList.add(classes.fixedHeader)
        } else if (scrolled <= 300) {
            headerElement.classList.remove(classes.fixedHeader)
        }
    };
    
    window.addEventListener("scroll", toggleVisible);
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
                            <PhoneAndroidIcon fontSize="small" className={classes.resHeaerIcon}/>
                            0208889991012
                        </li>
                        <li>
                            <PhoneIcon fontSize="small" className={classes.resHeaerIcon}/>
                            0208889991012
                        </li>
                        <li>
                            <EmailIcon fontSize="small" className={classes.resHeaerIcon}/>
                            info@jjukaccountancy.com
                        </li>
                    </ul>

                    <ul className={classes.resHeaderBottom}>
                        <li><NavLink exact to="/" onClick={handleCloseMenu}>Home</NavLink></li>
                        <li><NavLink to="/about-us" onClick={handleCloseMenu}>About Us</NavLink></li>
                        <li><NavLink to="/services" onClick={handleCloseMenu}>Services</NavLink></li>
                        <li><NavLink to="/faqs" onClick={handleCloseMenu}>Faqs</NavLink></li>
                        <li><NavLink to="/contact" onClick={handleCloseMenu}>Contact</NavLink></li>
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
            <div className={classes.header} id="header">
                <div className={classes.headerLogoWrap}>
                    <img
                        src={LogoImg}
                        alt="logo"
                        className={classes.headerLogo}
                    />
                </div>

                <div className={classes.headerLinks}>
                    <ul className={classes.headerTopLinks}>
                        <li><EmailIcon className={classes.hdIcon}/> info@bnaconsulting.co.uk</li>
                        <li><PhoneIcon className={classes.hdIcon}/> 02089919910</li>
                        <li><RoomIcon className={classes.hdIcon}/> 1 Kingdom Street, Paddington, W2 6BD</li>
                    </ul>

                    <ul className={classes.headerBtnLinks}>
                        <li className="header-list"><NavLink exact to="/" activeClassName="active" className="header-link">Home</NavLink></li>
                        <li><NavLink to="/about-us" activeClassName="active">About Us</NavLink></li>
                        <li><NavLink to="/services" activeClassName="active">Services</NavLink></li>
                        <li><NavLink to="/faqs" activeClassName="active">Faqs</NavLink></li>
                        <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Header;
