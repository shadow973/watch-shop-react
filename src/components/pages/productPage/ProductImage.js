import React from 'react';

const ProductImage = ({ watch }) => {
    return (
        <div className="product-image">
            <img src={"/images/products/" + watch.model_number + "-image-1.jpg"} alt={watch.model_name} />
        </div>
    )
}

export default ProductImage;