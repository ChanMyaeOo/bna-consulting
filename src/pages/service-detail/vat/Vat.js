import React from 'react'
import HeroSection from '../../../components/hero-section/HeroSection'
import ServiceNav from '../service-nav/ServiceNav'
import CarouselLarge from '../../../components/carousel-large/CarouselLarge'
import CarouselSmall from '../../../components/carousel-small/CarouselSmall'
import ReviewContact from '../../../components/review-contact/ReviewContact'
import AccordionVat from '../../../components/accordion/accordion-vat/AccordionVat'
import useStyles from './styles'

const Vat = () => {
    const classes = useStyles();
    
    return (
        <div>
        <HeroSection title="VAT"/>
        <div className={classes.serviceContainer}>
            
                
            <ServiceNav />

            <div className={classes.serviceContent}>
                <h3>VAT</h3>
                <p>We at JJ UK Consulting pride ourselves on our responsiveness and we always ensure that our advice on everything VAT related will be tailored to your situation and that we will be able to provide it at any time you may need our services. We understand that modern business is under pressure of countless rules and regulations which have to be strictly followed in order to achieve a return of their VAT.</p>
                <br/>
                <p>We want to help you avoid any possible mishaps that may occur due to additional strain on your staff by providing aid to your administrative department.</p>
                <br />
                <p>We at JJ UK Consulting know by experience that mistakes in this field can cost you a lot. The fines added for any mistakes in calculation or any deviations in the interest charged may be allotted for unpunctually submitted documents of your returns, which can prove to be a significant setback for the budget of your company. This is why you should be sure to entrust all your needs to the expert care of JJ UK Consulting, whenever you need aid with your VAT return.</p>
                <br/>
                <p>These are some essential points you should consider, whenever you are working on your VAT returns:</p>
                <ul>
                    <li>Are you in need of assistance with VAT questions?</li>
                    <li>Are you in need of expert advice with your VAT check-up?</li>
                    <li>Are you facing setbacks with your VAT returns?</li>
                    <li>Are they properly accounted for?</li>
                    <li>Are you in need of help with VAT registration files?</li>
                </ul>
                <br/>
                <p>If you follow these points you will have no issues with your VAT return. Sadly, very few business do follow these points, which is where JJ UK Consulting may help. As a team of professional English and Russian speaking consultants in the London area with experience when dealing with VAT and our services are available Business Development and small business startups across London</p>
            </div>
        </div>
        <AccordionVat />
        <CarouselLarge />
        <CarouselSmall />
        <ReviewContact />
        </div>
    )
}

export default Vat
