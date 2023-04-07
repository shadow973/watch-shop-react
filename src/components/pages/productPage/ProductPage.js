import React from 'react';
import ProductImage from './ProductImage';
import ProductDetails from './ProductDetails';
import ProductSpecs from './ProductSpecs';
import { watches } from '../../../api/watches';

const ProductPage = (props) => {
    const watch = watches.filter(watch => watch.model_number === props.match.params.productnumber);
    return (
        <div className="product-page content-wrapper">
            <div className="product-wrapper">
                <ProductImage watch={watch[0]} />
                <ProductDetails watch={watch[0]} />
            </div>

            <div className="product-specs">
                <ProductSpecs watch={watch[0]} />
            </div>
        </div>
    )
}

export default ProductPage;