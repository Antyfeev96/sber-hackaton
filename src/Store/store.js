import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux'
import tramsReducer from './Reducers/TramsSlice'

const rootReducer = combineReducers({
    trams: tramsReducer
})

const store = configureStore({
    reducer: rootReducer,
});

export default store


