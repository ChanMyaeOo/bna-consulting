import React from 'react'
import HeroSection from '../../../components/hero-section/HeroSection'
import ServiceNav from '../service-nav/ServiceNav'
import Accordion from '../../../components/accordion/Accordion'
import CarouselLarge from '../../../components/carousel-large/CarouselLarge'
import CarouselSmall from '../../../components/carousel-small/CarouselSmall'
import ReviewContact from '../../../components/review-contact/ReviewContact'
import useStyles from './styles'

const AnnualAccounts = () => {
    const classes = useStyles();
    const title = 'The Benefits of Counting on JJ UK Consulting'
    const content = 'Whilst employing the services of the experts at JJ UK Consulting, you will have the benefits of consulting them and have them prepare your set of annual accounts. By allowing our qualified staff to handle your finances you can rest assured that your annual accounts will be filed in accordance with UK GAAP or IFRS. Avoid all the possible mistakes by counting on JJ UK Consulting and use the extra time to focus on what you do best-managing your business.'
    return (
        <div>
        <HeroSection title="Annual Accounts"/>
        <div className={classes.serviceContainer}>
            
                
            <ServiceNav />

            <div className={classes.serviceContent}>
                <h3>Annual Accounts</h3>
                <p>Regardless of the type of company you have, whether you are an LLP, a limited company partnership, or a sole trader, you need to ensure that you prepare a set of annual accounts to fulfil your legal obligations. In order for this to be done properly, most London businesses entrust their accounting needs to a reliable local accounting firm to get everything finalised and sorter properly while keeping communication all the way. JJ UK Consulting is a professional and flexible accounting firm located in London, equipped with experience and knowledge, ready to take on your annual accounts all while offering reliable advice along the way, with the additional support of English and Russian speaking accountants in the heart of London.</p>
                <br/>
                <h4>The Importance of Your Annual Accounts</h4>
                <p>The sole purpose of an annual set of accounts is to summarise the financial flow of the company and to ascertain how much your company owes to HMRC. With JJ UK Consulting experts, your annual accounts will tell you exactly how your business is performing in the given timeframe and we will highlight the areas of optimum performance for you. With JJ UK Consulting you will receive a comprehensive and accurate set of accounts that are always going to be of more value to the shareholders, directors, investors and banks.</p>
                <br />
                <p>Our experts will also bring to light anything that might need a bit more attention as we are of the opinion that a well-prepared set of yearly accounts will showcase your business image in a positive and professional manner. JJ UK Consulting is there to set you apart from other businesses and allow you a much stronger negotiation position with the support of our English and Russian speaking experts.</p>
                <br />
                <p>JJ UK Consulting has dealt with many cases where companies attempt to complete their own accounts in order to cut costs, however more often than not this can easily lead to mistakes and it may end up costing your business considerably more. This is why you can trust JJ UK Consulting to handle your accounts and having them ready to hand in for signing and filing at the Companies House.</p>

            </div>
        </div>
        <Accordion num={1} title={title} content={content} />
        <CarouselLarge />
        <CarouselSmall />
        <ReviewContact />
        </div>
    )
}

export default AnnualAccounts
