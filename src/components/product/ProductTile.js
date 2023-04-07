import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';

const ProductTile = (props) => {
    return (
        <div className="product-tile">
            <NavLink to={"/product/" + props.watch.model_number + "#app"}>
                <img className="product-tile-image" src={"/images/products/" + props.watch.model_number + "-image-1.jpg"} alt={props.watch.mode_name} />
                <span className="product-tile-details name">{props.watch.model_name}</span>
                <span className="product-tile-details price">${props.watch.price}</span>
            </NavLink>
        </div>
    )
}

export default ProductTile;