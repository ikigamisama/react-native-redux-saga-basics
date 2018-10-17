import { INCREMENT ,DECREMENT } from '../actions/actionTypes';

import { delay } from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';

export function sayHello(){

}
function increment(){
    console.log('This is incremnet saga');
}

export function* watchIncrement(){
    yield takeEvery(INCREMENT, increment);
}

function decrement(){
    console.log('This is decrement saga');
}
export function* watchDecrement(){
    yield takeEvery(DECREMENT, decrement)
}