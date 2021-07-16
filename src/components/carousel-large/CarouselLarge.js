import React from "react";
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { Carousel } from "react-responsive-carousel";
import { Grid } from "@material-ui/core";
import useStyles from "./styles";

const CarouselLarge = () => {
    const classes = useStyles();
    return (
        <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showArrows={false}
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            swipeable={true}
            className={classes.carouselContainer}
        >
            <Grid container className={classes.carouselItemWrap}>
                <Grid
                    item
                    xl={4}
                    lg={4}
                    md={4}
                    className={clsx(classes.carouselItem, classes.utrNumber)}
                >
                    <div className={classes.itemReviewTitle}>UTR Number</div>
                    <div className={classes.carTextWrap}>
                        <h3 className={classes.carItemTitle}>UTR Number</h3>
                        <p className={classes.carItemText}>
                            The company Unique Taxpayer Reference (UTR) will have been issued by...
                        </p>
                        <Link to="/services/utr-number" className={classes.carItemStart}>Let's start &gt;</Link>
                    </div>
                </Grid>

                <Grid
                    item
                    xl={4}
                    lg={4}
                    md={4}
                    className={clsx(classes.carouselItem, classes.selfAssessment)}
                >
                    <div className={classes.itemReviewTitle}>Self Assessment</div>
                    <div className={classes.carTextWrap}>
                        <h3 className={classes.carItemTitle}>Self Assessment</h3>
                        <p className={classes.carItemText}>
                            Our goal is to help build your business and watch it...
                        </p>
                        <Link to="/services/self-assessment" className={classes.carItemStart}>Let's start &gt;</Link>
                    </div>
                </Grid>

                <Grid
                    item
                    xl={4}
                    lg={4}
                    md={4}
                    className={clsx(classes.carouselItem, classes.annualReturns)}
                >
                    <div className={classes.itemReviewTitle}>Annual Returns</div>
                    <div className={classes.carTextWrap}>
                        <h3 className={classes.carItemTitle}>Annual Returns</h3>
                        <p className={classes.carItemText}>
                            Our goal is to help build your business and watch it...
                        </p>
                        <Link to="/services/annual-returns" className={classes.carItemStart}>Let's start &gt;</Link>
                    </div>
                </Grid>
            </Grid>

            <Grid container className={classes.carouselItemWrap}>
                <Grid
                    item
                    xl={4}
                    lg={4}
                    md={4}
                    className={clsx(classes.carouselItem, classes.annualAccounts)}
                >
                    <div className={classes.itemReviewTitle}>
                        Annual Accounts
                    </div>
                    <div className={classes.carTextWrap}>
                        <h3 className={classes.carItemTitle}>Annual Accounts</h3>
                        <p className={classes.carItemText}>
                            You can trust JJ UK Consulting to handle your accounts and having...
                        </p>
                        <Link to="/services/annual-accounts" className={classes.carItemStart}>Let's start &gt;</Link>
                    </div>
                </Grid>

                <Grid
                    item
                    xl={4}
                    lg={4}
                    md={4}
                    className={clsx(classes.carouselItem, classes.limitedCompany)}
                >
                    <div className={classes.itemReviewTitle}>
                        Limited Company
                    </div>
                    <div className={classes.carTextWrap}>
                        <h3 className={classes.carItemTitle}>Limited Company</h3>
                        <p className={classes.carItemText}>
                            JJ UK Consulting is providing guidance on Limited Company accounting services for...
                        </p>
                        <Link to="/services/limited-company" className={classes.carItemStart}>Let's start &gt;</Link>
                    </div>
                </Grid>

                <Grid
                    item
                    xl={4}
                    lg={4}
                    md={4}
                    className={clsx(classes.carouselItem, classes.cis)}
                >
                    <div className={classes.itemReviewTitle}>
                        CIS
                    </div>
                    <div className={classes.carTextWrap}>
                        <h3 className={classes.carItemTitle}>CIS</h3>
                        <p className={classes.carItemText}>
                            Our goal is to help build your business and watch it...
                        </p>
                        <Link to="/services/cis" className={classes.carItemStart}>Let's start &gt;</Link>
                    </div>
                </Grid>
            </Grid>
        </Carousel>
    );
};

export default CarouselLarge;
