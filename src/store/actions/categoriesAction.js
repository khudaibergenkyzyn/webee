import * as types from './types';

export function addCategory(data){
    return {type: types.ADD_CATEGORY , data}
}

export function getCategories(){
    return {type: types.GET_CATEGORY }
}
export function editCategory(data){
    return {type: types.EDIT_CATEGORY , data}
}
export function deleteCategory(data){
    return {type: types.DELETE_CATEGORY , data}
}