import * as types from '../constants/ActionType';

export const actAddToCart = (product, quantity) => {
    return {
        type : types.ADD_TO_CART,
        product,
        quantity
    }
}

export const actChangeMessage = message => {
    return {
        type : types.CHANGE_MESSAGE,
        message
    }
}

export const actRemoveProductInCart = (idItemDelete) => {
    return {
        type : types.DELETE_PRODUCT_IN_CART,
        idItemDelete
    }
}

export const actChangeQuantityItemInCart = (idItem, quantityChange) => {
    return {
        type : types.CHANGE_QUANTITY_ITEM_IN_CART,
        idItem,
        quantityChange
    }
}
