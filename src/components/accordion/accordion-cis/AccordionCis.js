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
    cisList: {
        paddingLeft: '25px',
        lineHeight: '1.5rem'
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
                        Work covered by CIS
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography >
                        <p>Construction Industry Scheme (CIS) covers most construction work to a permanent or temporary building or structure civil engineering work like roads and bridges. One must be informed and know that for the purpose of CIS, construction work includes:</p>
                        <br/>
                        <ul className={classes.cisList}>
                            <li>preparing the site, such as laying foundations and providing access works</li>
                            <li>demolition and dismantling</li>
                            <li>installing systems for heating, lighting, power, water and ventilation</li>
                            <li>cleaning the inside of buildings after construction work</li>
                            <li>building work</li>
                            <li>alterations, repairs and decorating</li>
                        </ul>
                        <br/>
                        <p>In addition to our experience, we at BNA Consulting know that you don’t have to register if you do one of the following jobs:</p>
                        <br/>
                        <ul className={classes.cisList}>
                            <li>scaffolding hire (with no labour)</li>
                            <li>architecture and surveying</li>
                            <li>making materials used in construction including plant and machinery</li>
                            <li>delivering materials</li>
                            <li>carpet fitting</li>
                        </ul>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            
        </div>
    );
}
