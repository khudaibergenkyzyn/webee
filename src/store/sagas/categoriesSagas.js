import {all , put , takeLatest} from 'redux-saga/effects';
import * as types from '../actions/types';
import axios from 'axios'


function* addCategory({data}){
    try{
        let categories = []
        if(JSON.parse(localStorage.getItem('categories'))){
            categories = JSON.parse(localStorage.getItem('categories'))
        }
        categories.push(data);
        localStorage.setItem('categories' , JSON.stringify(categories))
       yield put({type:types.RECIEVED_ADD_CATEGORY , payload : categories})
    }catch(e){
        yield put({type: types.FAILURE_ADD_CATEGORY , errors: e})
    }
}


function* getCategories(){
    try{
        let categories = []
        if(JSON.parse(localStorage.getItem('categories'))){
            categories = JSON.parse(localStorage.getItem('categories'))
        }
        yield put({type:types.RECIEVED_GET_CATEGORY , payload : categories})
    }catch(e){
        yield put({type: types.FAILURE_GET_CATEGORY , errors: e})
    }
}
function* editCategory({data}){
    try{
        let categories = []
        if(JSON.parse(localStorage.getItem('categories'))){
            categories = JSON.parse(localStorage.getItem('categories'))
        }
        if(categories[data.index]){
            categories[data.index] = {
                title : data.title, 
                attrs : data.attrs,
                titleField : data.titleField,
            }
        }
        // categories.push(data);
        localStorage.setItem('categories' , JSON.stringify(categories))
       yield put({type:types.RECIEVED_EDIT_CATEGORY , payload : categories})
    }catch(e){
        yield put({type: types.FAILURE_EDIT_CATEGORY, errors: e})
    }
}
function* deleteCategory({data}){
    try{
        let categories = []
        if(localStorage.getItem('categories')){
            categories = JSON.parse(localStorage.getItem('categories'))
        }
        categories.splice(data.index , 1)
        localStorage.setItem('categories' , JSON.stringify(categories))
       yield put({type:types.RECIEVED_DELETE_CATEGORY , payload : categories})
    }catch(e){
        yield put({type: types.FAILURE_DELETE_CATEGORY , errors: e})
    }
}
export function* categorySagas(){
    yield all([
        yield takeLatest(types.ADD_CATEGORY , addCategory),
        yield takeLatest(types.GET_CATEGORY , getCategories),
        yield takeLatest(types.EDIT_CATEGORY , editCategory),
        yield takeLatest(types.DELETE_CATEGORY , deleteCategory),
    ])
}
