import React from 'react'
import { Grid } from '@material-ui/core'
import HeroSection from '../../components/hero-section/HeroSection'
import FaqsAccordion from './faqs-accordion/FaqsAccordion'
import useStyles from './styles'

const Faqs = () => {
    const classes = useStyles();
    return (
        <div>
            <HeroSection title="Faqs" />

            <div className={classes.faqsWrapper}>
                <div className={classes.faqsHeaderWrap}>
                    <p className={classes.faqsTitle}>FAQ</p>
                    <h3 className={classes.faqsHeader}>We are very happy for your any query</h3>
                </div>

                <Grid container className={classes.faqsContentWrapper}>
                    <Grid item xl={7} lg={7} md={7} sm={12} xs={12}>
                        <FaqsAccordion />
                    </Grid>

                    <Grid item className={classes.faqsFormWrapper} xl={5} lg={5} md={5} sm={12} xs={12}>
                        <div className={classes.formTitleWrap}>
                            <h3 className={classes.formTitle}>Are you looking for some advice?</h3>
                            <p className={classes.formText}>Get in touch and we'll get back to you as soon as we can.</p>
                        </div>
                        <form className={classes.form}>
                            <input type="text" placeholder="Name" />
                            <input type="email" placeholder="Email" />
                            <input type="text" placeholder="Telephone" />
                            <textarea placeholder="Ask any question..." className={classes.formTextArea}></textarea>
                            <button className={classes.formSubmit}>Submit now</button>
                        </form>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Faqs
