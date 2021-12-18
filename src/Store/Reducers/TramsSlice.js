import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    trams: [
        {
            coords: [55.702793, 37.626884],
            destinationTime: '18:00',
            nextStopName: 'Южный речной порт',
            routeName: 'Маршрут №2',
            freeSeatsCount: 15,
            boatName: 'Синичка',
            services: {
                wi_fi: 'WI_FI',
                toilet: 'TOILET',
                scooter: 'SCOOTER',
                vendingMachine: 'VENDING_MACHINE'
            }
        },
        {
            coords: [55.700120, 37.628456],
            destinationTime: '18:00',
            nextStopName: 'Южный речной порт',
            routeName: 'Маршрут №2',
            freeSeatsCount: 15,
            boatName: 'Синичка',
            services: {
                wi_fi: 'WI_FI',
                toilet: 'TOILET',
                scooter: 'SCOOTER',
                vendingMachine: 'VENDING_MACHINE'
            }
        },
        {
            coords: [55.692832, 37.629497],
            destinationTime: '18:00',
            nextStopName: 'Южный речной порт',
            routeName: 'Маршрут №2',
            freeSeatsCount: 15,
            boatName: 'Синичка',
            services: {
                wi_fi: 'WI_FI',
                toilet: 'TOILET',
                scooter: 'SCOOTER',
                vendingMachine: 'VENDING_MACHINE'
            }
        },
        {
            coords: [55.690338, 37.628099],
            destinationTime: '18:00',
            nextStopName: 'Южный речной порт',
            routeName: 'Маршрут №2',
            freeSeatsCount: 15,
            boatName: 'Синичка',
            services: {
                wi_fi: 'WI_FI',
                toilet: 'TOILET',
                scooter: 'SCOOTER',
                vendingMachine: 'VENDING_MACHINE'
            }
        },
        {
            coords: [55.689400, 37.676036],
            destinationTime: '18:00',
            nextStopName: 'Южный речной порт',
            routeName: 'Маршрут №2',
            freeSeatsCount: 15,
            boatName: 'Синичка',
            services: {
                wi_fi: 'WI_FI',
                toilet: 'TOILET',
                scooter: 'SCOOTER',
                vendingMachine: 'VENDING_MACHINE'
            }
        },

    ]
}

export const tramsSlice = createSlice(({
    name: 'trams',
    initialState,
    reducers: {
        setTramsArray: (state, action) => {
            state.currentPage = action.payload.page
        }
    },
    extraReducers: {}
}))

export default tramsSlice.reducer
