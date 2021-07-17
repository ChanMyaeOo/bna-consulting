import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../images/footer-logo.jpg'
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import HomeIcon from '@material-ui/icons/Home';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import useStyles from './styles'

const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.footerWrap}>
            <div className={classes.footer}>
            <div className={classes.footerTextWrap}>
                <Link to="/"><img src={Logo} alt="logo" /></Link>
                <p className={classes.footerText}>We are experienced and qualified English and Russian speaking executive Accounting &amp; Consulting firm based in London.</p>
            </div>

            <div className={classes.footerContactWrap}>
                <div className={classes.contact}>
                    <PhoneIcon className={classes.socialIcon} />
                    <p>+44 20 3830 8882</p>
                </div>

                <div className={classes.contact}>
                    <EmailIcon className={classes.socialIcon}/>
                    <p>info@jjukaccountancy.com</p>
                </div>

                <div className={classes.contact}>
                    <HomeIcon className={classes.socialIcon}/>
                    <p>368 Caledonian Rd London N1 1DU</p>
                </div>
            </div>

            <div className={classes.footerSocialWrap}>
                <p>Follow us:</p>
                
                <LinkedInIcon className={classes.fSocial} />
                <YouTubeIcon className={classes.fSocial}/>
                <InstagramIcon className={classes.fSocial}/>
                <FacebookIcon className={classes.fSocial}/>
                
            </div>
            </div>

            <div className={classes.footerCopyright}>
                2020 © All rights reserved by JJ UK Accountancy
            </div>
        </div>
    )
}

export default Footer
