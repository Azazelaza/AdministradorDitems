import { createSlice } from '@reduxjs/toolkit';

const initialStatus = {
    data: [],
}

export const ticketsSlice = createSlice({
    name: 'ticketsSlice',
    initialState: initialStatus,
    reducers: {
        setTickets: (state, { payload }) => {
            state.data = payload
        },
    }
})

export const { setTickets } = ticketsSlice.actions;
export default ticketsSlice.reducer