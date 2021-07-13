import React from "react";
import { Link } from 'react-router-dom'
import useStyles from "./styles";
import BookkeepingImg from "../../images/accounting-2.png";
import PayrollImg from "../../images/cheque.png";
import ServiceExpImg from '../../images/h4-about1-2.jpg'
import AnnualAccountImg from '../../images/annual-report (1).png'
import VatImg from '../../images/tax.png'
import AnnualReturnImg from '../../images/annual-report.png'
import AssesImg from '../../images/calculations.png'
import CisImg from '../../images/construction-worker-1.png'
import LimitedImg from '../../images/enterprise.png'
import DocumentImg from '../../images/accounting-3.png'

const HomeService = () => {
    const classes = useStyles();
    return (
        <div className={classes.homeServiceWrap}>
            <div className={classes.headerWrap}>
                <p className={classes.serviceSecton}>Services</p>
                <h3 className={classes.serviceTitle}>
                    Make all the right money moves by our services
                </h3>
            </div>

            <div className={classes.homeService}>
                <div className={classes.leftServiceWrap}>
                    <div className={classes.bookkeepingSection}>
                        <div className={classes.bookLogoWrap}>
                            <img src={BookkeepingImg} alt="logo" />
                        </div>
                        <div>
                            <p className={classes.serviceSubTitle}>Bookkeeping</p>
                            <p className={classes.serviceSubContent}>
                                BNA Consulting offers services for all
                                Bookkeeping needs for our clients. We can help
                                you hand in hand to make the most of your time.
                            </p>
                        </div>
                    </div>

                    <div className={classes.annualAccountSection}>
                        <div className={classes.annualLogoWrap}>
                            <img src={AnnualAccountImg} alt="logo" />
                        </div>
                        <div>
                            <p className={classes.serviceSubTitle}>Annual Accounts</p>
                            <p className={classes.serviceSubContent}>
                                Producing annual accounts can be a complex task, BNA Consulting professionals assure you the best advice regardless of the type of company you are and will prepare the set of annual accounts for you.
                            </p>
                        </div>
                    </div>

                    <div className={classes.vatSection}>
                        <div className={classes.vatLogoWrap}>
                            <img src={VatImg} alt="logo" />
                        </div>
                        <div>
                            <p className={classes.serviceSubTitle2}>VAT</p>
                            <p className={classes.serviceSubContent2}>
                                When filling the VAT return, your business can’t afford to make mistakes. We offer the most tailored advice on your VAT and submitting it on time to avoid any extra penalties. We are tactical enough to deal with HMRC.
                            </p>
                        </div>
                    </div>


                     <div className={classes.annualReturnSection}>
                        <div className={classes.annualReturnLogoWrap}>
                            <img src={AnnualReturnImg} alt="logo" />
                        </div>
                        <div>
                            <p className={classes.serviceSubTitle}>Annual Returns</p>
                            <p className={classes.serviceSubContent}>
                                We can file the Annual Returns or Confirmation Statement and can keep track of it to avoid any penalties. Our Russian professionals handle your worries like a charm and works closely to understand you better.
                            </p>
                        </div>
                    </div>
                    
                </div>

                <div className={classes.middleServiceWrap}>
                    <div className={classes.payrollSection}>
                        <div className={classes.payrollLogoWrap}>
                            <img src={PayrollImg} alt="logo" />
                        </div>
                        <div>
                            <p className={classes.serviceSubTitle2}>Payroll</p>
                            <p className={classes.serviceSubContent2}>
                                We offer you the top-notch services of Payroll
                                in London both in house and remotely. You can
                                trust BNA Consulting professionals to manage,
                                prepare you payslips and even mail them to your
                                employees.
                            </p>
                        </div>
                    </div>
                    
                    <div className={classes.assessmentSection}>
                        <div className={classes.assesLogoWrap}>
                            <img src={AssesImg} alt="logo" />
                        </div>
                        <div>
                            <p className={classes.serviceSubTitle}>Self Assessment</p>
                            <p className={classes.serviceSubContent}>
                                We can handle your self-assessment to save you both time and money. We can also do all the necessary calculation and keep you updated on what and when to pay. We make sure to simplify the entire process for you.
                            </p>
                        </div>
                    </div>
                    
                    <div className={classes.cisSection}>
                        <div className={classes.cisLogoWrap}>
                            <img src={CisImg} alt="logo" />
                        </div>
                        <div>
                            <p className={classes.serviceSubTitle2}>CIS</p>
                            <p className={classes.serviceSubContent2}>
                                Our CIS expert executives are always up to date and can provide you complete service whether it is electronic filing or online verification or to prepare and file your CIS Returns effectively and promptly.
                            </p>
                        </div>
                    </div>

                    <div className={classes.serviceBtnWrap}>
                        <Link to="/services"  className={classes.serviceBtn}>See All Services</Link>
                    </div>

                </div>

                <div className={classes.rightServiceWrap}>
                    <div className={classes.serviceExp}>
                            <img src={ServiceExpImg} alt="logo" />
                    </div>

                    <div className={classes.limitedSection}>
                        <div className={classes.limitedLogoWrap}>
                            <img src={LimitedImg} alt="logo" />
                        </div>
                        <div>
                            <p className={classes.serviceSubTitle2}>Limited Company</p>
                            <p className={classes.serviceSubContent2}>
                                At BNA Consulting our multilingual executives can understand your needs and goals more precisely, providing services such as opening the company and dealing with all the legal documents to keep things right from the start.
                            </p>
                        </div>
                    </div>

                    <div className={classes.documentSection}>
                        <div className={classes.documentLogoWrap}>
                            <img src={DocumentImg} alt="logo" />
                        </div>
                        <div>
                            <p className={classes.serviceSubTitle}>Documents for Home Office</p>
                            <p className={classes.serviceSubContent}>
                                BNA Consulting can help you with all the documents requested by the Home office in required format and scenarios.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeService;
