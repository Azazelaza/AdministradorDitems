import { createSlice } from '@reduxjs/toolkit';

const initialStatus = {
    data: [],
}

export const invoiceSlice = createSlice({
    name: 'invoiceSlice',
    initialState: initialStatus,
    reducers: {
        setInvoice: (state, { payload }) => {
            state.data = payload
        },
    }
})

export const { setInvoice } = invoiceSlice.actions;
export default invoiceSlice.reducer