import React, { useEffect } from "react";
import { Link } from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import AOS from "aos";
import "aos/dist/aos.css";
import useStyles from "./styles";
import './override.css'

const HomeCarousel = () => {
    const classes = useStyles();
    useEffect(() => {
        AOS.init({
            duration: 800
        })
    }, [])
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
                                <div data-aos="fade-down" data-aos-once="true">
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
                                </div>
                                
                                <div data-aos="fade-left" data-aos-once="true">
                                <Link className={classes.headerBtn} to="/contact" >Let's start now </Link>
                                </div>
                                
                            </div>
                        
                    </div>
                <div className={classes.carouselItem2}>
                     <div className={classes.headerWrapper}>
                            <div data-aos="fade-down" data-aos-once="true">
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
                            </div>

                            <div data-aos="fade-left" data-aos-once="true">
                            <Link to="/contact" className={classes.headerBtn}>Let's start now </Link>
                            </div>
                        
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default HomeCarousel;
