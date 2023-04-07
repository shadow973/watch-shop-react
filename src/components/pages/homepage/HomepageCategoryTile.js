import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { capitalizeFirstLetter } from '../../../helpers';

const HomepageCategoryTile = (props) => {
    return (
        <div className="category">
            <NavLink to={"/" + capitalizeFirstLetter(props.name) + "#app"}>
                <img className="category-image" src={"./images/" + props.name + "-banner.jpg"} alt=""/>
                <span className="category-text">
                    { capitalizeFirstLetter(props.name) }
                </span>
            </NavLink>
        </div>
    )
}

export default HomepageCategoryTile;