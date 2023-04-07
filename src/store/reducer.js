let initialState = {};

if (localStorage.getItem('state') === null) {
    initialState = {
        items: [],
        quantityTotal: 0,
        isValid: true
    }
} else {
    initialState = JSON.parse(localStorage.getItem('state'));
}

const reducer = (state = initialState, action) => {
    if (action.type === "ADD_TO_CART") {
        const newItem = state.items.filter(el => el.model === action.value.model);
        let newState = {...state};

        if (newItem.length > 0) {
            const index = newState.items.findIndex(el => el.model === action.value.model);
            newState.items[index].quantity += action.value.quantity;
            newState.quantityTotal += action.value.quantity;

        } else {
            newState = {
                ...state,
                items: [...state.items, action.value],
                quantityTotal: state.quantityTotal + action.value.quantity
            };
        }

        localStorage.setItem('state', JSON.stringify(newState));
        return newState;
    }

    if (action.type === "VALIDATE_QTY") {
        return {
            ...state,
            isValid: action.value
        }
    }

    if (action.type === "UPDATE_CART") {
        const newState = {...state};
        const index = newState.items.findIndex(el => el.model === action.value.model);

        newState.quantityTotal = newState.quantityTotal - newState.items[index].quantity + action.value.quantity;
        newState.items[index].quantity = action.value.quantity;
        newState.items[index].subtotal = newState.items[index].price * action.value.quantity;


        localStorage.setItem('state', JSON.stringify(newState));
        return newState;
    }

    if (action.type === "REMOVE_ITEM") {
        const newState = {...state};
        const index = newState.items.findIndex(el => el.model === action.value);

        newState.quantityTotal -= newState.items[index].quantity;
        newState.items.splice(index, 1);

        localStorage.setItem('state', JSON.stringify(newState));
        return newState;
    }

    return state;
}

export default reducer;