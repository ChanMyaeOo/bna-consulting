import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Layout from "./components/layout/Layout";
import About from './pages/about/About'
import Services from './pages/services/Services'
import Bookkeeping from './pages/service-detail/bookkeeping/Bookkeeping'
import UtrNumber from './pages/service-detail/utr-number/UtrNumber'
import SelfAssessment from './pages/service-detail/self-assessment/SelfAssessment'
import AnnualReturns from './pages/service-detail/annual-returns/AnnualReturns'
import AnnualAccounts from './pages/service-detail/annual-accounts/AnnualAccounts'
import LimitedCompany from './pages/service-detail/limited-company/LimitedCompany'
import Cis from './pages/service-detail/cis/Cis'
import Vat from './pages/service-detail/vat/Vat'
import Payroll from './pages/service-detail/payroll/Payroll'
import Faqs from './pages/faqs/Faqs'
import Contact from './pages/contact/Contact'
import ScrollToTop from './utils/ScrollToTop'
import ScrollButton from './components/scroll-button/ScrollButton'
import "./style.css";


const App = () => {
    return (
            <>
            <Router>
                <ScrollToTop />     
                 <Switch>
                      <Route path="/contact">
                        <Layout>
                            <Contact />
                        </Layout>
                    </Route>
                     <Route path="/faqs">
                        <Layout>
                            <Faqs />
                        </Layout>
                    </Route>



                    <Route path="/services/payroll">
                        <Layout>
                            <Payroll />
                        </Layout>
                    </Route>
                    <Route path="/services/vat">
                        <Layout>
                            <Vat />
                        </Layout>
                    </Route>
                    <Route path="/services/cis">
                        <Layout>
                            <Cis />
                        </Layout>
                    </Route>
                    <Route path="/services/limited-company">
                        <Layout>
                            <LimitedCompany />
                        </Layout>
                    </Route>
                    <Route path="/services/annual-accounts">
                        <Layout>
                            <AnnualAccounts />
                        </Layout>
                    </Route>
                    <Route path="/services/annual-returns">
                        <Layout>
                            <AnnualReturns />
                        </Layout>
                    </Route>
                    <Route path="/services/self-assessment">
                        <Layout>
                            <SelfAssessment />
                        </Layout>
                    </Route>
                    <Route path="/services/utr-number">
                        <Layout>
                            <UtrNumber />
                        </Layout>
                    </Route>
                    <Route path="/services/bookkeeping">
                        <Layout>
                            <Bookkeeping />
                        </Layout>
                    </Route>
                     <Route exact path="/services">
                        <Layout>
                            <Services />
                        </Layout>
                    </Route>
                     <Route path="/about-us">
                        <Layout>
                            <About />
                        </Layout>
                    </Route>
                    <Route path="/">
                        <Layout>
                            <Home />
                        </Layout>
                    </Route>
                </Switch>
            </Router>
            <ScrollButton />

            </>
    );
};

export default App;
