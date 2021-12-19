import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    ticket: {}
}

export const ticketSlice = createSlice(({
    name: 'ticket',
    initialState,
    reducers: {
        setCurrentTicket: (state, action) => {
            state.ticket = action.payload
        },
        clearState: () => initialState
    },
    extraReducers: {}
}))

export const { setCurrentTicket } = ticketSlice.actions

export default ticketSlice.reducer
