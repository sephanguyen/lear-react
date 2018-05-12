import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ProductItem extends Component {
  render() {
    var { product, index } = this.props
    var statusName = product.status ? 'Còn Hàng' : 'Hết Hàng'
    var statusClass = product.status ? 'success' : 'default'
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.description}</td>
        <td>{product.price}đ</td>
        <td>
          <span className={`label label-${statusClass}`}>{statusName}</span>
        </td>
        <td>
          <Link
            to={`/product/${product.id}/edit`}
            className="btn btn-info mr-5"
          >
            <i className="glyphicon glyphicon-edit" /> Sửa
          </Link>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => this.onDelete(product.id)}
          >
            <i className="glyphicon glyphicon-trash" /> Xóa
          </button>
        </td>
      </tr>
    )
  }

  onDelete = id => {
    // if (confirm('Ban chac chan muon xoa ko')) //eslint-disable-line
    // {
    //   console.log(123)
    // }
    this.props.onDeleteProduct(id)
  }
}

export default ProductItem
