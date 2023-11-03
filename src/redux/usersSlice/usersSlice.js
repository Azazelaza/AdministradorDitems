import { createSlice } from '@reduxjs/toolkit';

const initialStatus = {
    data: [],
}

export const usersSlice = createSlice({
    name: 'usersSlice',
    initialState: initialStatus,
    reducers: {
        setusers: (state, { payload }) => {
            state.data = payload
        },
    }
})

export const { setusers } = usersSlice.actions;
export default usersSlice.reducer