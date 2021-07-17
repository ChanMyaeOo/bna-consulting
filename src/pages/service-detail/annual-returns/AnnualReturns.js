import React from 'react'
import HeroSection from '../../../components/hero-section/HeroSection'
import ServiceNav from '../service-nav/ServiceNav'
import CarouselLarge from '../../../components/carousel-large/CarouselLarge'
import CarouselSmall from '../../../components/carousel-small/CarouselSmall'
import ReviewContact from '../../../components/review-contact/ReviewContact'
import useStyles from './styles'

const AnnualReturns = () => {
    const classes = useStyles();
    return (
        <div>
        <HeroSection title="Annual Returns"/>
        <div className={classes.serviceContainer}>
            
                
            <ServiceNav />

            <div className={classes.serviceContent}>
                <h3>Annual Returns</h3>
                <p>JJ UK Consulting in London provides a quite review of a company’s general information, which includes the details about the officers of the company (e.g. directors and company secretary), registered office address, share capital and full details of shareholders. Since the confirmation statement has replaced the annual return to Companies House with effect from 30 June 2016 we at JJ UK Consulting have worked on acquiring the skills to handle these changes by employing expert English and Russian speaking accountants in London.</p>
                <br />
                <p>JJ UK Consulting supports all limited companies and Limited liability partnership in the UK, but we also provide support for professional Services for Business Development and small business start-ups. JJ UK Consulting also takes care of the footwork when it comes to the processes where your company must have to Annual Returns in London form to Companies House every year even if the company is dormant. JJ UK Consulting will aid Limited companies to submit the ‘’AR01’’ form and Limited liability partnership submits ‘’LL AR01’’.</p>
                <br />
                <h4>Filing Deadline &map; Penalties</h4>
                <p>We at JJ UK Consulting will aid you in the paperwork concerning filing deadline &amp; penalties with our staff of employing expert English and Russian speaking accountants in London.</p>
                <br />
                <p>JJ UK Consulting will take care of every situation, such as when the Companies House send email alerts and reminders to registered office address when it comes due.</p>
                <br />
                <p>This due date is usually a year after either:</p>
                <ul>
                    <li>the date when a company was incorporated.</li>
                    <li>the date when last annual return or confirmation statement was filed.</li>
                </ul>
                <br />
                <p>JJ UK Consulting will assist you with the Confirmation statement which must be filed within 14 days after the due date.</p>
                <br/>
                <p>If a company fails to submit a confirmation statement within the deadline, it may be fined up to £5,000 and the registrar also has the authority to strike off the company from the company’s register and its assets become the property of the crown, however this measure will not be taken against you because are capable English and Russian speaking accountants in London will do all the paperwork for you, quickly and meticulously.</p>
                <br/>
                <p>JJ UK Consulting can aid you with Annual Return filing Services Form which can be submitted online through the Companies House ‘’Web Filing system’’, online submission of an Annual Returns for companies via its Web Filing system costing just £13. Which is something JJ UK Consulting experts will take care of in your stead. We can file through “web filing” and provide you with reminders regularly when your Annual return Becomes due, we will be there. We will take care of the contents of the confirmation statement such as the company name, type, registered office address and details about officers in a clean and presentable way.</p>


            </div>
        </div>
        
        <CarouselLarge />
        <CarouselSmall />
        <ReviewContact />
        </div>
    )
}

export default AnnualReturns
