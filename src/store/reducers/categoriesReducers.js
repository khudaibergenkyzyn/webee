import * as types from '../actions/types';

const initialState = {
    isLoading : false,
    categories : [],
}

export default function categoriesReducers(state = initialState , action){
    switch(action.type){
        case types.RECIEVED_ADD_CATEGORY:
            return {...state , categories: action.payload}
        case types.FAILURE_ADD_CATEGORY:
            alert('Введутся технические работы. Попробуйте позже')
            return state
        case types.RECIEVED_GET_CATEGORY:
            return {...state , categories: action.payload}
        case types.FAILURE_GET_CATEGORY:
            alert('Введутся технические работы. Попробуйте позже')
            return state
        case types.RECIEVED_EDIT_CATEGORY:
                return {...state , categories: action.payload}
        case types.FAILURE_EDIT_CATEGORY:
                alert('Введутся технические работы. Попробуйте позже')
                return state
        case types.RECIEVED_DELETE_CATEGORY:
                return {...state , categories: action.payload}
        case types.FAILURE_DELETE_CATEGORY:
                alert('Введутся технические работы. Попробуйте позже')
                return state
        default:
            return state
    }
}