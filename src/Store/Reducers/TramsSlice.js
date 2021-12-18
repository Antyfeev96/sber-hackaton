import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    error: null,
    trams: []
}

export const fetchAllTrams = createAsyncThunk(
    'trams/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('http://192.168.31.222:8888/boat/get/all')
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
