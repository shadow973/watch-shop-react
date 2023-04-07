import React from 'react';
import ProductList from '../product/ProductList';
import { stripSlash } from '../../helpers';

const CategorySteampunk = (props) => {
    return (
        <div className="content-wrapper">
            <ProductList category={stripSlash(props.location.pathname)} limit={0} />
        </div>
    )
}

export default CategorySteampunk;