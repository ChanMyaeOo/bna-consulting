import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import useStyles from "./styles";
import './override.css'

const HomeCarousel = () => {
    const classes = useStyles();
    return (
        <div>
            <Carousel
                autoPlay={true}
                infiniteLoop={true}
                showStatus={false}
                showThumbs={false}
                showIndicators={false}
                className={classes.carouselItemWrap}
            >
                <div className={classes.carouselItem1}>
                    <div className={classes.headerWrapper}>
                        <p className={classes.headerIntro}>
                            Our Solutions speak for themselves
                        </p>
                        <h1 className={classes.headerTitle}>
                            Most brilliant team of Accountants
                        </h1>
                        <p className={classes.headerContent}>
                            We offer a vast range of services making sure it is
                            hassle free with perfection and delivered on time.
                        </p>
                        
                        <button className={classes.headerBtn}>Let's start now </button>
                    </div>
                </div>
                <div className={classes.carouselItem2}>
                     <div className={classes.headerWrapper}>
                        <p className={classes.headerIntro}>
                            Accountancy firm with tradition
                        </p>
                        <h1 className={classes.headerTitle}>
                            Your success is our reputation
                        </h1>
                        <p className={classes.headerContent}>
                            We offer a vast range of services making sure it is
                            hassle free with perfection and delivered on time.
                        </p>
                        <button className={classes.headerBtn}>Let's start now </button>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default HomeCarousel;
