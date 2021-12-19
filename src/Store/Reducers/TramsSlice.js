import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    error: null,
    trams: [
        // {
        //     latitude: '55.702793',
        //     longitude: '37.626884',
        //     destinationTime: '18:00',
        //     nextStopName: 'Южный речной порт',
        //     routeName: 'Маршрут №2',
        //     freeSeatsCount: 15,
        //     boatName: 'Синичка',
        //     services: ['WI_FI', 'TOILET', 'SCOOTER', 'VENDING_MACHINE']
        // },
        // {
        //     latitude: '55.702000',
        //     longitude: '37.626884',
        //     destinationTime: '18:00',
        //     nextStopName: 'Южный речной порт',
        //     routeName: 'Маршрут №2',
        //     freeSeatsCount: 15,
        //     boatName: 'Синичка',
        //     services: ['WI_FI', 'TOILET', 'SCOOTER', 'VENDING_MACHINE']
        // },
        // {
        //     latitude: '55.701000',
        //     longitude: '37.626884',
        //     destinationTime: '18:00',
        //     nextStopName: 'Южный речной порт',
        //     routeName: 'Маршрут №2',
        //     freeSeatsCount: 15,
        //     boatName: 'Синичка',
        //     services: ['WI_FI', 'TOILET', 'SCOOTER', 'VENDING_MACHINE']
        // },
        // {
        //     latitude: '55.700000',
        //     longitude: '37.626884',
        //     destinationTime: '18:00',
        //     nextStopName: 'Южный речной порт',
        //     routeName: 'Маршрут №2',
        //     freeSeatsCount: 15,
        //     boatName: 'Синичка',
        //     services: ['WI_FI', 'TOILET', 'SCOOTER', 'VENDING_MACHINE']
        // },
        // {
        //     latitude: '55.699000',
        //     longitude: '37.626884',
        //     destinationTime: '18:00',
        //     nextStopName: 'Южный речной порт',
        //     routeName: 'Маршрут №2',
        //     freeSeatsCount: 15,
        //     boatName: 'Синичка',
        //     services: ['WI_FI', 'TOILET', 'SCOOTER', 'VENDING_MACHINE']
        // },
    ]
}

export const fetchAllTrams = createAsyncThunk(
    'trams/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('https://app123456789086754.herokuapp.com/boat/get/all')
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)

export const tramsSlice = createSlice(({
    name: 'trams',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchAllTrams.fulfilled]: (state, action) => {
            state.loading = false
            state.error = null
            state.trams = action.payload;
        },
        [fetchAllTrams.pending]: (state) => {
            state.loading = true
        },
        [fetchAllTrams.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload;
        }
    }
}))

export default tramsSlice.reducer
