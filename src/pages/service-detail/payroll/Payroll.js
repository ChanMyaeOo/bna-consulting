import React from 'react'
import HeroSection from '../../../components/hero-section/HeroSection'
import ServiceNav from '../service-nav/ServiceNav'
import Accordion from '../../../components/accordion/Accordion'
import CarouselLarge from '../../../components/carousel-large/CarouselLarge'
import CarouselSmall from '../../../components/carousel-small/CarouselSmall'
import ReviewContact from '../../../components/review-contact/ReviewContact'
import AccordionUtr from '../../../components/accordion/accordion-utr/AccordionUtr'
import AccordionVat from '../../../components/accordion/accordion-vat/AccordionVat'
import AccordionPayroll from '../../../components/accordion/accordion-payroll/AccordionPayroll'
import useStyles from './styles'

const Payroll = () => {
    const classes = useStyles();
    
    return (
        <div>
        <HeroSection title="Payroll"/>
        <div className={classes.serviceContainer}>
            
                
            <ServiceNav />

            <div className={classes.serviceContent}>
                <h3>Payroll</h3>
                <p>When looking for a payroll service in London, you must consider a reliable and punctual partner, and you will find that in us at JJ UK Consulting. We here at JJ UK Consulting are among the leading payroll processing consultants offering office-based as well as remote services.</p>
                <br/>
                <p>When working with us you will gain numerous advantages which you gain by entrusting your payroll to our expert staff. If you are in need of someone to process your payroll as part of your office staff or to leave it to us in its entirety, JJ UK Consulting is at your disposal to offer a, with support from English and Russian speaking accountants in London.</p>
                <br/>
                <h4>What is the Best Option for Your Business?</h4>
                <p>Due to various changes in tax laws, payroll related office work has become more complicated than ever. This is exactly why so many businesses need the services of experienced accounting companies like JJ UK Consulting. We aim to provide a no-nonsense service which will keep up with any of your demands, in a reliable and professional manner.</p>
                <br/>
                <p>We also employ the latest in computer software payroll technologies in order to expedite the process. We can work alongside you at your own office, or you can entrust your payroll keeping to our office staff. Whichever option you opt for, one thing is sure, you will get the best possible service we can offer and you will be free to pursue your business goal knowing that you have our support.</p>
            </div>
        </div>
        <AccordionPayroll />
        <CarouselLarge />
        <CarouselSmall />
        <ReviewContact />
        </div>
    )
}

export default Payroll
