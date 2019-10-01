import React from 'react'
import PropTypes from 'prop-types'
import CartItem from './CartItem.js'
import EmptyCart from './EmptyCart.js'



const CartList = ({cart, removeFromCartClick})=>{
	if(cart.length === 0){
		return (<EmptyCart />)
	}
	
	let cartList = cart.map(item => <CartItem key={item.id.key} {...item} onClick={()=> removeFromCartClick(item.id)}/>)
	return(
			<div>
				{cartList}
			</div>
		)
}

//PropTypes
export default CartList
