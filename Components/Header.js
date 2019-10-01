import React from 'react'
import {connect} from 'react-redux'
import './Header.css'

const Header = ({cart}) => {

	let count = cart.length
	return (
			<div className="header">
				{count}
			</div>
		)
}

const mapStateToProps = state =>{
	return {
		cart: state.shop.cart
	}
}

export default connect(mapStateToProps)(Header)