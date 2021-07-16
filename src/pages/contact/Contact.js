import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import emailjs from "emailjs-com";
import ApartmentIcon from "@material-ui/icons/Apartment";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import HeroSection from "../../components/hero-section/HeroSection";
import LeafLetMap from "../../components/leaflet-map/LeafLetMap";
import CarouselLarge from "../../components/carousel-large/CarouselLarge";
import CarouselSmall from "../../components/carousel-small/CarouselSmall";
import useStyles from "./styles";

const Contact = () => {
    const classes = useStyles();
    const YOUR_SERVICE_ID = "service_tq3t8ci";
    const YOUR_TEMPLATE_ID = "advice_template";
    const YOUR_USER_ID = "user_REXWbQq23CGuDCuiuX8WF";

    const [formData, setFormData] = useState({
        user_name: "",
        user_email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    function sendMail(e) {
        e.preventDefault();

        emailjs
            .sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, e.target, YOUR_USER_ID)
            .then(
                (result) => {
                    setFormData({
                        user_name: "",
                        user_email: "",
                        message: "",
                    });
                    alert("Success!");
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                    alert("Error");
                }
            );
    }
    return (
        <div className={classes.contactSection}>
            <HeroSection title="Contact us" />

            <div className={classes.contactWrapper}>
                <h3 className={classes.contactTitle}>
                    Get in touch and we'll get back to you as soon as we can. We
                    look forward to <em>hearing from you!</em>
                </h3>
                <Grid container className={classes.contactContainer}>
                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                        <p className={classes.contactIntro}>
                            We are experienced and qualified English and Russian
                            speaking executive Accounting &amp; Consulting firm
                            based in London.
                        </p>
                        <p className={classes.contactAddress}>
                            <ApartmentIcon /> 368 Caledonian Rd London N1 1DU
                        </p>
                        <p className={classes.contactAddress}>
                            <PhoneIcon /> +44 20 3830 8882
                        </p>
                        <p className={classes.contactAddress}>
                            <EmailIcon /> info@jjukaccountancy.com
                        </p>
                    </Grid>

                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                        <form
                            className={classes.formWrapper}
                            onSubmit={sendMail}
                        >
                            <label for="name">Your Name (required)</label>
                            <input
                                type="text"
                                id="name"
                                required
                                className={classes.textInput}
                                name="user_name"
                                value={formData.user_name}
                                onChange={handleChange}
                            />
                            <label for="email">Your Email (required)</label>
                            <input
                                type="email"
                                id="email"
                                required
                                className={classes.emailInput}
                                name="user_email"
                                value={formData.user_email}
                                onChange={handleChange}
                            />
                            <label
                                for="message"
                            >
                                Your Message
                            </label>
                            <textarea
                                id="message"
                                className={classes.messageInput}
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                            <button className={classes.sendInput}>Send</button>
                        </form>
                    </Grid>
                </Grid>
            </div>

            <LeafLetMap className={classes.leafLetMap} />
            <div className={classes.contactCarousel}>
                <CarouselLarge />
                <CarouselSmall />
            </div>
        </div>
    );
};

export default Contact;
