import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './global/Header';
import Footer from './global/Footer';

import Homepage from './pages/homepage/Homepage';
import CategoryVintage from './pages/CategoryVintage';
import CategoryExtant from './pages/CategoryExtant';
import CategorySteampunk from './pages/CategorySteampunk';
import AllProducts from './pages/AllProducts';
import ProductPage from './pages/productPage/ProductPage';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import Cart from './pages/cart/Cart';

class App extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <Header />
                    <Switch>
                        <Route exact path="/" component={Homepage} />
                        <Route path="/aboutus" component={AboutUs} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/terms" component={Terms} />
                        <Route path="/vintage/" component={CategoryVintage} />
                        <Route path="/extant/" component={CategoryExtant} />
                        <Route path="/steampunk/" component={CategorySteampunk} />
                        <Route path="/allproducts/" component={AllProducts} />
                        <Route path="/product/:productnumber" component={ProductPage} />
                        <Route path="/cart" component={Cart} />
                    </Switch>
                <Footer />
            </BrowserRouter>
        )
    }
}

export default App;
