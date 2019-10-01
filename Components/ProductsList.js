import React from 'react'
import PropTypes from 'prop-types'


import ProductCard from '../Components/ProductCard.js'

//list of aviable products
const ProductsList = ({products, addToCartClick}) =>{
	
//map through the products array and fill the props for ProductCard
	let productsList = products.map(item => <ProductCard key={item.key} {...item} onClick={()=> addToCartClick(item)}/>)
	return(
			<div>
				{productsList}
			</div>
		)
}


ProductsList.propTypes ={
	products: PropTypes.arrayOf(
			PropTypes.shape({
				key: PropTypes.number.isRequired,
				name: PropTypes.string.isRequired,
				description: PropTypes.string.isRequired
			})
		),
	addToCartClick: PropTypes.func.isRequired
}

export default ProductsList