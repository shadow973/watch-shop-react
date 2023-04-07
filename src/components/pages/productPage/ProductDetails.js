import React from 'react';
import AddToCart from './AddToCart';

const ProductDetails = ({ watch }) => {
    return (
        <div className="product-details">
            <div className="product-name">
                <h1 className="product-title">{watch.model_name}</h1>
                <span className="model-number">{watch.model_number}</span>
            </div>

            <p className="product-price">
                {"$ " + watch.price + ".00"}
            </p>

            <p className="product-description">
                {watch.description}
            </p>

            <AddToCart watch={watch} />
        </div>
    )
}

export default ProductDetails;