import React from 'react'
import HeroSection from '../../../components/hero-section/HeroSection'
import ServiceNav from '../service-nav/ServiceNav'
import CarouselLarge from '../../../components/carousel-large/CarouselLarge'
import CarouselSmall from '../../../components/carousel-small/CarouselSmall'
import ReviewContact from '../../../components/review-contact/ReviewContact'
import AccordionSelfAssess from '../../../components/accordion/accordion-self-assess/AccordionSelfAssess'
import useStyles from './styles'

const SelfAssessment = () => {
    const classes = useStyles();
    
    return (
        <div>
        <HeroSection title="Self Assessment"/>
        <div className={classes.serviceContainer}>
            
                
            <ServiceNav />

            <div className={classes.serviceContent}>
                <h3>Self Assessment</h3>
                <p>JJ UK Consulting has worked with companies that are required to file a corporation tax return in various forms together with supplementary pages, which we also help form. Our clients will receive guidance with full accounts and computations with the Inland Revenue. Deadlines apply to the filing of CTSA returns and the payment of corporation tax, which our English and Russian speaking experts have years of experience with here at JJ UK Consulting.</p>
                <br/>
                <p>JJ UK Consulting also warns that penalties apply for late submission of the return of £100 if it is up to three months late and £200 if the return is over three months late. We have also noticed that additional tax geared penalties apply when the return is either six or twelve months late</p>
                <br />
                <p>This is why JJ UK Consulting experts can prepare tax returns in a timely and efficient manner. Our English and Russian speaking bookkeepers will also calculate your company’s tax liability and assist with the calculation of any quarterly instalment payments. Be sure to count on JJ UK Consulting when it comes to a detailed overview.</p>

            </div>
        </div>
        <AccordionSelfAssess />
        <CarouselLarge />
        <CarouselSmall />
        <ReviewContact />
        </div>
    )
}

export default SelfAssessment
