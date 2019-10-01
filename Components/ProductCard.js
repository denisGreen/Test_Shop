import React from 'react'
import PropTypes from 'prop-types'

//card for the single Product
const ProductCard = ({name, description, img, onClick}) => {
	return(
		<div className = "market_product-card">
		<h3>{name}</h3>
		<img src={img.url} alt={img.altText} height="50 em" width="50 em"/>
		<div className = "market_product-card_decription">{description}</div>
		<button className="market_product-card_button button btn-danger" onClick={onClick}>Add to Cart</button>
	</div>
	)
}

ProductCard.propTypes = {
	onClick: PropTypes.func.isRequired,
	name: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	img: PropTypes.object.isRequired
}

export default ProductCard