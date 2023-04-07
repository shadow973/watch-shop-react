import React from 'react';

import ProductList from '../../product/ProductList';
import Banner from './Banner';
import HomepageCategories from './HomepageCategories';

const Homepage = () => {
    return (
        <div className="homepage">
            <Banner />
            <HomepageCategories />

            <div className="homepage-product-list content-wrapper">
                <h1 className="homepage-feature-title">
                    Featured Products
                </h1>
                <ProductList category={"all"} limit={8} />
            </div>
        </div>
    )
}

export default Homepage;