import React from 'react'
import HeroSection from '../../../components/hero-section/HeroSection'
import ServiceNav from '../service-nav/ServiceNav'
import Accordion from '../../../components/accordion/Accordion'
import CarouselLarge from '../../../components/carousel-large/CarouselLarge'
import CarouselSmall from '../../../components/carousel-small/CarouselSmall'
import ReviewContact from '../../../components/review-contact/ReviewContact'
import AccordionUtr from '../../../components/accordion/accordion-utr/AccordionUtr'
import useStyles from './styles'

const UtrNumber = () => {
    const classes = useStyles();
    
    return (
        <div>
        <HeroSection title="UTR Number"/>
        <div className={classes.serviceContainer}>
            
                
            <ServiceNav />

            <div className={classes.serviceContent}>
                <h3>UTR Number</h3>
                <p>A UTR (Unique Taxpayer Reference) number is a 10 digit number that is unique to either you or your company. It identifies you personally with HMRC for things related to your tax obligations. You’ll automatically get one when you register for self-assessment or set up a limited company and this is where JJ UK Consulting comes in to assist you with gaining the UTR .</p>
                <br/>
                <h4>We will register for a UTR</h4>
                <p>We at JJ UK Consulting will help you get it the moment you when you get set up for Self Assessment tax returns or launch a Limited Company. Once we have gained one for you, you can find your UTR in a few places.  We will fill out the Assessment tax returns, RIFT will send you to form SA1 from HMRC to sign. You’ll be applying for a UTR as part of this. It might take a while to get your UTR number from the taxman. Instead of you making sure that you have time to wait for the mailman, our English and Russian speaking staff will be able to get it for you.</p>
                <br />
                <h4>Why you need a UTR number</h4>
                <p>There are a number of circumstances when you might need your UTR number including completing your self-assessment tax return and CIS registration.</p>
                

            </div>
        </div>
        <AccordionUtr />
        <CarouselLarge />
        <CarouselSmall />
        <ReviewContact />
        </div>
    )
}

export default UtrNumber
