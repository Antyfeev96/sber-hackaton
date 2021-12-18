import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    scooters: [],
    tram: {
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
}

export const fetchRequests = createAsyncThunk(
    'requestsStudent/fetchRequests',
    async (_, thunkAPI) => {
        const {itemsPerPage, currentPage, activeTab} = thunkAPI.getState().requestsStudent
        const params = {
            itemsPerPage: itemsPerPage,
            status: activeTab,
            page: currentPage,
        }

        try {
            const response = await instance.get(
                'https://dev.online.edu.ru/stud-bilet/v0/backend/pass_requests/get/user/status/',
                { params }
            )

            const {results, resultsTotal} = response.data;

            return { requests: results, itemsTotal: resultsTotal }
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)

export const fetchAmountOfRequestsForEachType = createAsyncThunk(
    'requestsStudent/fetchAmountOfRequestsForEachType',
    async (_, thunkAPI) => {
        try {
            const response =
                await instance.get('https://dev.online.edu.ru/stud-bilet/v0/backend/pass_requests/count/get/user/status')

            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)

export const requestsStudentSlice = createSlice(({
    name: 'requests',
    initialState,
    reducers: {
        setPage: (state, action) => {
            state.currentPage = action.payload.page
        },
        setActiveTab: (state, action) => {
            state.activeTab = action.payload.activeTab
        }
    },
    extraReducers: {
        [fetchRequests.fulfilled]: (state, action) => {
            state.status = 'success';
            state.error = null
            state.requests = action.payload.requests;
            state.itemsTotal = action.payload.itemsTotal
        },
        [fetchRequests.pending]: (state) => {
            state.status = 'pending';
        },
        [fetchRequests.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
        [fetchAmountOfRequestsForEachType.fulfilled]: (state, action) => {
            const {
                ACCEPTED,
                EXPIRED,
                PROCESSED_IN_TARGET_ORGANIZATION,
                REJECTED_BY_TARGET_ORGANIZATION,
                TARGET_ORGANIZATION_REVIEW
            } = action.payload;

            state.status = 'success';
            state.error = null
            state.requestsTypesAmount.accepted = ACCEPTED;
            state.requestsTypesAmount.rejected = REJECTED_BY_TARGET_ORGANIZATION;
            state.requestsTypesAmount.processing = PROCESSED_IN_TARGET_ORGANIZATION + TARGET_ORGANIZATION_REVIEW;
            state.requestsTypesAmount.expired = EXPIRED;
        },
        [fetchAmountOfRequestsForEachType.pending]: (state) => {
            state.status = 'pending';
        },
        [fetchAmountOfRequestsForEachType.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
    }
}))

export const { setPage, setActiveTab } = requestsStudentSlice.actions;

export default requestsStudentSlice.reducer
