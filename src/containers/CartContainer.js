import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import Cart from '../components/Cart'
import CartItem from '../components/CartItem'
import CartResult from '../components/CartResult'

import * as Message from '../constants/Message'



class CartContainer extends Component {
    render() {
        const { cart } = this.props;
        return (
           <Cart> 
               { this.showCartItem(cart) }
               { this.showTotalAmount(cart)}
           </Cart>
        );
    }

    showCartItem = (cart) => {
        if(cart) {
            return cart.map((cartItem, index) => {
                return <CartItem key = {index} cartItem = {cartItem}/>;
            })
        } else {
            return Message.MSG_CART_EMPTY;
        }
    }

    showTotalAmount = (cart) => {
        if(cart) {
            return <CartResult cart = { cart.map(item => {
                return {
                    price: item.product.price,
                    quantity: item.quantity
                }
            }) }/>
        }
    }

}

CartContainer.propTypes = {
    cart : PropTypes.arrayOf(
        PropTypes.shape({
            product : PropTypes.shape({
                id : PropTypes.number.isRequired,
                name : PropTypes.string.isRequired,
                image : PropTypes.string,
                description : PropTypes.string,
                price : PropTypes.number.isRequired,
                inventory : PropTypes.number.isRequired,
                rating: PropTypes.number
            }).isRequired,
            quantity: PropTypes.number.isRequired
        }).isRequired
    )
}


const mapStateToProps = state => {
    return {
        cart : state.cart
    }
}

export default connect(mapStateToProps)(CartContainer);
