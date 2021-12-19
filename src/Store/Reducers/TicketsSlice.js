import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    tickets: [
        {
            id: 1,
            date: '19.12.21, 19:00',
            pier: 'Автозаводский мост',
            status: 'Куплен'
        },
        {
            id: 2,
            date: '18.12.21, 19:00',
            pier: 'ЗИЛ',
            status: 'Поездка завершена'
        },
        {
            id: 3,
            date: '17.12.21, 19:00',
            pier: 'ЗИЛ-Юг',
            status: 'Поездка завершена'
        },
        {
            id: 4,
            date: '16.12.21, 19:00',
            pier: 'Нагатинская набережная',
            status: 'Поездка завершена'
        },
        {
            id: 5,
            date: '15.12.21, 19:00',
            pier: 'Южный речной причал',
            status: 'Поездка завершена'
        }
    ]
}

export const ticketsSlice = createSlice(({
    name: 'tickets',
    initialState,
    reducers: {},
    extraReducers: {}
}))

export default ticketsSlice.reducer
