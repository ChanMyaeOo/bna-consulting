import React from "react";
import { Link, NavLink } from 'react-router-dom'
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import RoomIcon from '@material-ui/icons/Room';
import LogoImg from '../../images/jua-logo.jpg'
import ResLogoImg from '../../images/res-logo.jpg'
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
        const resHeaderElement = document.getElementById("mobResMenuWrapper")
        if (scrolled > 300) {
            headerElement.classList.add(classes.fixedHeader)
            resHeaderElement.classList.add(classes.fixedHeader)
        } else if (scrolled <= 300) {
            headerElement.classList.remove(classes.fixedHeader)
            resHeaderElement.classList.remove(classes.fixedHeader)
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
                        <Link to="/" onClick={handleCloseMenu} >
                        <img
                            src={ResLogoImg}
                            alt="logo"
                            className={classes.resLogoImg}
                        />
                        </Link>
                    </div>

                    <ul className={classes.resHeaderTop}>
                        <li>
                            <PhoneIcon fontSize="small" className={classes.resHeaerIcon}/>
                            +44 20 3830 8882
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
            <div className={classes.mobResMenuWrapper} id="mobResMenuWrapper">
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
                    <Link to="/">
                    <img
                        src={LogoImg}
                        alt="logo"
                        className={classes.headerLogo}
                    />
                    </Link>
                </div>

                <div className={classes.headerLinks}>
                    <ul className={classes.headerTopLinks}>
                        <li><EmailIcon className={classes.hdIcon}/> info@jjukaccountancy.com</li>
                        <li><PhoneIcon className={classes.hdIcon}/> +44 20 3830 8882</li>
                        <li><RoomIcon className={classes.hdIcon}/> 368 Caledonian Rd London N1 1DU</li>
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
