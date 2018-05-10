import React, { Component } from 'react';
import * as Message from '../constants/Message';


class CartItem extends Component {
  render() {

    let { product, quantity } = this.props.cartItem;    
    return (
        <tr>
        <th scope="row">
            <img src={ product.image }
                alt={ product.name } className="img-fluid z-depth-0" />
        </th>
        <td>
            <h5>
                <strong>{ product.name }</strong>
            </h5>
        </td>
        <td>{ product.price }$</td>
        <td className="center-on-small-only">
            <span className="qty">{ quantity } </span>
            <div className="btn-group radio-group" data-toggle="buttons">
                <label className="btn btn-sm btn-primary
                    btn-rounded waves-effect waves-light"
                    onClick = {() => this.onSubItemQuantity(product.id)}>
                    <a>—</a>
                </label>
                <label className="btn btn-sm btn-primary
                    btn-rounded waves-effect waves-light"
                    onClick = {() => this.onPlusItemQuantity(product.id)}>
                    <a>+</a>
                </label>
            </div>
        </td>
        <td>{ quantity * product.price }$</td>
        <td>
            <button type="button" 
                    className="btn btn-sm btn-primary waves-effect waves-light" 
                    data-toggle="tooltip" data-placement="top"
                    title="" 
                    data-original-title="Remove item"
                    onClick= { () => this.onDeleteToCart(product.id)}
                >
                X
            </button>
        </td>
    </tr>
    );
  }

  onDeleteToCart(id) {
      this.props.onDeleteItemInCart(id);
      this.props.onChangeMessage(Message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
  }
  
  onPlusItemQuantity(id) {
      this.props.onChangeQuantityItemInCart(id, 1);
      this.props.onChangeMessage(Message.MSG_UPDATE_CART_SUCCESS);
  }

  onSubItemQuantity(id) {
    this.props.onChangeQuantityItemInCart(id, -1);
    this.props.onChangeMessage(Message.MSG_UPDATE_CART_SUCCESS);
}
}

export default CartItem;
