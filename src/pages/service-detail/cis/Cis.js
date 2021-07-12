import React from 'react'
import HeroSection from '../../../components/hero-section/HeroSection'
import ServiceNav from '../service-nav/ServiceNav'
import Accordion from '../../../components/accordion/Accordion'
import CarouselLarge from '../../../components/carousel-large/CarouselLarge'
import CarouselSmall from '../../../components/carousel-small/CarouselSmall'
import ReviewContact from '../../../components/review-contact/ReviewContact'
import AccordionUtr from '../../../components/accordion/accordion-utr/AccordionUtr'
import AccordionCis from '../../../components/accordion/accordion-cis/AccordionCis'
import useStyles from './styles'

const Cis = () => {
    const classes = useStyles();
    
    return (
        <div>
        <HeroSection title="CIS"/>
        <div className={classes.serviceContainer}>
            
                
            <ServiceNav />

            <div className={classes.serviceContent}>
                <h3>CIS</h3>
                <p>We at BNA Consulting have years of experience and full working knowledge of the CIS scheme and can offer Construction Industry Scheme (CIS) clients a full, efficient and prompt accountancy service for very reasonable fees supported by both English and Russian speaking accountants in London.</p>
                <br/>
                <h4>BNA Consulting has many Construction Industry Scheme (CIS) related services:</h4>
                <ul>
                    <li>Online verification of subcontractors</li>
                    <li>Electronic filing of contractor’s monthly returns</li>
                    <li>Submission of annual returns</li>
                </ul>
                <br />
                <p>Under the Construction Industry Scheme (CIS), contractors deduct money from a sub contractor’s payments and pass it to HM Revenue and Customs (HMRC). This is where BNA Consulting comes in to provide you with support as the deductions count as advance payments towards the subcontractor’s tax and National Insurance. BNA Consulting can provide you with advice on how to register for the scheme. Both for Contractors who have to and for Subcontractors who don’t have to register, but deductions are taken from their payments at a higher rate if they’re not registered, BNA Consulting offers the right service to accommodate for any possible mishaps with support from both English and Russian speaking accountants.</p>
                <br/>
                <p>BNA Consulting has dealt with many cases related to CIS and therefore always aims to inform its clients on who counts as a contractor or subcontractor.</p>
                <br/>
                <p>You should register as a contractor if you either pay subcontractors for construction work or your business doesn’t run a construction orient work environment buy you spend an average of more than £1 million a year on construction in any 3-year period.</p>
                <br/>
                <p>On the other hand, you should register as a subcontractor if you do construction work for a contractor. We at BNA Consulting recommend that you should register as both if you fall under both categories.</p>

            </div>
        </div>
        <AccordionCis />
        <CarouselLarge />
        <CarouselSmall />
        <ReviewContact />
        </div>
    )
}

export default Cis
