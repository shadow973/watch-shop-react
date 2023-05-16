import React from 'react';
import { connect } from 'react-redux';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import Total from './Total'
import CartEmpty from './CartEmpty';

class Cart extends React.Component {
    constructor() {
        super();
        this.state = {
            showError: false,
            model: ""
        };
    }

    handleChange(e, model) {
        const value = parseInt(e.target.value);

        if (value > 0 && value < 6) {
            this.setState({showError: false, model: model});
            this.props.updateCart({ model: model, quantity: value});
        } else {
            this.setState({showError: true, model: model});
        }
    }

    render() {
        const itemList = this.props.items.map(el =>

            <li className="cart-line cart-item" key={el.model}>
                <span className="item-data item-remove"><button className="remove-cart-item" onClick={() => this.props.removeItem(el.model)}>X</button></span>
                <span className="item-data item-image">
                    <NavLink to={"/product/" + el.model + "#app"}>
                        <img className="cart-image" src={"./images/products/" + el.model + "-image-1.jpg"} alt={el.name} />
                    </NavLink>
                </span>
                <span className="item-data item-name-wrapper">
                    <NavLink to={"/product/" + el.model + "#app"}>
                        <span className="item-name">{el.name}</span>
                        <span className="item-model">{el.model}</span>
                    </NavLink>
                </span>
                <span className="item-data item-price">$ {el.price}</span>
                <span className="item-data item-quantity">
                    <input className="quantity" type="number" placeholder="Qty" defaultValue={el.quantity} onChange={(e) => this.handleChange(e, el.model)} />
                    {(this.state.showError && el.model === this.state.model) ? <span className="error">Quantity must be at least 1 and maximum 5</span> : ""}
                </span>
                <span className="item-data item-total">$ {el.subtotal}</span>
            </li>
        )
        return (
            (this.props.qty < 1) ?

            <CartEmpty /> :

            <div className="content-wrapper">
                <h1 className="cart-feature-title">Cart</h1>
                <ul className="cart-items-list">
                    <li className="cart-line cart-header">
                        <span className="item-header"></span>
                        <span className="item-header"></span>
                        <span className="item-header item-name">Products</span>
                        <span className="item-header item-price">Price</span>
                        <span className="item-header item-quantity">Quantity</span>
                        <span className="item-header item-total">Total</span>
                    </li>
                    {itemList}
                </ul>

                <Total items={this.props.items} />
            </div>
            )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items,
        qty: state.quantityTotal
    }
}

const mapDispatchToStore = (dispatch) => {
    return {
        updateCart: (item) => dispatch({type: "UPDATE_CART", value: item}),
        removeItem: (index) => dispatch({type: "REMOVE_ITEM", value: index})
    }
}

export default connect(mapStateToProps, mapDispatchToStore)(Cart);