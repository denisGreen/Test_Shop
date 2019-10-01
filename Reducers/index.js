import {combineReducers} from 'redux'
import user from './user.js'
import shop from './shop.js'


const rootReducer = combineReducers({
	user, shop
})

export default rootReducer