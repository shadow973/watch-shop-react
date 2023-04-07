import React from 'react';
import { connect } from 'react-redux';

class AddToCart extends React.Component {
    constructor() {
        super();
        this.qtyRef = React.createRef();
    }

    handleCart() {
        let itemQuantity = 0;
        const value = parseInt(this.qtyRef.current.value);
        const item = this.props.item.filter(el => el.model === this.props.watch.model_number);

        if (item.length) {
            itemQuantity = item[0].quantity;
        }

        if (value > 0 && value < 6 && (itemQuantity + value) < 6) {
            const cartItem = {
                name: this.props.watch.model_name,
                model: this.props.watch.model_number,
                price: this.props.watch.price,
                subtotal: this.props.watch.price * value,
                quantity: value
            }
            this.props.addToCart(cartItem);
            if (!this.props.isValid) {
                this.props.validateQty(true);
            }
        } else {
            this.props.validateQty(false);
        }
    }

    componentDidMount() {
        this.props.validateQty(true);
    }

    render() {

        const isValid = this.props.isValid;
        return (
            <div className={isValid ? "add-to-cart" : "add-to-cart has-error"}>
                <input className="quantity" type="number" placeholder="Qty" ref={this.qtyRef} />
                <button className="add-btn" onClick={() =>this.handleCart()}>Add to Cart</button>
                {isValid ? "" : <span className="error">Quantity must be at least 1 and maximum 5</span>}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        item: state.items,
        isValid: state.isValid
    }
}

const mapDispatchToStore = (dispatch) => {
    return {
        addToCart: (item) => dispatch({type: "ADD_TO_CART", value: item}),
        validateQty: (valid) => dispatch({ type: "VALIDATE_QTY", value: valid })
    }
}

export default connect(mapStateToProps, mapDispatchToStore)(AddToCart);