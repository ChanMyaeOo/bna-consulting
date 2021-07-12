import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Grid } from "@material-ui/core";
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
            <HeroSection title="Services" />

            <div className={classes.servicesSection}>
                <div className={classes.serviceTextWrap}>
                    <p className={classes.serviceText}>our services</p>
                    <h3 className={classes.serviceTitle}>
                        Get the most out of your accountants
                    </h3>
                    <p className={classes.serviceContent}>
                        So whatever support you need to get your books in order,
                        hire a team who can advise on every aspect of your
                        finances, work around your schedule and provide a
                        bespoke service based on your particular needs.
                    </p>
                </div>

                <div className={classes.serviceItemWrap}>
                    <div className={classes.serviceItem}>
                        <h3>UTR Number</h3>
                        <p>
                            The company Unique Taxpayer Reference (UTR) will
                            have been issued by HMRC when the company was set up
                            and registered.
                        </p>
                        <div>&gt;</div>
                    </div>

                    <div className={classes.serviceItem}>
                        <h3>UTR Number</h3>
                        <p>
                            The company Unique Taxpayer Reference (UTR) will
                            have been issued by HMRC when the company was set up
                            and registered.
                        </p>
                        <div>&gt;</div>
                    </div>

                    <div className={classes.serviceItem}>
                        <h3>UTR Number</h3>
                        <p>
                            The company Unique Taxpayer Reference (UTR) will
                            have been issued by HMRC when the company was set up
                            and registered.
                        </p>
                        <div>&gt;</div>
                    </div>

                    <div className={classes.serviceItem}>
                        <h3>UTR Number</h3>
                        <p>
                            The company Unique Taxpayer Reference (UTR) will
                            have been issued by HMRC when the company was set up
                            and registered.
                        </p>
                        <div>&gt;</div>
                    </div>

                    <div className={classes.serviceItem}>
                        <h3>UTR Number</h3>
                        <p>
                            The company Unique Taxpayer Reference (UTR) will
                            have been issued by HMRC when the company was set up
                            and registered.
                        </p>
                        <div>&gt;</div>
                    </div>

                    <div className={classes.serviceItem}>
                        <h3>UTR Number</h3>
                        <p>
                            The company Unique Taxpayer Reference (UTR) will
                            have been issued by HMRC when the company was set up
                            and registered.
                        </p>
                        <div>&gt;</div>
                    </div>

                    <div className={classes.serviceItem}>
                        <h3>UTR Number</h3>
                        <p>
                            The company Unique Taxpayer Reference (UTR) will
                            have been issued by HMRC when the company was set up
                            and registered.
                        </p>
                        <div>&gt;</div>
                    </div>

                    <div className={classes.serviceItem}>
                        <h3>UTR Number</h3>
                        <p>
                            The company Unique Taxpayer Reference (UTR) will
                            have been issued by HMRC when the company was set up
                            and registered.
                        </p>
                        <div>&gt;</div>
                    </div>

                    <div className={classes.serviceItem}>
                        <h3>UTR Number</h3>
                        <p>
                            The company Unique Taxpayer Reference (UTR) will
                            have been issued by HMRC when the company was set up
                            and registered.
                        </p>
                        <div>&gt;</div>
                    </div>
                </div>

                <div className={classes.serviceCarouselWrap}>
                    <div className={classes.carouselContentWrap}>
                        <h3 className={classes.corouselTitle}>
                            Personal Account Management
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
