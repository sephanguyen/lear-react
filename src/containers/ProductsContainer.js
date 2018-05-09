import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import Products from '../components/Products';
import Product from '../components/Product';
import { actAddToCart } from '../actions/index';

class ProductsContainer extends Component {
    render() {
        const { products } = this.props;
        return (
            <Products> 
                { this.showProducts(products) }
            </Products>
        );
    }

    showProducts(products) {
        let { onAddToCart } = this.props;
        if(products) {
            return products.map((product, index) => {
                return <Product key = {product.id} 
                                product = {product}
                                onAddToCart = { onAddToCart }/>;
            })
        }
    }
}

ProductsContainer.propTypes = {
    products : PropTypes.arrayOf(
        PropTypes.shape({
            id : PropTypes.number.isRequired,
            name : PropTypes.string.isRequired,
            image : PropTypes.string,
            description : PropTypes.string,
            price : PropTypes.number.isRequired,
            inventory : PropTypes.number.isRequired,
            rating: PropTypes.number
        })
    ).isRequired
}


const mapStateToProps = state => {
    return {
        products : state.products 
    }
}

const mapDispatchToProps = (dispatch, product) => {
    return {
        onAddToCart: (product) => {
            dispatch(actAddToCart(product, 1));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
