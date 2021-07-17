import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '95%',
    margin: '0 auto'
  },
  heading: {
    fontSize: "19px",
    fontWeight: "bold",
  },
  accrWrap: {
    // height: '100px'
    minHeight: '90px'
  },
  accrContent: {
    lineHeight: '1.6rem',
    letterSpacing: '0.7px'
  },
  accrDetails: {
    // minHeight: '350px !important'
  }
}));

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion className={classes.accrWrap}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>How do I register as self-employed?</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accrDetails}>
          <Typography>
            <p className={classes.accrContent}>
            If you’re self-employed, you’ll need to register through HM Revenue & Customs. To do this, you’ll need your National Insurance Number handy. If you’re a UK citizen, you should have received this shortly before your 16th birthday. If you have moved to the UK more recently, you can apply for one, we can help you with this.
            </p>
            <br/>
            <p className={classes.accrContent}>
            Once you have your National Insurance Number, you can register as self-employed. Once you’re registered you’ll be given a Unique Taxpayer Reference (UTR). Keep your UTR safe – you’ll need it when it comes to completing your Self Assessment tax return. HMRC will then use the information you’ve given, including you National Insurance Number and earnings, to set you up with the right tax code and arrange how much you owe in National Insurance contributions. If you’re not sure you’re on the right tax code or need help registering, get in touch with JJ UK Consulting today.
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.accrWrap}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>When should I register for VAT?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p className={classes.accrContent}>If you’re self-employed or are doing business in the UK either as an individual, a company, a partnership, a charity, an association, as a group of people acting together under a specific name or other local authority, you will need to register for VAT.</p>
            <br/>
            <p className={classes.accrContent}>VAT Registration is strictly compulsory if your annual turnover reaches over £85,000. Equally, if you expect your turnover to be higher than £85,000 in the next 30 days, you will also need to register for VAT. However, if your turnover only exceeds £85,000 temporarily, you may apply for an exception from VAT registration.</p>
            <br />
            <p className={classes.accrContent}>If you assume a VAT registered business, your taxable VAT turnover for the last year must be added to the turnover of your newly acquired business when deducing if the registration threshold of £85,000 has been exceeded. It’s important to note that if you sell only goods or services that are exempt or do not qualify for VAT, or you are not a business according to HMRC’s definition, then you cannot register for VAT. Find out if your business qualifies here.</p>
          </Typography>
        </AccordionDetails>
      </Accordion>
     
     <Accordion className={classes.accrWrap}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Can I still register for VAT if my business turnover is below the VAT Registration threshold?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p className={classes.accrContent}>As mentioned above, the threshold for VAT Registration in the UK is £85,000. If your turnover is below this threshold, you may still voluntarily register for VAT. If you choose to do this, please make sure you regularly check if your turnover has reached the threshold. If it does reach or exceed the threshold in the future, you will need to register for VAT.</p>
          </Typography>
        </AccordionDetails>
      </Accordion>

       <Accordion className={classes.accrWrap}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>How do I let HMRC know that I’m closing my business?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p className={classes.accrContent}>If you have decided to close your business, there are several things you and your shareholders need to do. Business partners and the self-employed can let HMRC know in the change of status. In addition, shareholders may have to file a Company Tax Returns form and pay corporation tax. While doing this, make sure you account for any capital gains you may have made in the closing process and mark them in your Company Tax Return.</p>
            <br />
            <p className={classes.accrContent}>As for employers, you’ll need to submit a last Full Payment Submission (FPS) for your final payroll to pay any outstanding PAYE tax and National Insurance deductions for your employees.</p>
            <br />
            <p className={classes.accrContent}>Finally, make sure your VAT-registered business deregisters from VAT. If you have any further questions, do get in touch with our helpful team.</p>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
