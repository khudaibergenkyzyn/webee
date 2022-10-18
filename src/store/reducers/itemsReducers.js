import * as types from '../actions/types';

const initialState = {
    isLoading : false,
    items : [],
}

export default function itemsReducers(state = initialState , action){
    switch(action.type){
        case types.RECIEVED_ADD_ITEM:
            return {...state , items: action.payload}
        case types.FAILURE_ADD_ITEM:
            alert('Введутся технические работы. Попробуйте позже')
            return state
        case types.RECIEVED_GET_ITEMS:
            return {...state , items: action.payload}
        case types.FAILURE_GET_ITEMS:
            alert('Введутся технические работы. Попробуйте позже')
            return state
        case types.RECIEVED_EDIT_ITEM:
                return {...state , items: action.payload}
        case types.FAILURE_EDIT_ITEM:
                alert('Введутся технические работы. Попробуйте позже')
                return state
        case types.RECIEVED_DELETE_ITEM:
                return {...state , items: action.payload}
        case types.FAILURE_DELETE_ITEM:
                alert('Введутся технические работы. Попробуйте позже')
                return state
        default:
            return state
    }
}