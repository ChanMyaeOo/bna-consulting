import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
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
                <div className={classes.item}>
                    <p className={classes.itemTitle}>UTR Number</p>
                </div>

                 <div className={classes.item}>
                    <p className={classes.itemTitle}>UTR Number2</p>
                </div>

                 <div className={classes.item}>
                    <p className={classes.itemTitle}>UTR Number3</p>
                </div>
        </Carousel>
    )
}

export default CarouselSmall
