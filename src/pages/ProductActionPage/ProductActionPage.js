import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  actAddProductRequest,
  actUpdateProductRequest,
  actGetProductRequest
} from '../../actions/index'
import callApi from '../../utils/apiCaller'

class ProductActionPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      txtName: '',
      txtDescription: '',
      txtPrice: '',
      chkbStatus: ''
    }
  }

  onChange = e => {
    let target = e.target
    let name = target.name
    let value = target.type === 'checkbox' ? target.checked : target.value
    this.setState({
      [name]: value
    })
  }

  onSubmit = e => {
    e.preventDefault()
    let { id, txtName, txtDescription, txtPrice, chkbStatus } = this.state
    let { history } = this.props
    let product = {
      id,
      name: txtName,
      price: txtPrice,
      status: chkbStatus
    }
    if (id) {
      this.props.onUpdateProduct(product)
    } else {
      this.props.onAddProduct(product)
    }
    history.goBack()
  }
  componentDidMount() {
    let { match } = this.props
    if (match) {
      let id = match.params.id
      this.props.onGetProduct(id)
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.itemEditing) {
      let { itemEditing } = nextProps
      this.setState({
        id: itemEditing.id,
        txtName: itemEditing.name,
        txtDescription: itemEditing.description,
        txtPrice: itemEditing.price,
        chkbStatus: itemEditing.status
      })
    }
  }

  render() {
    var { txtName, txtDescription, txtPrice, chkbStatus } = this.state
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <form onSubmit={this.onSubmit}>
              <legend>* Vui lòng nhập đầy đủ thông tin</legend>
              <div className="form-group">
                <label>Tên Sản Phẩm: </label>
                <input
                  onChange={this.onChange}
                  value={txtName}
                  name="txtName"
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Mô Tả Sản Phẩm: </label>
                <textarea
                  onChange={this.onChange}
                  value={txtDescription}
                  name="txtDescription"
                  className="form-control"
                  rows="3"
                />
              </div>
              <div className="form-group">
                <label>Giá: </label>
                <input
                  onChange={this.onChange}
                  value={txtPrice}
                  name="txtPrice"
                  type="number"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Tình Trạng: </label>
              </div>
              <div className="checkbox">
                <label>
                  <input
                    checked={chkbStatus}
                    onChange={this.onChange}
                    value={chkbStatus}
                    type="checkbox"
                    name="chkbStatus"
                  />
                  Còn Hàng
                </label>
              </div>
              <Link to="/product-list" className="btn btn-danger mr-5">
                <i className="glyphicon glyphicon-arrow-left" /> Trở Lại
              </Link>
              <button type="submit" className="btn btn-primary">
                <i className="glyphicon glyphicon-save" /> Lưu Lại
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddProduct: product => {
      dispatch(actAddProductRequest(product))
    },
    onGetProduct: id => {
      dispatch(actGetProductRequest(id))
    },
    onUpdateProduct: product => {
      dispatch(actUpdateProductRequest(product))
    }
  }
}
const mapStateToProps = state => {
  return {
    itemEditing: state.itemEditing
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage)
