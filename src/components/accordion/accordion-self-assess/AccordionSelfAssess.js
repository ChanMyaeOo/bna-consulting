import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "95%",
        margin: "0 auto",
        paddingBottom: "50px",
    },
    heading: {
        fontSize: theme.typography.pxToRem(20),
        fontWeight: 'bold',
        color: "#1a1e66",
    },
    accrContent: {
        color: "#00f !important",
    },
    accorBorder: {
        border: "1px solid #ccc",
        boxShadow: "none",
        margin: "15px 0",
        borderRadius: "5px",
    },
}));

export default function SimpleAccordion() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>
                        What is Self Assessment?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography clasName={classes.accrContent}>
                        <p>Our expert accountant at BNA Consulting have often been asked what self assessment is, and the simplest way to put it is that it is a tax return is a form on which you must give details of your income and expenses, if asked to do so by HM Revenue and Customs (HMRC). The tax return is then used to calculate the amount of tax that you are due to pay. We must also mention that if you fall into any of these categories, you may need to submit a Self Assessment Tax Return form:</p>
                        <br/>
                        <ul>
                            <li>Are Self Employed (including CIS card holders)</li>
                            <li>Receive offshore / foreign income</li>
                            <li>Own UK rental property</li>
                            <li>Are a company director</li>
                            <li>Have taxable benefits (P11D from your employer)</li>
                            <li>Made capital gains over £8,800</li>
                            <li>Corporation Tax Self Assessment</li>
                        </ul>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className={classes.heading}>
                        Paying too much Tax?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography clasName={classes.accrContent}>
                        <h4>Have you ever thought that you might be paying too much tax?</h4>
                        <p>BNA Consulting is there to allay your worries. We ensure that that you are almost guaranteed tax refund if you satisfy one of the following criteria:</p>
                        <br/>
                        <ul>
                            <li>You have not worked full tax year</li>
                            <li>You have been taxed on the wrong tax code</li>
                            <li>You work in the construction industry on the CIS scheme</li>
                            <li>Your earning during tax year were less than the tax free threshold of the current year</li>
                        </ul>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
