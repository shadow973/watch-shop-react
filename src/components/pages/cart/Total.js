import React from 'react';

const Total = (props) => {
    let subtotal = 0;
    props.items.forEach((value) => {
        subtotal += value.subtotal;
    });
    const tax = 13;
    const total = subtotal + tax;

    return (
        <div className="total-wrapper">
            <h2 className="total-title">Cart Summary</h2>
            <ul className="total-list">
                <li className="total-line">
                    <span className="total-cell total-name">Subtotal</span>
                    <span className="total-cell total-value">$ {subtotal}</span>
                </li>

                <li className="total-line">
                    <span className="total-cell total-name">Delivery</span>
                    <span className="total-cell total-value">$ {tax}</span>
                </li>

                <li className="total-line">
                    <span className="total-cell total-name">Total</span>
                    <span className="total-cell total-value">$ {total}</span>
                </li>
            </ul>
        </div>
    )
}

export default Total;