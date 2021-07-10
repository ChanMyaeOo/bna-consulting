import React from 'react'
import HeroSection from '../../components/hero-section/HeroSection'
import useStyles from './styles'

const Services = () => {
    const classes = useStyles();
    return (
        <div>
            <HeroSection title="Services"/>

            <div className={classes.servicesSection}>
                <div className={classes.serviceTextWrap}>
                    <p className={classes.serviceText}>our services</p>
                    <h3 className={classes.serviceTitle}>Get the most out of your accountants</h3>
                    <p className={classes.serviceContent}>So whatever support you need to get your books in order, hire a team who can advise on every aspect of your finances, work around your schedule and provide a bespoke service based on your particular needs.</p>
                </div>

                <div className={classes.serviceItemWrap}>
                    <div className={classes.serviceItem}>
                        <h3>UTR Number</h3>
                        <p>The company Unique Taxpayer Reference (UTR) will have been issued by HMRC when the company was set up and registered.</p>
                        <div>&gt;</div>
                    </div>

                    <div className={classes.serviceItem}>
                        <h3>UTR Number</h3>
                        <p>The company Unique Taxpayer Reference (UTR) will have been issued by HMRC when the company was set up and registered.</p>
                        <div>&gt;</div>
                    </div>

                    <div className={classes.serviceItem}>
                        <h3>UTR Number</h3>
                        <p>The company Unique Taxpayer Reference (UTR) will have been issued by HMRC when the company was set up and registered.</p>
                        <div>&gt;</div>
                    </div>

                     <div className={classes.serviceItem}>
                        <h3>UTR Number</h3>
                        <p>The company Unique Taxpayer Reference (UTR) will have been issued by HMRC when the company was set up and registered.</p>
                        <div>&gt;</div>
                    </div>

                    <div className={classes.serviceItem}>
                        <h3>UTR Number</h3>
                        <p>The company Unique Taxpayer Reference (UTR) will have been issued by HMRC when the company was set up and registered.</p>
                        <div>&gt;</div>
                    </div>

                    <div className={classes.serviceItem}>
                        <h3>UTR Number</h3>
                        <p>The company Unique Taxpayer Reference (UTR) will have been issued by HMRC when the company was set up and registered.</p>
                        <div>&gt;</div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Services
