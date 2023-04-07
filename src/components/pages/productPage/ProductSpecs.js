import React from 'react';

const ProductSpecs = ({ watch }) => {
    const units = {
        mm: "mm",
        m: "m"
    };
    return (
        <div className="product-specs">
            <h2 className="product-specs-title">
                Product Specifications
            </h2>
            <ul className="specs-list">
                <li className="spec-item"><span className="spec-text spec-item-name">Name</span>  <span className="spec-text spec-item-value">{watch.model_name}</span></li>
                <li className="spec-item"><span className="spec-text spec-item-name">Model</span>  <span className="spec-text spec-item-value">{watch.model_number}</span></li>
                <li className="spec-item"><span className="spec-text spec-item-name">Mechanism</span>  <span className="spec-text spec-item-value">{watch.mechanism}</span></li>
                <li className="spec-item"><span className="spec-text spec-item-name">Case Materia</span>  <span className="spec-text spec-item-value">{watch.case_material}</span></li>
                <li className="spec-item"><span className="spec-text spec-item-name">Case Diameter</span>  <span className="spec-text spec-item-value">{watch.case_diameter + units.mm}</span></li>
                <li className="spec-item"><span className="spec-text spec-item-name">Case Thickness</span>  <span className="spec-text spec-item-value">{watch.case_thickness + units.mm}</span></li>
                <li className="spec-item"><span className="spec-text spec-item-name">Band Material</span>  <span className="spec-text spec-item-value">{watch.band_material}</span></li>
                <li className="spec-item"><span className="spec-text spec-item-name">Band Width</span>  <span className="spec-text spec-item-value">{watch.band_width + units.mm}</span></li>
                <li className="spec-item"><span className="spec-text spec-item-name">Water Resistance</span>  <span className="spec-text spec-item-value">{watch.water_resistance + units.m}</span></li>
            </ul>
        </div>
    )
}

export default ProductSpecs;