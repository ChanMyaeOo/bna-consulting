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
                        BNA's Adaptable Remote Service
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography >
                        <p>BNA Consulting is there to ensure that you receive additional support for Business Development and small business start-ups by offering remote payroll service support. All we require of you is that you provide us with the necessary information, from which we will be able to calculate the salary on any basis you prefer-. BNA Consulting always ensures that your company payslips are prepared that they are mailed directly to your staff on time.</p>
                        <br/>
                        <p>This is as simple as it gets. It is our opinion that your veteran staff should not be tasked with tedious tasks such as payslip preparation since they could be growing your business elsewhere. This is what BNA Consulting plays a pivotal role in greasing the processes of your company by taking care of minute, but still very important tasks.</p>
                        <br/>
                        <p>We at BNA aim to be the most affordable and reliable choice when choosing a company to process your payroll.</p>
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>
                        Keeping your Payroll in-house
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography >
                        <p>Start-ups and small businesses are the future of the country, this is why BNA consulting strives to offer additional benefits to these budding industries. Processing the payroll in a small business or start-up is in no way easier than in a large corporation, this is why we offer to do those services within London.</p>
                        <br/>
                        <p>We offer various services, including monitoring services to keep tabs on your payroll information and to make sure that your money is going where it should. O expert professionals will process sensible information that will assuredly not leave the 4 walls of your office. Your documents will be secured and you will have the benefit of working together with our veteran staff.</p>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            
        </div>
    );
}
