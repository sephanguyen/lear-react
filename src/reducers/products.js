import * as Types from '../constants/ActionType'
import { remove, findIndex } from 'lodash'

var inittialState = []

const products = (state = inittialState, action) => {
  switch (action.type) {
    case Types.FETCH_PRODUCTS:
      state = action.products
      return [...state]
    case Types.DELETE_PRODUCT: {
      let { id } = action
      remove(state, { id })
      return [...state]
    }
    case Types.UPDATE_PRODUCT:
      let index = findIndex(state, { id: action.product.id })
      state[index] = action.product
      return [...state]
    case Types.ADD_PRODUCT:
      state.push(action.product)
      return [...state]

    default:
      return [...state]
  }
}

export default products
