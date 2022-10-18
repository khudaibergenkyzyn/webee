import {all} from 'redux-saga/effects';
import { categorySagas } from './categoriesSagas';
import { itemSagas } from './itemsSagas';
export default function* rootSaga(){
    yield all([
       categorySagas(),
       itemSagas()
    ])
}