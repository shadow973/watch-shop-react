import React from 'react';
import FilterType from './FilterType'

const Filters = (props) => {
    return (
        <div className="product-filters">
            <p className="filters-title">Filter by</p>
            <div action="" className="filters-wrapper">
                {(props.case !== "") ?
                    <span className="applied-filter-name" onClick={() => props.handleRemoveFilter("case_material")}>{props.case}</span>
                    :
                    <FilterType type="case_material" name="Case Material" handleAddFilter={props.handleAddFilter} />
                }

                {(props.mechanism !== "") ?
                    <span className="applied-filter-name" onClick={() => props.handleRemoveFilter("mechanism")}>{props.mechanism}</span>
                    :
                    <FilterType type="mechanism" name="Mechanism" handleAddFilter={props.handleAddFilter} />
                }

                {(props.band !== "") ?
                    <span className="applied-filter-name" onClick={() => props.handleRemoveFilter("band_material")}>{props.band}</span>
                    :
                    <FilterType type="band_material" name="Band Material" handleAddFilter={props.handleAddFilter} />
                }
            </div>
        </div>
    )
}

export default Filters;