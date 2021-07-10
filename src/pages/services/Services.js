import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Grid } from "@material-ui/core";
import HeroSection from "../../components/hero-section/HeroSection";
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


                    {/* Carousel Slide Section For Laptop View */}

                    <div>
                        <Carousel
                            autoPlay={true}
                            infiniteLoop={true}
                            showArrows={false}
                            showStatus={false}
                            showIndicators={false}
                            showThumbs={false}
                            swipeable={true}
                        >
                            <Grid
                                container
                                className={classes.carouselItemWrap}
                            >
                                <Grid
                                    item
                                    xl={4}
                                    lg={4}
                                    md={4}
                                    className={classes.carouselItem}
                                >
                                    <div className={classes.itemReviewTitle}>
                                        UTR Number
                                    </div>
                                    <div className={classes.carTextWrap}>
                                        <h3 className={classes.carItemTitle}>
                                            UTR Number
                                        </h3>
                                        <p className={classes.carItemText}>
                                            There are a number of circumstances
                                            when you might need your UTR
                                            number...
                                        </p>
                                        <p className={classes.carItemStart}>
                                            Let's start &gt;
                                        </p>
                                    </div>
                                </Grid>

                                <Grid
                                    item
                                    xl={4}
                                    lg={4}
                                    md={4}
                                    className={classes.carouselItem}
                                >
                                    <div className={classes.itemReviewTitle}>
                                        UTR Number
                                    </div>
                                    <div className={classes.carTextWrap}>
                                        <h3 className={classes.carItemTitle}>
                                            UTR Number
                                        </h3>
                                        <p className={classes.carItemText}>
                                            There are a number of circumstances
                                            when you might need your UTR
                                            number...
                                        </p>
                                        <p className={classes.carItemStart}>
                                            Let's start &gt;
                                        </p>
                                    </div>
                                </Grid>

                                <Grid
                                    item
                                    xl={4}
                                    lg={4}
                                    md={4}
                                    className={classes.carouselItem}
                                >
                                    <div className={classes.itemReviewTitle}>
                                        UTR Number
                                    </div>
                                    <div className={classes.carTextWrap}>
                                        <h3 className={classes.carItemTitle}>
                                            UTR Number
                                        </h3>
                                        <p className={classes.carItemText}>
                                            There are a number of circumstances
                                            when you might need your UTR
                                            number...
                                        </p>
                                        <p className={classes.carItemStart}>
                                            Let's start &gt;
                                        </p>
                                    </div>
                                </Grid>
                            </Grid>

                            <Grid
                                container
                                className={classes.carouselItemWrap}
                            >
                                <Grid
                                    item
                                    xl={4}
                                    lg={4}
                                    md={4}
                                    className={classes.carouselItem}
                                >
                                    <div className={classes.itemReviewTitle}>
                                        Annual Returns
                                    </div>
                                    <div className={classes.carTextWrap}>
                                        <h3 className={classes.carItemTitle}>
                                            UTR Number
                                        </h3>
                                        <p className={classes.carItemText}>
                                            There are a number of circumstances
                                            when you might need your UTR
                                            number...
                                        </p>
                                        <p className={classes.carItemStart}>
                                            Let's start &gt;
                                        </p>
                                    </div>
                                </Grid>

                                <Grid
                                    item
                                    xl={4}
                                    lg={4}
                                    md={4}
                                    className={classes.carouselItem}
                                >
                                    <div className={classes.itemReviewTitle}>
                                        Annual Returns
                                    </div>
                                    <div className={classes.carTextWrap}>
                                        <h3 className={classes.carItemTitle}>
                                            UTR Number
                                        </h3>
                                        <p className={classes.carItemText}>
                                            There are a number of circumstances
                                            when you might need your UTR
                                            number...
                                        </p>
                                        <p className={classes.carItemStart}>
                                            Let's start &gt;
                                        </p>
                                    </div>
                                </Grid>

                                <Grid
                                    item
                                    xl={4}
                                    lg={4}
                                    md={4}
                                    className={classes.carouselItem}
                                >
                                    <div className={classes.itemReviewTitle}>
                                        Annual Returns
                                    </div>
                                    <div className={classes.carTextWrap}>
                                        <h3 className={classes.carItemTitle}>
                                            UTR Number
                                        </h3>
                                        <p className={classes.carItemText}>
                                            There are a number of circumstances
                                            when you might need your UTR
                                            number...
                                        </p>
                                        <p className={classes.carItemStart}>
                                            Let's start &gt;
                                        </p>
                                    </div>
                                </Grid>
                            </Grid>
                        </Carousel>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Services;
