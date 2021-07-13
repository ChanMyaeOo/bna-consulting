import React from 'react'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import useStyles from './styles'

const CarouselSmall = () => {
    const classes = useStyles();
    return (
         <Carousel
            autoPlay={false}
            infiniteLoop={true}
            showArrows={false}
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            swipeable={true}
            className={classes.carouselWrapper}
         >
                <div className={clsx(classes.item, classes.utrNumber)}>
                    <Link to="/services/utr-number" className={classes.itemTitle}>UTR Number</Link>
                </div>

                 <div className={clsx(classes.item, classes.selfAssessment)}>
                    <Link to="/services/self-assessment" className={classes.itemTitle}>Self Assessment</Link>
                </div>

                 <div className={clsx(classes.item, classes.annualReturns)}>
                    <Link to="/services/annual-returns" className={classes.itemTitle}>Annual Returns</Link>
                </div>

                 <div className={clsx(classes.item, classes.annualAccounts)}>
                    <Link to="/services/annual-accounts" className={classes.itemTitle}>Annual Accounts</Link>
                </div>

                 <div className={clsx(classes.item, classes.limitedCompany)}>
                    <Link to="/services/limited-company" className={classes.itemTitle}>Limited Company</Link> 
                </div>

                 <div className={clsx(classes.item, classes.cis)}>
                    <Link to="/services/cis" className={classes.itemTitle}>CIS</Link>
                </div>
        </Carousel>
    )
}

export default CarouselSmall
