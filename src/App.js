import React from "react";
import Home from "./pages/home/Home";
import Layout from "./components/layout/Layout";
import "./style.css";


const App = () => {
    return (
            <div>
                <Layout>
                    <Home />
                </Layout>
            </div>
    );
};

export default App;
