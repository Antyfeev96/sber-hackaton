import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux'
import tramsReducer from './Reducers/TramsSlice'
import tramReducer from './Reducers/TramSlice'

const rootReducer = combineReducers({
    tramsState: tramsReducer,
    tramState: tramReducer
})

const store = configureStore({
    reducer: rootReducer,
});

export default store


