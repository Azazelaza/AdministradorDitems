import { createSlice } from '@reduxjs/toolkit';

const initialStatus = {
    data: [],
}

export const orderSlice = createSlice({
    name: 'orderSlice',
    initialState: initialStatus,
    reducers: {
        setOrder: (state, { payload }) => {
            state.data = payload
        },
    }
})

export const { setOrder } = orderSlice.actions;
export default orderSlice.reducer