import * as Types from '../constants/ActionType'
import callApi from '../utils/apiCaller'

export const actFetchProductsRequest = () => {
  return dispatch => {
    return callApi('products', 'GET', null).then(res => {
      dispatch(actFetchProducts(res.data))
    })
  }
}

export const actFetchProducts = products => {
  return {
    type: Types.FETCH_PRODUCTS,
    products
  }
}

export const actDeleteProduct = id => {
  return {
    type: Types.DELETE_PRODUCT,
    id
  }
}

export const actDeleteProductRequest = id => {
  return dispatch => {
    return callApi(`products/${id}`, 'DELETE', null).then(res => {
      if (res.status === 200) {
        dispatch(actDeleteProduct(id))
      }
    })
  }
}

export const actAddProdut = product => {
  return {
    type: Types.ADD_PRODUCT,
    product
  }
}

export const actAddProductRequest = product => {
  return dispatch => {
    return callApi('products', 'POST', product).then(res => {
      dispatch(actAddProdut(res.data))
    })
  }
}

export const actGetProduct = product => {
  return {
    type: Types.GET_PRODUCT,
    product
  }
}
export const actGetProductRequest = id => {
  return dispatch => {
    return callApi(`products/${id}`, 'GET', null).then(res => {
      dispatch(actGetProduct(res.data))
    })
  }
}

export const actUpdateProduc = product => {
  return {
    type: Types.UPDATE_PRODUCT,
    product
  }
}

export const actUpdateProductRequest = product => {
  return dispatch => {
    return callApi(`products/${product.id}`, 'PUT', {
      name: product.name,
      price: product.price,
      status: product.status
    }).then(res => {
      dispatch(actUpdateProduc(res.data))
    })
  }
}
