import React from "react";
import {
    HashRouter as Router,
    Route,
    Redirect,
} from "react-router-dom";
import Home from './Home/index';
import Technology from './Technology';
import ContactUs from './ContactUs';
import Header from './Header';
import Products from './Products';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'fontsource-roboto';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Routes = () => {
    return (
        <Router>
            <Header />
            <Redirect exact from="/" to={"/Home"} />
            <Route path="/Home" component={Home} />
            <Route path="/Technology" component={Technology} />
            <Route path="/ContactUs" component={ContactUs} />
            <Route path="/Products" component={Products} />
        </Router>
    )
}

export default Routes;
