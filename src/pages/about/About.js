import React, { useEffect } from "react";
import HeroSection from "../../components/hero-section/HeroSection";
import ReviewContact from "../../components/review-contact/ReviewContact";
import AboutImg from "../../images/home-about-img.jpg";
import AboutItem1 from "../../images/about-item1.png";
import AboutItem2 from "../../images/about-item2.png";
import AboutItem3 from "../../images/about-item3.png";
import useStyles from "./styles";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
    const classes = useStyles();

    useEffect(() => {
        AOS.init({
            duration: 800,
        });
    }, []);
    return (
        <div>
            <HeroSection title="About us" />
            <div className={classes.aboutContentWrap}>
                <p className={classes.aboutTitle}>LONDON BASED</p>

                <h3 className={classes.aboutHeader}>
                   Accountants &amp; Consultants
                </h3>

                <div className={classes.aboutContent}>
                    <div className={classes.imgWrap} data-aos="fade-up" data-aos-once="true">
                        <img
                            src={AboutImg}
                            alt="img"
                            className={classes.aboutImg}
                        />
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
                        <p>
                            At JJ UK CONSULTING we aim to provide peace of mind
                            with perfection in work. We can rest assure you that
                            if you are with JJ UK CONSULTING your accounting
                            matters are in safe hands.
                        </p>
                        <br />
                        <p>
                            Also, the perfection in work and the peace of mind
                            we deliver are another key point of JJ UK Consulting.
                            We serve you according to your needs and
                            flexibility.
                        </p>
                        <br />
                        <p>
                            If you can not find exactly what you are looking
                            for, Contact Us for advice. Book your consultation
                            now.
                        </p>
                    </div>
                </div>
            </div>

            <div className={classes.itemWrapper}>
                <div className={classes.aboutItemWrap}>
                    <img
                        src={AboutItem1}
                        alt="logo"
                        className={classes.itemLogo}
                    />
                    <h3 className={classes.itemTitle}>
                        <em>English and Russian</em> Speaking Accountants
                    </h3>
                    <p className={classes.itemContent}>
                        Our highly trained, the bilingual team can help your
                        business flourish with their specialised expertise in
                        British taxes, bookkeeping and much more.
                    </p>
                </div>

                <div className={classes.aboutItemWrap}>
                    <img
                        src={AboutItem2}
                        alt="logo"
                        className={classes.itemLogo}
                    />
                    <h3 className={classes.itemTitle}>
                        <em>Personal Account</em> Management
                    </h3>
                    <p className={classes.itemContent}>
                        Get a dedicated accountant to help with your
                        personalised needs and queries, so you always feel you
                        are in safe hands.
                    </p>
                </div>

                <div className={classes.aboutItemWrap}>
                    <img
                        src={AboutItem3}
                        alt="logo"
                        className={classes.itemLogo}
                    />
                    <h3 className={classes.itemTitle}>
                        <em>Reliable and Flexible</em> Team
                    </h3>
                    <p className={classes.itemContent}>
                        Our team will work around your availability to make sure
                        your accounts are taken care of without any hassle, so
                        you can focus on your business.
                    </p>
                </div>
            </div>

            <div className={classes.chooseSection}>
                <div className={classes.chooseTextWrap}>
                    <div className={classes.chooseHeader}>
                        <p>why choose us</p>
                        <h3>
                            Because at <em>JJ UK CONSULTING</em>
                        </h3>
                    </div>
                    <p className={classes.chooseContent}>
                        We make JJ UK Consulting different, Our dedicated and
                        experienced team of English and Russian speaking
                        accountants in London have the skills to manage every
                        area of your accounting needs, from setting up a limited
                        company to managing annual returns, your self-assessment
                        and even payroll for your staff.
                    </p>
                </div>
            </div>

            <div className={classes.uniqueSection}>
                <div className={classes.uniqueItem}>
                    <h3>Expert team</h3>
                    <p>
                        We are an experienced and qualified English and Russian
                        speaking executive Accounting &amp; Consulting firm
                        based in London.
                    </p>
                </div>

                <div className={classes.uniqueItem}>
                    <h3>Consultations</h3>
                    <p>
                        Whether you’re just looking for some advice or would
                        like the team to take care of your accounts, best
                        service assured.
                    </p>
                </div>

                <div className={classes.uniqueItem}>
                    <h3>Fair pricing</h3>
                    <p>
                        JJ UK Consulting offers competitive and affordable pricing
                        based on your needs, So now you can get the best
                        possible service at the best price.
                    </p>
                </div>
            </div>

            <ReviewContact />
        </div>
    );
};

export default About;
