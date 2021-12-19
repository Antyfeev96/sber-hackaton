import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    scooter: {},
}

export const scooterSlice = createSlice(({
    name: 'scooter',
    initialState,
    reducers: {
        setCurrentScooter: (state, action) => {
            state.scooter = action.payload
        },
        setReserveButtonClicked: (state, action) => {
            state.scooter.reserveButtonClicked = action.payload
        },
        clearState: () => initialState
    },
    extraReducers: {}
}))

export const { setCurrentScooter, clearState, setReserveButtonClicked } = scooterSlice.actions

export default scooterSlice.reducer
