import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import './override.css'

const useStyles = makeStyles((theme) => ({
    root: {
        width: "95%",
        margin: "0 auto",
        paddingBottom: '80px'
    },
    heading: {
        fontSize: theme.typography.pxToRem(20),
        fontWeight: theme.typography.fontWeightRegular,
        color: "#b78b4b",
    },
    accrContent: {
        color: '#00f !important'
    }
}));

export default function SimpleAccordion({ num, title, content, title1, content1, title2, content2}) {
    const classes = useStyles();

    const checkToRender = () => {
        if (num === 1) {
            return (
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>
                            {title}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography clasName={classes.accrContent}>
                           {content}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            );
        } else if (num === 2) {
            return (
                <>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}>
                                {title}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography clasName={classes.accrContent}>
                                {content}
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
                                {title1}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography clasName={classes.accrContent}>
                                {content1}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </>
            );
        } else if (num === 3) {
            return (
                <>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}>
                                {title}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography clasName={classes.accrContent}>
                                {content}
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
                                {title1}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography clasName={classes.accrContent}>
                                {content1}
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
                                {title2}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography clasName={classes.accrContent}>
                                {content2}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </>
            );
        }
    };

    return <div className={classes.root}>{checkToRender()}</div>;
}
