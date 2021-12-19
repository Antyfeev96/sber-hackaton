import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux'
import tramsReducer from './Reducers/TramsSlice'
import tramReducer from './Reducers/TramSlice'
import scootersReducer from './Reducers/ScootersListSlice'
import scooterReducer from './Reducers/ScooterSlice'

const rootReducer = combineReducers({
    tramsState: tramsReducer,
    tramState: tramReducer,
    scootersList: scootersReducer,
    scooterState: scooterReducer
})

const store = configureStore({
    reducer: rootReducer,
});

export default store


