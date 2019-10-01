import {connect} from 'react-redux'
import {removeProduct} from '../Actions/actions'
import CartList from '../Components/CartList.js'

const mapStateToProps = state => {
	console.log(state)
  return{
    cart: state.shop.cart
  }
}

const mapDispatchToProps = dispatch => {
	return{
		removeFromCartClick: id => {
			dispatch(removeProduct(id))
		}
	}
}

const CartContainer = connect(
		mapStateToProps,
		mapDispatchToProps
	)(CartList)

export default CartContainer