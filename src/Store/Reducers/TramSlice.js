import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    error: null,
    scooters: [],
    tram: {
        latitude: '55.702793',
        longitude: '37.626884',
        destinationTime: '18:00',
        nextStopName: 'Южный речной порт',
        routeName: 'Маршрут №2',
        freeSeatsCount: 15,
        boatName: 'Синичка',
        services: ['WI_FI', 'TOILET', 'SCOOTER', 'VENDING_MACHINE']
    },
}

export const fetchTramById = createAsyncThunk(
    'trams/fetchTramById',
    async ({ id }, thunkAPI) => {
        try {
            const response = await axios.get(`https://honey-team-app.herokuapp.com/boat/get?boatId=${id}`)
            console.log({data: response.data})
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)

export const tramSlice = createSlice(({
    name: 'tram',
    initialState,
    reducers: {
        setCurrentTram: (state, action) => {
            state.tram = action.payload
        },
        clearState: () => initialState
    },
    extraReducers: {
        [fetchTramById.fulfilled]: (state, action) => {
            state.loading = false
            state.error = null
            state.tram = action.payload;
        },
        [fetchTramById.pending]: (state) => {
            state.loading = true
        },
        [fetchTramById.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload;
        }
    }
}))

export const { setCurrentTram, clearState } = tramSlice.actions

export default tramSlice.reducer
