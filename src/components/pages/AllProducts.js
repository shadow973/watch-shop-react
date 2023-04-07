import React from 'react';
import ProductList from '../product/ProductList';

const AllProducts = (props) => {
    return (
        <div className="content-wrapper">
            <ProductList category={"all"} limit={0} />
        </div>
    )
}

export default AllProducts;