import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import Cart from '../components/Cart'
import CartItem from '../components/CartItem'
import CartResult from '../components/CartResult'
import { isEmpty } from 'lodash';
import * as Message from '../constants/Message'
import { actRemoveProductInCart, actChangeMessage, actChangeQuantityItemInCart } from '../actions';



class CartContainer extends Component {
    render() {
        const { cart } = this.props;
        return (
            <div>
                { this.showCart(cart) }
            </div>
        );
    }

    showCart = (cart) => {
        if(!isEmpty(cart)) {
            return (<Cart> 
                { this.showCartItem(cart) }
                { this.showTotalAmount(cart)}
            </Cart>)
        }
        else {
            return Message.MSG_CART_EMPTY;
        }
    };

    showCartItem = (cart) => {
        if(cart) {
            let { onDeleteItemInCart, onChangeMessage, onChangeQuantityItemInCart } = this.props;

            return cart.map((cartItem, index) => {
                return <CartItem 
                        key = {index} 
                        cartItem = {cartItem}
                        onDeleteItemInCart = { onDeleteItemInCart }
                        onChangeMessage = {onChangeMessage}
                        onChangeQuantityItemInCart = { onChangeQuantityItemInCart }/>;
            })
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
        }).isRequired,
    ),
    onDeleteItemInCart : PropTypes.func.isRequired,
    onChangeMessage : PropTypes.func.isRequired,
    onChangeQuantityItemInCart : PropTypes.func.isRequired
}


const mapStateToProps = state => {
    return {
        cart : state.cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteItemInCart : (id) => {
            dispatch(actRemoveProductInCart(id));
        },
        onChangeMessage : (message) => {
            dispatch(actChangeMessage(message))
        },
        onChangeQuantityItemInCart : (id, quantity) => {
            dispatch(actChangeQuantityItemInCart(id, quantity));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
