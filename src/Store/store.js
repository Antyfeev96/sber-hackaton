import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux'
import tramsReducer from './Reducers/TramsSlice'
import tramReducer from './Reducers/TramSlice'
import scootersReducer from './Reducers/ScootersListSlice'

const rootReducer = combineReducers({
    tramsState: tramsReducer,
    tramState: tramReducer,
    scootersList: scootersReducer
})

const store = configureStore({
    reducer: rootReducer,
});

export default store


