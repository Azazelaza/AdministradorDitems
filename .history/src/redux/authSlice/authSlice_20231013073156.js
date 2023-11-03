import { createSlice } from '@reduxjs/toolkit';

const initialStatus = {
    status: 'not-auth',
    checking: 1,
    id: null,
    email: null,
    photoURL: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialStatus,
    reducers: {
        setLogin: (state, { payload }) => {
            state.status = 'auth'
            state.id = payload.id
            state.username = payload.username
            state.email = payload.email
            state.checking = 0
        },
        logout: (state, { payload }) => {
            state.status = 'not-auth'
            state.uid = null
            state.email = null
            state.displayName = null
            state.photoURL = null
            state.errorMessage = null
            state.checking = 0
        },
        renew: (state) => {
            state.checking = !state.checking
        },
        notLoginComplete: (state) => {
            state.checking = 0
        }
    }
})

export const { setLogin, logout, renew, register, notLoginComplete } = authSlice.actions;
export default authSlice.reducer