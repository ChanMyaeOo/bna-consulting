import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import emailjs from "emailjs-com";
import LeafLetMap from "../leaflet-map/LeafLetMap";
import useStyles from "./styles";
import CallMissedOutgoingIcon from "@material-ui/icons/CallMissedOutgoing";

const MapContact = () => {
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
        <Grid container className={classes.mapContact}>
            <Grid
                item
                xs={6}
                lg={6}
                md={6}
                sm={12}
                xs={12}
                className={classes.homeMap}
            >
                <LeafLetMap />
            </Grid>

            <Grid
                item
                xs={6}
                lg={6}
                md={6}
                sm={12} 
                xs={12}
                className={classes.homeContact}
            >
                <h3 className={classes.contactTitle}>
                    Looking for <em>advice?</em>
                </h3>
                <p className={classes.contactText}>
                    Want to learn more about what JJ UK Consulting can do for you?
                    Get in touch today by filling in the form below and the team
                    will get back to you shortly.
                </p>
                <p className={classes.contactFormText}>
                    I would like to consult:
                </p>
                <form className={classes.contactForm} onSubmit={sendMail}>
                    <div className={classes.inputWrap}>
                        <input
                            type="text"
                            placeholder="How to assist you:*"
                            className={classes.formInput}
                            required
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            placeholder="Your email:*"
                            className={classes.formInput}
                            required
                            name="user_email"
                            value={formData.user_email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className={classes.inputWrap}>
                        <input
                            type="text"
                            placeholder="Your name:*"
                            className={classes.formInput}
                            required
                            name="user_name"
                            value={formData.user_name}
                            onChange={handleChange}
                        />
                        <button className={classes.submitBtn}>
                            Submit request
                        </button>
                    </div>
                </form>
            </Grid>
        </Grid>
    );
};

export default MapContact;
