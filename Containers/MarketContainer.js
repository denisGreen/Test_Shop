import {connect} from 'react-redux'
import {addProduct} from '../Actions/actions'
import ProductsList from '../Components/ProductsList.js'

//this is container for the market 

const mapStateToProps = state => {
	console.log(state)
  return{
    products: state.shop.products
  }
}

const mapDispatchToProps = dispatch => {
	return{
		addToCartClick: product => {
			dispatch(addProduct(product))
		}
	}
}

const MarketContainer = connect(
		mapStateToProps,
		mapDispatchToProps
	)(ProductsList)

export default MarketContainer