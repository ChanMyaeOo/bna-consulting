import React from "react";
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
        >
            <Grid container className={classes.carouselItemWrap}>
                <Grid
                    item
                    xl={4}
                    lg={4}
                    md={4}
                    className={classes.carouselItem}
                >
                    <div className={classes.itemReviewTitle}>UTR Number</div>
                    <div className={classes.carTextWrap}>
                        <h3 className={classes.carItemTitle}>UTR Number</h3>
                        <p className={classes.carItemText}>
                            There are a number of circumstances when you might
                            need your UTR number...
                        </p>
                        <p className={classes.carItemStart}>Let's start &gt;</p>
                    </div>
                </Grid>

                <Grid
                    item
                    xl={4}
                    lg={4}
                    md={4}
                    className={classes.carouselItem}
                >
                    <div className={classes.itemReviewTitle}>UTR Number</div>
                    <div className={classes.carTextWrap}>
                        <h3 className={classes.carItemTitle}>UTR Number</h3>
                        <p className={classes.carItemText}>
                            There are a number of circumstances when you might
                            need your UTR number...
                        </p>
                        <p className={classes.carItemStart}>Let's start &gt;</p>
                    </div>
                </Grid>

                <Grid
                    item
                    xl={4}
                    lg={4}
                    md={4}
                    className={classes.carouselItem}
                >
                    <div className={classes.itemReviewTitle}>UTR Number</div>
                    <div className={classes.carTextWrap}>
                        <h3 className={classes.carItemTitle}>UTR Number</h3>
                        <p className={classes.carItemText}>
                            There are a number of circumstances when you might
                            need your UTR number...
                        </p>
                        <p className={classes.carItemStart}>Let's start &gt;</p>
                    </div>
                </Grid>
            </Grid>

            <Grid container className={classes.carouselItemWrap}>
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
                        <h3 className={classes.carItemTitle}>UTR Number</h3>
                        <p className={classes.carItemText}>
                            There are a number of circumstances when you might
                            need your UTR number...
                        </p>
                        <p className={classes.carItemStart}>Let's start &gt;</p>
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
                        <h3 className={classes.carItemTitle}>UTR Number</h3>
                        <p className={classes.carItemText}>
                            There are a number of circumstances when you might
                            need your UTR number...
                        </p>
                        <p className={classes.carItemStart}>Let's start &gt;</p>
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
                        <h3 className={classes.carItemTitle}>UTR Number</h3>
                        <p className={classes.carItemText}>
                            There are a number of circumstances when you might
                            need your UTR number...
                        </p>
                        <p className={classes.carItemStart}>Let's start &gt;</p>
                    </div>
                </Grid>
            </Grid>
        </Carousel>
    );
};

export default CarouselLarge;
