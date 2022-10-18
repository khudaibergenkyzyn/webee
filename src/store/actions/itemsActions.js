import * as types from './types';

export function addItem(data){
    return {type: types.ADD_ITEM , data}
}

export function getItems(){
    return {type: types.GET_ITEMS }
}
export function editItem(data){
    return {type: types.EDIT_ITEM , data}
}
export function deleteItem(data){
    return {type: types.DELETE_ITEM , data}
}