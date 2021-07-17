import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import HeroSection from "../../components/hero-section/HeroSection";
import MapContact from '../../components/map-contact/MapContact'
import CarouselLarge from '../../components/carousel-large/CarouselLarge'
import CarouselSmall from '../../components/carousel-small/CarouselSmall'
import ReviewContact from '../../components/review-contact/ReviewContact'
import useStyles from "./styles";

const Services = () => {
    const classes = useStyles();
    return (
        <div>
            <HeroSection title="Services" id="services"/>

            <div className={classes.servicesSection}>
                <div className={classes.serviceTextWrap}>
                    <p className={classes.serviceText}>our services</p>
                    <h3 className={classes.serviceTitle} >
                        Get the most out of your <em>accountants</em>
                    </h3>
                    <p className={classes.serviceContent}>
                        So whatever support you need to get your books in order,
                        hire a team who can advise on every aspect of your
                        finances, work around your schedule and provide a
                        bespoke service based on your particular needs.
                    </p>
                </div>

                <div className={classes.serviceItemWrap}>
                    <div className={clsx(classes.serviceItem, classes.utrNumber)}>
                        <h3><Link to="/services/utr-number">UTR Number</Link></h3>
                        <p>
                            The company Unique Taxpayer Reference (UTR) will
                            have been issued by HMRC when the company was set up
                            and registered.
                        </p>
                        <Link to="/services/utr-number">&gt;</Link>
                    </div>

                    <div className={clsx(classes.serviceItem, classes.selfAssessment)}>
                        <h3><Link to="/services/self-assessment">Self Assessment</Link></h3>
                        <p>
                            Our goal is to help build your business and watch it grow by giving our best to keep track of...
                        </p>
                        <Link to="/services/self-assessment">&gt;</Link>
                    </div>

                    <div className={clsx(classes.serviceItem, classes.annualReturns)}>
                        <h3><Link to="/services/annual-returns">Annual Returns</Link></h3>
                        <p>
                            Our goal is to help build your business and watch it grow by giving our best to keep track of...
                        </p>
                        <Link to="/services/annual-returns">&gt;</Link>
                    </div>

                    <div className={clsx(classes.serviceItem, classes.annualAccounts)}>
                        <h3><Link to="/services/annual-accounts">Annual Accounts</Link></h3>
                        <p>
                            You can trust JJ UK Consulting to handle your accounts and having them ready to hand in for signing and filing...
                        </p>
                        <Link to="/services/annual-accounts">&gt;</Link>
                    </div>

                    <div className={clsx(classes.serviceItem, classes.limitedCompany)}>
                        <h3><Link to="/services/limited-company">Limited Company</Link></h3>
                        <p>
                            JJ UK Consulting is providing guidance on Limited Company accounting services for contractors and professional Services for Business Development and small...
                        </p>
                        <Link to="/services/limited-company">&gt;</Link>
                    </div>

                    <div className={clsx(classes.serviceItem, classes.cis)}>
                        <h3><Link to="/services/cis">CIS</Link></h3>
                        <p>
                            Our goal is to help build your business and watch it grow by giving our best to keep track of...
                        </p>
                        <Link to="/services/cis">&gt;</Link>
                    </div>

                    <div className={clsx(classes.serviceItem, classes.vat)}>
                        <h3><Link to="/services/vat">VAT</Link></h3>
                        <p>
                            Our goal is to help build your business and watch it grow by giving our best to keep track of...
                        </p>
                        <Link to="/services/vat">&gt;</Link>
                    </div>

                    <div className={clsx(classes.serviceItem, classes.payroll)}>
                        <h3><Link to="/services/payroll">Payroll</Link></h3>
                        <p>
                            We at JJ UK aim to be the most affordable and reliable choice when choosing a company to process your payroll.
                        </p>
                        <Link to="/services/payroll">&gt;</Link>
                    </div>

                    <div className={clsx(classes.serviceItem, classes.bookkeeping)}>
                        <h3><Link to="/services/bookkeeping">Bookkeeping</Link></h3>
                        <p>
                            Our goal is to help build your business and watch it grow by giving our best to keep track of...
                        </p>
                        <Link to="/services/bookkeeping">&gt;</Link>
                    </div>
                </div>

                <div className={classes.serviceCarouselWrap}>
                    <div className={classes.carouselContentWrap}>
                        <h3 className={classes.corouselTitle}>
                            Personal Account <em>Management</em>
                        </h3>
                        <p className={classes.carouselContent}>
                            Get a dedicated accountant to help with your
                            personalised needs and queries, so you always feel
                            you are in safe hands. Our team will work around
                            your availability to make sure you’re accounts are
                            taken care of without any hassle, so you have more
                            time to focus on your business.
                        </p>
                    </div>


                    {/* Carousel for large device */}
                    <CarouselLarge className={classes.carouselForLarge}/>

                    {/* Carousel for small device */}
                    <CarouselSmall className={classes.carouselForSmall}/>

                </div>
            </div>

            <MapContact />

            <ReviewContact />
        </div>
    );
};

export default Services;
