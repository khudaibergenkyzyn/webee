import {combineReducers} from 'redux';
import categoriesReducers from './categoriesReducers'
import itemsReducers from './itemsReducers'
export default combineReducers({
   categoriesReducers,
   itemsReducers
})