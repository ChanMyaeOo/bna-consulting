import React from 'react'
import { Link } from 'react-router-dom'
import useStyles from './styles'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import TestLogo1 from '../../images/test-logo1.jpg'
import TestLogo2 from '../../images/test-logo2.png'

const Testimonials = () => {
    const classes = useStyles();
    return (
        <div className={classes.testiWrapper}>
            <div className={classes.consultWrap}>
                <h3 className={classes.consultTitle}>Your finances are in <em>safe hands</em></h3>
                <Link to="/contact" className={classes.consultBtn}>Consult Us</Link>
            </div>

            <div className={classes.testimonialWrap}>
                <div className={classes.testimonialHeaderWrap}>
                    <p className={classes.testimonialText}>Testimonial</p>
                    <h3 className={classes.testimonialTitle}>We are very happy for our client’s <em>review</em></h3>
                </div>

                <Carousel showArrows={false} showStatus={false} showThumbs={false} className={classes.carouselNormal}>
                   <div className={classes.leftTestimonial}>
                       <div className={classes.testi1Wrap}>
                           <img src={TestLogo1} alt="logo" className={classes.testLogo1} />
                           <p className={classes.testiText}>JJ UK Consulting has supported my company for a number if years, they are extremely reliable and always available to us when needed.</p>
                           <p className={classes.testiName}>Zack</p>
                           <p className={classes.testiPosition}>Director</p>
                       </div>
                       
                        <div className={classes.testi2Wrap}>
                           <img src={TestLogo2} alt="logo" className={classes.testLogo2} />
                           <p className={classes.testiText}>We are happy to be with JJ UK Consulting as they are always on time with deadlines and deliver what they promise.</p>
                           <p className={classes.testiName}>Andrew</p>
                           <p className={classes.testiPosition}>Marketing Manager</p>
                       </div>
                   </div>

                    <div className={classes.leftTestimonial}>
                        <div className={classes.testi2Wrap}>
                           <img src={TestLogo2} alt="logo" className={classes.testLogo2} />
                           <p className={classes.testiText}>We are happy to be with JJ UK Consulting as they are always on time with deadlines and deliver what they promise.</p>
                           <p className={classes.testiName}>Andrew</p>
                           <p className={classes.testiPosition}>Marketing Manager</p>
                       </div>

                       <div className={classes.testi1Wrap}>
                           <img src={TestLogo1} alt="logo" className={classes.testLogo1} />
                           <p className={classes.testiText}>JJ UK Consulting has supported my company for a number if years, they are extremely reliable and always available to us when needed.</p>
                           <p className={classes.testiName}>Zack</p>
                           <p className={classes.testiPosition}>Director</p>
                       </div>
                   </div>
                </Carousel>



                {/* for mobile view */}
                <Carousel showArrows={false} showStatus={false} showThumbs={false} className={classes.caroselRes}>
                   
                       <div className={classes.testi1Wrap}>
                           <img src={TestLogo1} alt="logo" className={classes.testLogo1} />
                           <p className={classes.testiText}>JJ UK Consulting has supported my company for a number if years, they are extremely reliable and always available to us when needed.</p>
                           <p className={classes.testiName}>Zack</p>
                           <p className={classes.testiPosition}>Director</p>
                       </div>
                       
                        <div className={classes.testi2Wrap}>
                           <img src={TestLogo2} alt="logo" className={classes.testLogo2} />
                           <p className={classes.testiText}>We are happy to be with JJ UK Consulting as they are always on time with deadlines and deliver what they promise.</p>
                           <p className={classes.testiName}>Andrew</p>
                           <p className={classes.testiPosition}>Marketing Manager</p>
                       </div>
                   

                    
                        <div className={classes.testi2Wrap}>
                           <img src={TestLogo2} alt="logo" className={classes.testLogo2} />
                           <p className={classes.testiText}>We are happy to be with JJ UK Consulting as they are always on time with deadlines and deliver what they promise.</p>
                           <p className={classes.testiName}>Andrew</p>
                           <p className={classes.testiPosition}>Marketing Manager</p>
                       </div>

                       <div className={classes.testi1Wrap}>
                           <img src={TestLogo1} alt="logo" className={classes.testLogo1} />
                           <p className={classes.testiText}>JJ UK Consulting has supported my company for a number if years, they are extremely reliable and always available to us when needed.</p>
                           <p className={classes.testiName}>Zack</p>
                           <p className={classes.testiPosition}>Director</p>
                       </div>
                   
                </Carousel>
            </div>
        </div>
    )
}

export default Testimonials
