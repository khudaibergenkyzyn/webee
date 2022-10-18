import {all , put , takeLatest} from 'redux-saga/effects';
import * as types from '../actions/types';
import axios from 'axios'


function* addItem({data}){
    try{
        let items = []
        if(JSON.parse(localStorage.getItem('items'))){
            items = JSON.parse(localStorage.getItem('items'))
        }
        items.push(data);
        localStorage.setItem('items' , JSON.stringify(items))
       yield put({type:types.RECIEVED_ADD_ITEM , payload : items})
    }catch(e){
        yield put({type: types.FAILURE_ADD_ITEM , errors: e})
    }
}


function* getCategories(){
    try{
        let items = []
        if(JSON.parse(localStorage.getItem('items'))){
            items = JSON.parse(localStorage.getItem('items'))
        }
        yield put({type:types.RECIEVED_GET_ITEMS , payload : items})
    }catch(e){
        yield put({type: types.FAILURE_GET_ITEMS , errors: e})
    }
}
function* editItem({data}){
    try{
        let items = []
        if(JSON.parse(localStorage.getItem('items'))){
            items = JSON.parse(localStorage.getItem('items'))
        }
        if(items[data.index]){
            items[data.index] = {
                title : data.title, 
                attrs : data.attrs,
                titleField : data.titleField,
            }
        }
        // categories.push(data);
        localStorage.setItem('items' , JSON.stringify(items))
       yield put({type:types.RECIEVED_EDIT_ITEM , payload : items})
    }catch(e){
        yield put({type: types.FAILURE_EDIT_ITEM , errors: e})
    }
}
function* deleteItem({data}){
    try{
        let items = []
        if(localStorage.getItem('items')){
            items = JSON.parse(localStorage.getItem('items'))
        }
        items.splice(data.index , 1)
        localStorage.setItem('items' , JSON.stringify(items))
       yield put({type:types.RECIEVED_DELETE_ITEM , payload : items})
    }catch(e){
        yield put({type: types.FAILURE_DELETE_ITEM , errors: e})
    }
}
export function* itemSagas(){
    yield all([
        yield takeLatest(types.ADD_ITEM , addItem),
        yield takeLatest(types.GET_ITEMS , getCategories),
        yield takeLatest(types.EDIT_ITEM , editItem),
        yield takeLatest(types.DELETE_ITEM , deleteItem),
    ])
}
