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
import "./style.css";


const App = () => {
    return (
            <Router>     
                 <Switch>
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
