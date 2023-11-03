import { createSlice } from '@reduxjs/toolkit';

const initialStatus = {
    data: [],
}

export const membershipSlice = createSlice({
    name: 'membershipSlice',
    initialState: initialStatus,
    reducers: {
        setMembership: (state, { payload }) => {
            state.data = payload.data
        },
    }
})

export const { setMembership } = membershipSlice.actions;
export default membershipSlice.reducer