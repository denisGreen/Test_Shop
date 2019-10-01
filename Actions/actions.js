import constants from '../constants.js'

let cartId = 0
export const addProduct = (product) =>{
	return {
		payload:{...product, id: cartId++},
		type: constants.ADD
	}	
	
}

export const removeProduct = (id) =>{
	return {
		payload: id,
		type: constants.REMOVE
	}	
	
}