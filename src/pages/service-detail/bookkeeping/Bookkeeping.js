import React from 'react'
import HeroSection from '../../../components/hero-section/HeroSection'
import ServiceNav from '../service-nav/ServiceNav'
import Accordion from '../../../components/accordion/Accordion'
import CarouselLarge from '../../../components/carousel-large/CarouselLarge'
import CarouselSmall from '../../../components/carousel-small/CarouselSmall'
import ReviewContact from '../../../components/review-contact/ReviewContact'
import useStyles from './styles'

const Bookkeeping = () => {
    const classes = useStyles();
    const title = 'Flexible and Reliable'
    const content = 'London based JJ UK Consulting offers direct services for all your bookkeeping needs both in a full or part-time capacity which means that we at JJ UK can take care of all your bookkeeping needs, either for a day or a month to a long-term commitment, all depending on your needs. JJ UK consulting also offers bookkeeping service professional off-site bookkeeping services UK for business development and small business start-ups. We are also more than willing to aid companies which have limited office space or have outgrown their own by providing excellent, flexible and reliable bookkeeping and consulting services.'
    const title1 = 'Scalable to Your Needs'
    const content1 = 'Due to increasing hikes in London office-space prices, our services would be the perfect solution to help out your fledgeling business and to help you grow your business. With us taking care of your bookkeeping you have your hands free to do whatever you want with the additional office area. Be at ease as both English and Russian speaking experts at our office are doing their best to keep your bookkeeping in check and your business running smoothly.'
    const title2 = 'Keeping your books in order'
    const content2 = 'JJ UK Consulting is at the top of all accounting needs for their clients, especially because we believe in versatility. By employing English and Russian speaking accountants in London we can assess your problem by understanding your needs and we make custom-tailored solutions for each of our clients. We invest time in our clients making sure that we understand what they require of our services and exactly how we can reach the goals are clients strive to achieve. We at JJ UK Consulting are building on our flexibility and practical skills by specialising in online accounting while also having experience with employing the latest bookkeeping trends.'
    return (
        <div>
        <HeroSection title="Bookkeeping"/>
        <div className={classes.serviceContainer}>
            
                
            <ServiceNav />

            <div className={classes.serviceContent}>
                <h3>Bookkeeping</h3>
                <p>Frequently certain business people decide to dabble in the complicated and complex field of bookkeeping. This means that because they focus on bookkeeping data, they gradually become alienated from their main business and they are losing valuable time and opportunities.</p>
                <br/>
                <p>Do not make the mistake of spending enormous amounts of time on such a tedious chore to the point of risking financial mismanagement.</p>
                <br />
                <p>In order to avoid making such a capital mistake, it would be best to seek help and consultation about your needs with JJ UK Consulting, one of the premier professional bookkeeping service in London.</p>
                <br />
                <p>JJ UK Consulting is based in London and we are a Russian Accounting and Bookkeeping service that you can let handle all your most difficult financial dilemmas.</p>
                <br />
                <p>One of our major advantages is that we have a long tradition and experience in our communications with our client’s accountants, both English speaking as well as Russian speaking companies since we have a team of reliable Russian accountants in the heart of London.</p>
                <br />
                <p>Our experts can work directly with you and your staff to make sure that all records are kept to the highest standards in dealing with annual accounts for your business.</p>
                <br />
                <h4>Spend Less Gain More</h4>
                <p>Outsourcing your bookkeeping to JJ UK consulting will be the best choice you have made for your business. Our experts will be at your side and will ensure that the money you invest will yield fantastic returns. Our goal is to help build your business and watch it grow by giving our best to keep track of your investments for maximum effectiveness.</p>

            </div>
        </div>
        <Accordion num={3} title={title} content={content} title1={title1} content1={content1} title2={title2} content2={content2}/>
        <CarouselLarge />
        <CarouselSmall />
        <ReviewContact />
        </div>
    )
}

export default Bookkeeping
