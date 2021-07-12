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
                        CIS Registration
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography clasName={classes.accrContent}>
                        <p>Working with will help you get it the moment you who are managing financial affairs on your behalf HMRC can also use this number to identify you as a self-employed tax payer. If you are earning money that isn’t taxed before you receive it from an employer (know as PAYE) it is essential that you register as self-employed with HMRC and receive a UTR Number.</p>
                        <br/>
                        <p>BNA Consulting will assist you if HMRC finds that you are operating as self-employed without having notified them you could be subject to heavy fines and potential criminal prosecution. If your self-assessment tax return is submitted without a valid UTR it will fail and you could be fined for not submitting a correct form by the deadline. Business partnerships need a UTR for the firm and a UTR for each partner in order to file online.</p>
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
                        What is a UTR number for a company?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography clasName={classes.accrContent}>
                        <p>Companies have UTRs as well as individuals. The company Unique Taxpayer Reference (UTR) will have been issued by HMRC when the company was set up and registered.</p>
                        <br/>
                        <p>Your company’s UTR will be included in the first letter you receive from HMRC at your registered office. It will be printed next to a heading like ‘UTR’, ‘Tax reference’, ‘Official Use’ or ‘Reference’. HMRC will use the UTR to identify your company whenever you contact them about tax.</p>
                        <br/>
                        <p>When BNA Consulting is done with your paperwork your company number will be officially known as a Company Registration Number (CRN). It is issued by Companies House immediately upon incorporation. It is unique to your company and is displayed on your certificate of incorporation. We will provide you with this number which you must provide this number whenever you contact Companies House. Therefore count on BNA Consulting to get you where you are going safely, and reliably.</p>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
