import React from "react";
import HeroSection from "../../components/hero-section/HeroSection";
import AboutImg from "../../images/home-about.jpg";
import AboutItem1 from '../../images/about-item1.png'
import AboutItem2 from '../../images/about-item2.png'
import AboutItem3 from '../../images/about-item3.png'
import useStyles from "./styles";

const About = () => {
    const classes = useStyles();
    return (
        <div>
            <HeroSection />
            <div className={classes.aboutContentWrap}>
                <p className={classes.aboutTitle}>LONDON BASED</p>
                <h3 className={classes.aboutHeader}>
                    English – Russian speaking Accountants &amp; Consultants
                </h3>

                <div className={classes.aboutContent}>
                    <div className={classes.imgWrap}>
                        <img src={AboutImg} alt="image" className={classes.aboutImg}/>
                    </div>

                    <div className={classes.contentWrap}>
                        <p>
                            We are English and Russian Accountants in London,
                            with a proven track record and excellent client
                            handling capabilities. Our company deals with all
                            aspects of Accounting ranging from self-employed to
                            any company type.
                        </p>
                        <br />
                        <p>
                            We offer a vast range of services making sure it is
                            hassle-free with perfection and delivered on time.
                            Our flexible working approach can help you according
                            to your availability and a dedicated person dealing
                            with all your queries makes it less repetitive and
                            understand your business needs more.
                        </p>
                        <br />
                        <p>At BNA CONSULTING we aim to provide peace of mind with perfection in work. We can rest assure you that if you are with BNA CONSULTING your accounting matters are in safe hands.</p>
                        <br />
                        <p>Also, the perfection in work and the peace of mind we deliver are another key point of BNA Consulting. We serve you according to your needs and flexibility.</p>
                        <br />
                        <p>If you can not find exactly what you are looking for, Contact Us for advice. Book your consultation now.</p>
                    </div>
                </div>
            </div>

            <div className={classes.itemWrapper}>
                <div className={classes.aboutItemWrap}>
                    <img src={AboutItem1} alt="logo" className={classes.itemLogo}/>
                    <h3 className={classes.itemTitle}>English and Russian Speaking Accountants</h3>
                    <p className={classes.itemContent}>Our highly trained, the bilingual team can help your business flourish with their specialised expertise in British taxes, bookkeeping and much more.</p>
                </div>

                <div className={classes.aboutItemWrap}>
                    <img src={AboutItem2} alt="logo" className={classes.itemLogo}/>
                    <h3 className={classes.itemTitle}>Personal Account Management</h3>
                    <p className={classes.itemContent}>Get a dedicated accountant to help with your personalised needs and queries, so you always feel you are in safe hands.</p>
                </div>

                <div className={classes.aboutItemWrap}>
                    <img src={AboutItem3} alt="logo" className={classes.itemLogo}/>
                    <h3 className={classes.itemTitle}>Reliable and Flexible Team</h3>
                    <p className={classes.itemContent}>Our team will work around your availability to make sure your accounts are taken care of without any hassle, so you can focus on your business.</p>
                </div>
            </div>
        </div>
    );
};

export default About;
