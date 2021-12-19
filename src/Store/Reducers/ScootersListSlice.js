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
            isReserved: false
        },
        {
            chargeLevel: 20,
            name: 1,
            onCharge: false,
            isReserved: true
        },
        {
            chargeLevel: 33,
            name: 1,
            onCharge: true,
            isReserved: false
        },
        {
            chargeLevel: 78,
            name: 1,
            onCharge: false,
            isReserved: false
        },
        {
            chargeLevel: 88,
            name: 1,
            onCharge: false,
            isReserved: true
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
