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
import Faqs from './pages/faqs/Faqs'
import Contact from './pages/contact/Contact'
import "./style.css";


const App = () => {
    return (
            <Router>     
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
    );
};

export default App;
