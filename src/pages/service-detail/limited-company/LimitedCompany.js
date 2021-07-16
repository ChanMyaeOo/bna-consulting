import React from 'react'
import HeroSection from '../../../components/hero-section/HeroSection'
import ServiceNav from '../service-nav/ServiceNav'
import Accordion from '../../../components/accordion/Accordion'
import CarouselLarge from '../../../components/carousel-large/CarouselLarge'
import CarouselSmall from '../../../components/carousel-small/CarouselSmall'
import ReviewContact from '../../../components/review-contact/ReviewContact'
import useStyles from './styles'

const LimitedCompany = () => {
    const classes = useStyles();
    return (
        <div>
        <HeroSection title="Limited Company"/>
        <div className={classes.serviceContainer}>
            
                
            <ServiceNav />

            <div className={classes.serviceContent}>
                <h3>Limited Company</h3>
                <p>A company is recognised as a legal entity, separate from the person or persons who formed the company and/or the directors and shareholders, for example, it has a separate legal existence and the officers (company secretary and directors) are employed by it.</p>
                <br/>
                <p>We here at JJ UK Consulting will perform the following services for you on an annual basis and our English and Russian speaking accountants in London are able to guide you in both the preparation of annual accounts and the preparation of the company’s corporation tax computations and CT600 return.</p>
                <br/>
                <p>We have experience with the calculation and administration of PAYE/NI scheme, the calculation of monthly dividend and calculation and administration of quarterly VAT returns.</p>
                <br />
                <p>JJ UK Consulting experts deal in the preparation of director’s personal income tax returns and with all routine tax queries. We also specialise in the preparation of the annual return to Companies House and related Companies House administration such as registered office service, secretarial service, book keeping, business plan preparation and management accounts (Monthly and quarterly).</p>
                <br />
                <p>We here at JJ UK Consulting are providing guidance on Limited Company accounting service for contractors and professional Services for Business Development and small business start-ups. Our services are tailored to suit your needs and our unique flexible accounting service ensures that our clients get the support they deserve.</p>
                <br/>
                <p>JJ UK Consulting experts offer guidance for Limited company accounting service and professional Services for Business Development and small business startups so that we can guide you through the process. We can help you sign up, whether you are the owner of a limited company or if you need us to help you get one started, JJ UK Consulting bookkeepers will ensure that you are correctly setup and registered with your limited company.</p>
                <br/>
                <p>We can also help you set up your own bank account, quickly and reliable with Metro Bank or we also could work together with your preferred banking provider.</p>
                <br/>
                <p>And finally, you may get working. JJ UK Consulting experts will have you set-up and successfully contracting before you know it. Be sure to take advantage of our referrals programme to reduce our service fees and enjoy the full benefits of our expert work at JJ UK Consulting.</p>

            </div>
        </div>
        <CarouselLarge />
        <CarouselSmall />
        <ReviewContact />
        </div>
    )
}

export default LimitedCompany
