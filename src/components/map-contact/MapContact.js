import React from "react";
import { Grid } from "@material-ui/core";
import LeafLetMap from "../leaflet-map/LeafLetMap";
import useStyles from "./styles";
import CallMissedOutgoingIcon from '@material-ui/icons/CallMissedOutgoing';

const MapContact = () => {
    const classes = useStyles();
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
                <h3 className={classes.contactTitle}>Looking for advice?</h3>
                <p className={classes.contactText}>
                    Want to learn more about what BNA Consulting can do for you?
                    Get in touch today by filling in the form below and the team
                    will get back to you shortly.
                </p>
                <p className={classes.contactFormText}>
                    I would like to consult:
                </p>
                <form className={classes.contactForm}>
                    <div className={classes.inputWrap}>
                        <input type="text" placeholder="How to assist you:*" className={classes.formInput} />
                        <input type="text" placeholder="Phone number:*" className={classes.formInput}/>
                    </div>

                    <div className={classes.inputWrap}>
                        <input type="text" placeholder="Your name:*" className={classes.formInput}/>
                        <button className={classes.submitBtn}>Submit request</button>
                    </div>
                </form>
            </Grid>
        </Grid>
    );
};

export default MapContact;
