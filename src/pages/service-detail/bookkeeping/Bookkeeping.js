import React from 'react'
import HeroSection from '../../../components/hero-section/HeroSection'
import ServiceNav from '../service-nav/ServiceNav'
import useStyles from './styles'

const Bookkeeping = () => {
    const classes = useStyles();
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
                <p>In order to avoid making such a capital mistake, it would be best to seek help and consultation about your needs with BNA Consulting, one of the premier professional bookkeeping service in London.</p>
                <br />
                <p>BNA Consulting is based in London and we are a Russian Accounting and Bookkeeping service that you can let handle all your most difficult financial dilemmas.</p>
                <br />
                <p>One of our major advantages is that we have a long tradition and experience in our communications with our client’s accountants, both English speaking as well as Russian speaking companies since we have a team of reliable Russian accountants in the heart of London.</p>
                <br />
                <p>Our experts can work directly with you and your staff to make sure that all records are kept to the highest standards in dealing with annual accounts for your business.</p>
                <br />
                <h4>Spend Less Gain More</h4>
                <p>Outsourcing your bookkeeping to BNA consulting will be the best choice you have made for your business. Our experts will be at your side and will ensure that the money you invest will yield fantastic returns. Our goal is to help build your business and watch it grow by giving our best to keep track of your investments for maximum effectiveness.</p>

            </div>
        </div>
        </div>
    )
}

export default Bookkeeping
