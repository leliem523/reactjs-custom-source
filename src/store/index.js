import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import HomeStore from '../modules/home/store'
// src/app/store.js
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';


// disalbe thunk and add redux-saga middleware
const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

export const store = configureStore({
  reducer: {
    ...HomeStore,
  },
  middleware
})

sagaMiddleware.run(rootSaga);