import React from 'react';
import Filter from './Filter';

const FilterType = (props) => {
    let filterType;

    switch(props.type) {
        case "case_material":
            filterType =
                <ul className="filter-list">
                    <Filter type={props.type} name="Stainless Steel" handleAddFilter={props.handleAddFilter}/>
                    <Filter type={props.type} name="Titanium" handleAddFilter={props.handleAddFilter}/>
                    <Filter type={props.type} name="Brass" handleAddFilter={props.handleAddFilter}/>
                    <Filter type={props.type} name="Alloy" handleAddFilter={props.handleAddFilter}/>
                </ul>
            break;
        case "mechanism":
            filterType =
                <ul className="filter-list">
                    <Filter type={props.type} name="Automatic" handleAddFilter={props.handleAddFilter}/>
                    <Filter type={props.type} name="Mechanical" handleAddFilter={props.handleAddFilter}/>
                    <Filter type={props.type} name="Quartz" handleAddFilter={props.handleAddFilter}/>
                </ul>
            break;
        case "band_material":
            filterType =
                <ul className="filter-list">
                    <Filter type={props.type} name="Stainless Steel" handleAddFilter={props.handleAddFilter}/>
                    <Filter type={props.type} name="Titanium" handleAddFilter={props.handleAddFilter}/>
                    <Filter type={props.type} name="Leather" handleAddFilter={props.handleAddFilter}/>
                    <Filter type={props.type} name="Synthetic Leather" handleAddFilter={props.handleAddFilter}/>
                    <Filter type={props.type} name="Hemp" handleAddFilter={props.handleAddFilter}/>
                </ul>
            break;
        default:
            filterType = "";
    }
    return (
        <div className="filters-section">
            <span className="filter-name">{props.name}</span>
                {filterType}
        </div>
    )
}

export default FilterType;