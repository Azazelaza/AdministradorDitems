import { createSlice } from '@reduxjs/toolkit';

const initialStatus = {
    data: [],
}

export const productsSlice = createSlice({
    name: 'productsSlice',
    initialState: initialStatus,
    reducers: {
        setProducts: (state, { payload }) => {
            state.data = payload
        },
    }
})

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer