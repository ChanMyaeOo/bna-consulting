import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import emailjs from "emailjs-com";
import HeroSection from "../../components/hero-section/HeroSection";
import ReviewContact from "../../components/review-contact/ReviewContact";
import FaqsAccordion from "./faqs-accordion/FaqsAccordion";
import useStyles from "./styles";

const Faqs = () => {
    const classes = useStyles();
    const YOUR_SERVICE_ID = "service_tq3t8ci";
    const YOUR_TEMPLATE_ID = "question_template";
    const YOUR_USER_ID = "user_REXWbQq23CGuDCuiuX8WF";

    const [formData, setFormData] = useState({
        user_name: "",
        user_email: "",
        user_phone: "",
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
                        user_phone: "",
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
        <div>
            <HeroSection title="Faqs" />

            <div className={classes.faqsWrapper}>
                <div className={classes.faqsHeaderWrap}>
                    <p className={classes.faqsTitle}>FAQ</p>
                    <h3 className={classes.faqsHeader}>
                        We are very happy for your any <em>query</em>
                    </h3>
                </div>

                <Grid container className={classes.faqsContentWrapper}>
                    <Grid item xl={7} lg={7} md={7} sm={12} xs={12}>
                        <FaqsAccordion />
                    </Grid>

                    <Grid
                        item
                        className={classes.faqsFormWrapper}
                        xl={5}
                        lg={5}
                        md={5}
                        sm={12}
                        xs={12}
                    >
                        <div className={classes.formTitleWrap}>
                            <h3 className={classes.formTitle}>
                                Are you looking for some advice?
                            </h3>
                            <p className={classes.formText}>
                                Get in touch and we'll get back to you as soon
                                as we can.
                            </p>
                        </div>
                        <form className={classes.form} onSubmit={sendMail}>
                            <input
                                type="text"
                                placeholder="Name"
                                required
                                name="user_name"
                                value={formData.user_name}
                                onChange={handleChange}
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                required
                                name="user_email"
                                value={formData.user_email}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                placeholder="Telephone"
                                required
                                name="user_phone"
                                value={formData.user_phone}
                                onChange={handleChange}
                            />
                            <textarea
                                placeholder="Ask any question..."
                                className={classes.formTextArea}
                                required
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                            <button className={classes.formSubmit}>
                                Submit now
                            </button>
                        </form>
                    </Grid>
                </Grid>
            </div>

            <ReviewContact />
        </div>
    );
};

export default Faqs;
