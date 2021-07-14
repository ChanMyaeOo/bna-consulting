import React from 'react'
import { Grid } from '@material-ui/core'
import ApartmentIcon from '@material-ui/icons/Apartment';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import HeroSection from '../../components/hero-section/HeroSection'
import LeafLetMap from '../../components/leaflet-map/LeafLetMap'
import CarouselLarge from '../../components/carousel-large/CarouselLarge'
import CarouselSmall from '../../components/carousel-small/CarouselSmall'
import useStyles from './styles'

const Contact = () => {
    const classes = useStyles();
    return (
        <div className={classes.contactSection}>
            <HeroSection title="Contact us" />
            
            <div className={classes.contactWrapper}>
                <h3 className={classes.contactTitle}>Get in touch and we'll get back to you as soon as we can. We look forward to <em>hearing from you!</em></h3>
                <Grid container className={classes.contactContainer}>
                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12} >
                        <p className={classes.contactIntro}>We are experienced and qualified English and Russian speaking executive Accounting &amp; Consulting firm based in London.</p>
                        <p className={classes.contactAddress}><ApartmentIcon /> One Kingdom Street, Paddington, W2 6BD</p>
                        <p className={classes.contactAddress}><PhoneIcon /> +44 208 991 991 0</p>
                        <p className={classes.contactAddress}><PhoneIcon /> +44 747 397 9774</p>
                        <p className={classes.contactAddress}><EmailIcon /> info@bnaconsulting.co.uk</p>
                    </Grid>

                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                    <form className={classes.formWrapper}>
                        <label for="name" >Your Name (required)</label>
                        <input type="text" id="name" required className={classes.textInput} />
                        <label for="email">Your Email (required)</label>
                        <input type="email" id="email" required className={classes.emailInput}/>
                        <label for="subject">Subject</label>
                        <input type="text" id="subject" className={classes.subjectInput}/>
                        <label for="message">Your Message</label>
                        <textarea id="message" className={classes.messageInput}></textarea>
                        <button className={classes.sendInput}>Send</button>
                    </form>
                    </Grid>
                </Grid>
            </div>

            <LeafLetMap className={classes.leafLetMap} />
            <div className={classes.contactCarousel}>
                <CarouselLarge />
                <CarouselSmall />
            </div>
        </div>
    )
}

export default Contact
