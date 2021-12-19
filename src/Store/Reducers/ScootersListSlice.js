import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    error: null,
    scooters: [
        {
            chargeLevel: 85,
            name: 1,
            onCharge: false,
            isReserved: false,
            reserveButtonClicked: false
        },
        {
            chargeLevel: 20,
            name: 2,
            onCharge: false,
            isReserved: true,
            reserveButtonClicked: false
        },
        {
            chargeLevel: 33,
            name: 3,
            onCharge: true,
            isReserved: false,
            reserveButtonClicked: false
        },
        {
            chargeLevel: 78,
            name: 4,
            onCharge: false,
            isReserved: false,
            reserveButtonClicked: false
        },
        {
            chargeLevel: 88,
            name: 5,
            onCharge: false,
            isReserved: true,
            reserveButtonClicked: false
        },

    ]
}

export const scootersListSlice = createSlice(({
    name: 'scootersList',
    initialState,
    reducers: {},
    extraReducers: {}
}))

export default scootersListSlice.reducer
