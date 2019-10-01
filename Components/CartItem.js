import React from 'react'
import PropTypes from 'prop-types'

const CartItem = ({name, onClick})=>{
	return(
			<div className="cart-item">
				<h4 className="product-name">{name}</h4>
				<button className="button btn btn-default" onClick={onClick}>Remove</button> 
			</div>
		)
}

//PropTypes

export default CartItem