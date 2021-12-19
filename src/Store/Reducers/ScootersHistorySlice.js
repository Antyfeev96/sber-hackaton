import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    scooters: [
        {
            id: 1,
            date: '19.12.21, 19:00',
            name: 'Самокат 1',
            status: 'reserved'
        },
        {
            id: 2,
            date: '18.12.21, 19:00',
            name: 'Самокат 2',
            status: 'closed'
        },
        {
            id: 3,
            date: '17.12.21, 19:00',
            name: 'Самокат 3',
            status: 'closed'
        },
        {
            id: 4,
            date: '16.12.21, 19:00',
            name: 'Самокат 4',
            status: 'closed'
        },
        {
            id: 5,
            date: '15.12.21, 19:00',
            name: 'Самокат 5',
            status: 'closed'
        },
    ],
    scooter: {}
}

export const scootersHistorySlice = createSlice(({
    name: 'scootersHistory',
    initialState,
    reducers: {
        setCurrentScooter: (state, action) => {
            state.scooter = action.payload
        }
    },
    extraReducers: {}
}))

export const { setCurrentScooter } = scootersHistorySlice.actions

export default scootersHistorySlice.reducer
