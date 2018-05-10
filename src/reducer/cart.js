import * as types from '../constants/ActionType'
import { find, remove } from 'lodash'
var data = JSON.parse(localStorage.getItem('CART'));

var inittialState = data ? data : [];


const cart = (state = inittialState, action) => {
    switch (action.type) {
        case types.ADD_TO_CART:
            let { product, quantity } = action;

            let findItem = find(state, function (item) { return item.product.id === product.id });
            if (findItem) {
                findItem.quantity += quantity;
            }
            else {
                state.push({
                    product,
                    quantity
                });
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        case types.DELETE_PRODUCT_IN_CART: 

            let { idItemDelete } = action;
            
            remove(state, function(item) { return item.product.id === idItemDelete})

            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        case types.CHANGE_QUANTITY_ITEM_IN_CART: 
            
            let { idItem, quantityChange } = action;
            let findItemChange = find(state, function (item) { return item.product.id === idItem });

            if (findItemChange) {
                findItemChange.quantity += quantityChange;
                if(findItemChange.quantity <= 0) {
                    remove(state, function(item) { return item.product.id === idItem})
                }
            }
            
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        default: return [...state];
    }
}

export default cart;