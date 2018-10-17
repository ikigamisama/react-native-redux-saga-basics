/** @format */
import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import allReducers from './src/reducers';
import CounterContainer from './src/containers/CounterContainer';

import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

import rootSaga from './src/sagas/rootSaga';


let store = createStore(allReducers,applyMiddleware(sagaMiddleware));

const App = () => (
    <Provider store={store}>
        <CounterContainer />
    </Provider>
)
sagaMiddleware.run(rootSaga);


AppRegistry.registerComponent(appName, () => App);
