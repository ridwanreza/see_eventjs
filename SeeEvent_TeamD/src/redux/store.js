import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducer/index';

import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga/index';

const sagaMiddleware = createSagaMiddleware();

// 1. Membuat Store
const storeRedux = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default storeRedux;
