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
                        JJ UK VAT Experts at Your Side
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography >
                        <p>The most crucial elements of the business are to file the VAT returns before or on the due date. JJ UK Consulting is there to help you with VAT returns service,  any tasks that require expert care or a thorough approach to details. This will allow you and your employees to focus on the work.</p>
                        <br/>
                        <p>JJ UK Consulting can skillfully assist you in every step of the way, through the whole process since the laws are ever-changing and expanding, you will need our guiding hand.</p>
                        <br/>
                        <p>At JJ UK Consulting, we pride ourselves on being always informed on any recent laws and thus we are happy and able to answer any of the questions. JJ UK Consulting can provide VAT returns service to review the work your bookkeeping department has done or complete your VAT returns in their stead.</p>
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
                        VAT &amp; HMRC related services
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography >
                        <p>We at JJ UK Consulting specialise in VAT, which is among the most complex files to process. We have experience with the compiling of VAT and the patience when working on HMRC related paperwork.</p>
                        <br/>
                        <p>We aim to help your business needs by being there for you by providing professional advice based on our vast experience.</p>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            
        </div>
    );
}
