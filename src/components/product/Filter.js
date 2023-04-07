import React from 'react';

const Filter = (props) => {
    return (
        <li className="filter-item">
            <span className="filter-value" onClick={() => props.handleAddFilter(props.name, props.type)}>{props.name}</span>
        </li>
    )
}

export default Filter;